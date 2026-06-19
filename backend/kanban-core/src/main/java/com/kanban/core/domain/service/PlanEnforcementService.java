package com.kanban.core.domain.service;

import org.jspecify.annotations.NullMarked;

@NullMarked
public class PlanEnforcementService {

    public boolean canCreateBoard(String plan, int currentBoardCount, int maxBoards) {
        return currentBoardCount < maxBoards;
    }

    public boolean canAddMember(String plan, int currentMemberCount, int maxMembers) {
        return currentMemberCount < maxMembers;
    }

    public boolean canCreateCard(String plan, int currentCardCount, int maxCards) {
        return currentCardCount < maxCards;
    }
}
