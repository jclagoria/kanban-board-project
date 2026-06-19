package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.EmailVerificationToken;
import com.kanban.core.domain.model.PasswordResetToken;
import com.kanban.core.domain.vo.UserId;
import com.kanban.core.port.output.ResetTokenRepository;
import com.kanban.infrastructure.persistence.entity.ResetTokenEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;
import java.time.Duration;
import java.time.Instant;
import java.util.UUID;
import static org.springframework.data.relational.core.query.Criteria.where;

@NullMarked
@Repository
public class R2dbcResetTokenRepository implements ResetTokenRepository {

    private static final String TYPE_PASSWORD_RESET = "password_reset";
    private static final String TYPE_EMAIL_VERIFICATION = "email_verification";

    private final R2dbcEntityTemplate template;

    public R2dbcResetTokenRepository(R2dbcEntityTemplate template) {
        this.template = template;
    }

    @Override
    public Mono<PasswordResetToken> save(PasswordResetToken token) {
        var entity = new ResetTokenEntity(
            null, token.userId().value(), token.tokenHash(),
            TYPE_PASSWORD_RESET, token.expiresAt(), token.isUsed(), token.createdAt());
        return template.insert(ResetTokenEntity.class).using(entity)
            .map(saved -> PasswordResetToken.reconstitute(
                saved.id(), token.userId(), token.tokenHash(),
                token.expiresAt(), token.isUsed(), token.createdAt()));
    }

    @Override
    public Mono<PasswordResetToken> findPasswordResetByHash(String tokenHash) {
        return template.select(ResetTokenEntity.class)
            .matching(Query.query(
                where("token_hash").is(tokenHash)
                    .and("type").is(TYPE_PASSWORD_RESET)))
            .one()
            .map(e -> PasswordResetToken.reconstitute(
                e.id(), new UserId(e.userId()), e.tokenHash(),
                e.expiresAt(), e.used(), e.createdAt()));
    }

    @Override
    public Mono<EmailVerificationToken> save(EmailVerificationToken token) {
        var entity = new ResetTokenEntity(
            null, token.userId().value(), token.tokenHash(),
            TYPE_EMAIL_VERIFICATION, token.expiresAt(), token.isUsed(), token.createdAt());
        return template.insert(ResetTokenEntity.class).using(entity)
            .map(saved -> EmailVerificationToken.reconstitute(
                saved.id(), token.userId(), token.tokenHash(),
                token.expiresAt(), token.isUsed(), token.createdAt()));
    }

    @Override
    public Mono<EmailVerificationToken> findVerificationByHash(String tokenHash) {
        return template.select(ResetTokenEntity.class)
            .matching(Query.query(
                where("token_hash").is(tokenHash)
                    .and("type").is(TYPE_EMAIL_VERIFICATION)))
            .one()
            .map(e -> EmailVerificationToken.reconstitute(
                e.id(), new UserId(e.userId()), e.tokenHash(),
                e.expiresAt(), e.used(), e.createdAt()));
    }

    @Override
    public Mono<Void> markUsed(String tokenHash) {
        return template.select(ResetTokenEntity.class)
            .matching(Query.query(where("token_hash").is(tokenHash)))
            .one()
            .flatMap(entity -> {
                var updated = new ResetTokenEntity(
                    entity.id(), entity.userId(), entity.tokenHash(),
                    entity.type(), entity.expiresAt(), true, entity.createdAt());
                return template.update(updated).then();
            });
    }
}
