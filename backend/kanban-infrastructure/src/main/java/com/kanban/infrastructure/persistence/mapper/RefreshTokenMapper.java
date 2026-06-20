package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.RefreshToken;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.RefreshTokenEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class RefreshTokenMapper {

    public RefreshTokenEntity toInsertEntity(RefreshToken domain) {
        return new RefreshTokenEntity(
            null,
            domain.userId().value(),
            domain.tokenHash(),
            domain.expiresAt(),
            domain.isRevoked(),
            domain.issuedAt()
        );
    }

    public RefreshToken toDomain(RefreshTokenEntity entity) {
        return RefreshToken.reconstitute(
            entity.id(),
            new UserId(entity.userId()),
            entity.tokenHash(),
            entity.createdAt(),
            entity.expiresAt(),
            entity.revoked()
        );
    }
}
