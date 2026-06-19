package com.kanban.infrastructure.persistence.r2dbc;

import com.kanban.core.domain.model.Card;
import com.kanban.core.domain.model.CardComment;
import com.kanban.core.domain.vo.BoardId;
import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.domain.vo.CardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import com.kanban.core.domain.model.CustomFieldValue;
import com.kanban.core.port.output.CardRepository;
import com.kanban.infrastructure.persistence.entity.BoardListEntity;
import com.kanban.infrastructure.persistence.entity.CardCommentEntity;
import com.kanban.infrastructure.persistence.entity.CardCustomFieldEntity;
import com.kanban.infrastructure.persistence.entity.CardEntity;
import com.kanban.infrastructure.persistence.mapper.CardMapper;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.data.relational.core.query.Update;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.util.List;
import java.util.UUID;
import static org.springframework.data.relational.core.query.Criteria.where;
import java.util.Map;

@NullMarked
@Repository
public class R2dbcCardRepository implements CardRepository {

    private final R2dbcEntityTemplate template;
    private final CardMapper mapper;

    public R2dbcCardRepository(R2dbcEntityTemplate template, CardMapper mapper) {
        this.template = template;
        this.mapper = mapper;
    }

    @Override
    public Mono<Card> findById(CardId id) {
        Mono<CardEntity> entityMono = template.select(CardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .one();
        Mono<List<CardCommentEntity>> commentsMono = template.select(CardCommentEntity.class)
                .matching(Query.query(where("card_id").is(id.value())))
                .all()
                .collectList();
        Mono<List<CardCustomFieldEntity>> customFieldsMono = template.select(CardCustomFieldEntity.class)
                .matching(Query.query(where("card_id").is(id.value())))
                .all()
                .collectList();
        return Mono.zip(entityMono, commentsMono, customFieldsMono)
                .map(tuple -> mapper.toDomain(tuple.getT1(), tuple.getT2(), tuple.getT3(), Map.of()));
    }

    @Override
    public Flux<Card> findByListId(BoardListId listId) {
        return template.select(CardEntity.class)
                .matching(Query.query(where("list_id").is(listId.value())))
                .all()
                .map(mapper::toDomain);
    }

    @Override
    public Flux<Card> findByBoardId(BoardId boardId) {
        return template.select(BoardListEntity.class)
                .matching(Query.query(where("board_id").is(boardId.value())))
                .all()
                .map(BoardListEntity::id)
                .collectList()
                .flatMapMany(listIds -> {
                    if (listIds.isEmpty()) {
                        return Flux.empty();
                    }
                    return template.select(CardEntity.class)
                            .matching(Query.query(where("list_id").in(listIds)))
                            .all()
                            .map(mapper::toDomain);
                });
    }

    @Override
    public Mono<Card> insert(Card card) {
        CardEntity entity = mapper.toInsertEntity(card);
        return template.insert(entity)
                .flatMap(saved -> {
                    UUID cardId = saved.id();
                    List<CardCommentEntity> commentEntities = mapper.toCommentEntities(card);
                    List<CardCustomFieldEntity> customFieldEntities = mapper.toCustomFieldEntities(card);
                    return Flux.fromIterable(commentEntities)
                            .flatMap(template::insert)
                            .thenMany(Flux.fromIterable(customFieldEntities))
                            .flatMap(template::insert)
                            .then()
                            .thenReturn(mapper.assignGeneratedId(card, saved));
                });
    }

    @Override
    public Mono<Card> update(Card card) {
        UUID cardId = card.id().value();
        CardEntity entity = mapper.toUpdateEntity(card);
        List<CardCommentEntity> commentEntities = mapper.toCommentEntities(card);
        List<CardCustomFieldEntity> customFieldEntities = mapper.toCustomFieldEntities(card);

        return template.update(entity)
                .then(template.delete(CardCommentEntity.class)
                        .matching(Query.query(where("card_id").is(cardId)))
                        .all())
                .then(template.delete(CardCustomFieldEntity.class)
                        .matching(Query.query(where("card_id").is(cardId)))
                        .all())
                .thenMany(Flux.fromIterable(commentEntities))
                .flatMap(template::insert)
                .thenMany(Flux.fromIterable(customFieldEntities))
                .flatMap(template::insert)
                .then()
                .thenReturn(card);
    }

    @Override
    public Mono<Void> archive(CardId id) {
        return template.update(CardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .apply(Update.update("archived", true))
                .then();
    }

    @Override
    public Mono<Void> delete(CardId id) {
        return template.delete(CardEntity.class)
                .matching(Query.query(where("id").is(id.value())))
                .all()
                .then();
    }
}
