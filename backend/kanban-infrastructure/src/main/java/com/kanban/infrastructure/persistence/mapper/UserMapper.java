package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.User;
import com.kanban.core.domain.vo.Email;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.UserEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;

@Component
@NullMarked
public class UserMapper {

    public UserEntity toInsertEntity(User domain) {
        return new UserEntity(
            null,
            domain.email().value(),
            domain.passwordHash(),
            domain.displayName(),
            domain.avatarUrl(),
            domain.twoFactorEnabled(),
            domain.twoFactorSecret(),
            domain.plan(),
            domain.storageUsedBytes(),
            domain.emailVerified(),
            domain.emailVerifiedAt(),
            domain.issuedBefore(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public UserEntity toUpdateEntity(User domain) {
        return new UserEntity(
            domain.id().value(),
            domain.email().value(),
            domain.passwordHash(),
            domain.displayName(),
            domain.avatarUrl(),
            domain.twoFactorEnabled(),
            domain.twoFactorSecret(),
            domain.plan(),
            domain.storageUsedBytes(),
            domain.emailVerified(),
            domain.emailVerifiedAt(),
            domain.issuedBefore(),
            domain.createdAt(),
            domain.updatedAt()
        );
    }

    public User toDomain(UserEntity entity) {
        return User.reconstitute(
            new UserId(entity.id()),
            new Email(entity.email()),
            entity.passwordHash(),
            entity.displayName(),
            entity.avatarUrl(),
            entity.twoFactorEnabled(),
            entity.twoFactorSecret(),
            entity.plan(),
            entity.storageUsedBytes(),
            entity.emailVerified(),
            entity.emailVerifiedAt(),
            entity.issuedBefore(),
            entity.createdAt(),
            entity.updatedAt()
        );
    }

    public User assignGeneratedId(User domain, UserEntity savedEntity) {
        return domain.withId(new UserId(savedEntity.id()));
    }
}
