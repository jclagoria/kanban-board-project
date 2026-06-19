package com.kanban.core.domain.model;

import com.kanban.core.domain.vo.BoardListId;
import com.kanban.core.domain.vo.CardId;
import com.kanban.core.domain.vo.FieldDefinitionId;
import com.kanban.core.domain.vo.Position;
import com.kanban.core.domain.vo.UserId;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import java.time.Instant;
import java.util.*;

@NullMarked
public class Card {

    private final CardId id;
    private final BoardListId listId;
    private final String title;
    private final Position position;
    private final @Nullable String description;
    private final @Nullable Instant dueDate;
    private final @Nullable Instant startDate;
    private final @Nullable String coverColor;
    private final boolean archived;
    private final UserId createdBy;
    private final List<CardComment> comments;
    private final List<CardLabel> labels;
    private final List<CardChecklistItem> checklistItems;
    private final Map<FieldDefinitionId, CustomFieldValue> customFields;
    private final Instant createdAt;
    private final Instant updatedAt;

    private Card(CardId id, BoardListId listId, String title, Position position,
                 @Nullable String description, @Nullable Instant dueDate,
                 @Nullable Instant startDate, @Nullable String coverColor,
                 boolean archived, UserId createdBy, List<CardComment> comments, List<CardLabel> labels,
                 List<CardChecklistItem> checklistItems,
                 Map<FieldDefinitionId, CustomFieldValue> customFields,
                 Instant createdAt, Instant updatedAt) {
        this.id = Objects.requireNonNull(id, "id must not be null");
        this.listId = Objects.requireNonNull(listId, "listId must not be null");
        this.title = Objects.requireNonNull(title, "title must not be null");
        this.position = Objects.requireNonNull(position, "position must not be null");
        this.description = description;
        this.dueDate = dueDate;
        this.startDate = startDate;
        this.coverColor = coverColor;
        this.archived = archived;
        this.createdBy = Objects.requireNonNull(createdBy, "createdBy must not be null");
        this.comments = List.copyOf(comments);
        this.labels = List.copyOf(labels);
        this.checklistItems = List.copyOf(checklistItems);
        this.customFields = Map.copyOf(customFields);
        this.createdAt = Objects.requireNonNull(createdAt, "createdAt must not be null");
        this.updatedAt = Objects.requireNonNull(updatedAt, "updatedAt must not be null");
    }

    public static Card create(BoardListId listId, String title, Position position, UserId createdBy) {
        CardId tempId = new CardId(UUID.randomUUID());
        var now = Instant.now();
        return new Card(tempId, listId, title, position,
            null, null, null, null, false, createdBy,
            List.of(), List.of(), List.of(), Map.of(), now, now);
    }

    public static Card reconstitute(CardId id, BoardListId listId, String title,
                                     Position position, @Nullable String description,
                                     @Nullable Instant dueDate, @Nullable Instant startDate,
                                     @Nullable String coverColor, boolean archived, UserId createdBy,
                                     List<CardComment> comments, List<CardLabel> labels,
                                     List<CardChecklistItem> checklistItems,
                                     Map<FieldDefinitionId, CustomFieldValue> customFields,
                                     Instant createdAt, Instant updatedAt) {
        return new Card(id, listId, title, position, description, dueDate, startDate,
            coverColor, archived, createdBy, comments, labels, checklistItems, customFields,
            createdAt, updatedAt);
    }

    public Card withId(CardId newId) {
        return new Card(newId, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, this.updatedAt);
    }

    public Card moveTo(BoardListId targetList, Position newPosition) {
        return new Card(this.id, targetList, this.title, newPosition,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, Instant.now());
    }

    public Card archive() {
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            true, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, Instant.now());
    }

    public Card updateTitle(String newTitle) {
        return new Card(this.id, this.listId, newTitle, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, Instant.now());
    }

    public Card updateDescription(@Nullable String newDescription) {
        return new Card(this.id, this.listId, this.title, this.position,
            newDescription, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, Instant.now());
    }

    public Card updateDates(@Nullable Instant dueDate, @Nullable Instant startDate) {
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, dueDate, startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            this.customFields, this.createdAt, Instant.now());
    }

    public Card addComment(CardComment comment) {
        var newComments = new ArrayList<>(this.comments);
        newComments.add(comment);
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, Collections.unmodifiableList(newComments), this.labels,
            this.checklistItems, this.customFields, this.createdAt, Instant.now());
    }

    public Card addLabel(CardLabel label) {
        var newLabels = new ArrayList<>(this.labels);
        newLabels.add(label);
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, Collections.unmodifiableList(newLabels),
            this.checklistItems, this.customFields, this.createdAt, Instant.now());
    }

    public Card addChecklistItem(CardChecklistItem item) {
        var newItems = new ArrayList<>(this.checklistItems);
        newItems.add(item);
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels,
            Collections.unmodifiableList(newItems),
            this.customFields, this.createdAt, Instant.now());
    }

    public Card assignCustomField(FieldDefinitionId fieldDefId, CustomFieldValue value) {
        var newFields = new HashMap<>(this.customFields);
        newFields.put(fieldDefId, value);
        return new Card(this.id, this.listId, this.title, this.position,
            this.description, this.dueDate, this.startDate, this.coverColor,
            this.archived, this.createdBy, this.comments, this.labels, this.checklistItems,
            Collections.unmodifiableMap(newFields), this.createdAt, Instant.now());
    }

    public CardId id() { return id; }
    public BoardListId listId() { return listId; }
    public String title() { return title; }
    public Position position() { return position; }
    public @Nullable String description() { return description; }
    public @Nullable Instant dueDate() { return dueDate; }
    public @Nullable Instant startDate() { return startDate; }
    public @Nullable String coverColor() { return coverColor; }
    public boolean isArchived() { return archived; }
    public UserId createdBy() { return createdBy; }
    public List<CardComment> comments() { return comments; }
    public List<CardLabel> labels() { return labels; }
    public List<CardChecklistItem> checklistItems() { return checklistItems; }
    public Map<FieldDefinitionId, CustomFieldValue> customFields() { return customFields; }
    public Instant createdAt() { return createdAt; }
    public Instant updatedAt() { return updatedAt; }
}
