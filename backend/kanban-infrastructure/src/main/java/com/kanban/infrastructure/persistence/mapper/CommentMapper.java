package com.kanban.infrastructure.persistence.mapper;

import com.kanban.core.domain.model.CardComment;
import com.kanban.core.domain.vo.CommentId;
import com.kanban.core.domain.vo.UserId;
import com.kanban.infrastructure.persistence.entity.CardCommentEntity;
import org.jspecify.annotations.NullMarked;
import org.springframework.stereotype.Component;
import java.util.UUID;

@Component
@NullMarked
public class CommentMapper {

    public CardCommentEntity toEntity(CardComment domain, UUID cardId) {
        return new CardCommentEntity(
            null,
            cardId,
            domain.authorId().value(),
            domain.body(),
            domain.createdAt(),
            domain.createdAt()
        );
    }

    public CardComment toDomain(CardCommentEntity entity) {
        return new CardComment(
            new CommentId(entity.id()),
            new UserId(entity.authorId()),
            entity.body(),
            entity.createdAt()
        );
    }
}
