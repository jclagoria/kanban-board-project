import type { ComponentType } from 'react'

// Auth screens
import LoginPage from '@/features/auth/components/wireframes/LoginPage'
import LoginInvalidCreds from '@/features/auth/components/wireframes/LoginInvalidCreds'
import LoginLocked from '@/features/auth/components/wireframes/LoginLocked'
import RegisterPage from '@/features/auth/components/wireframes/RegisterPage'
import RegisterEmailExists from '@/features/auth/components/wireframes/RegisterEmailExists'
import RegisterPwdTooShort from '@/features/auth/components/wireframes/RegisterPwdTooShort'
import RegisterPwdTooCommon from '@/features/auth/components/wireframes/RegisterPwdTooCommon'
import DashboardWelcome from '@/features/auth/components/wireframes/DashboardWelcome'
import ForgotPassword from '@/features/auth/components/wireframes/ForgotPassword'
import ForgotPasswordConfirm from '@/features/auth/components/wireframes/ForgotPasswordConfirm'
import ResetPasswordForm from '@/features/auth/components/wireframes/ResetPasswordForm'
import ResetPasswordSuccess from '@/features/auth/components/wireframes/ResetPasswordSuccess'
import ResetLinkExpired from '@/features/auth/components/wireframes/ResetLinkExpired'
import EmailNotVerified from '@/features/auth/components/wireframes/EmailNotVerified'
import SessionExpired from '@/features/auth/components/wireframes/SessionExpired'
import CompromisedAlert from '@/features/auth/components/wireframes/CompromisedAlert'
import UserMenu from '@/features/auth/components/wireframes/UserMenu'
import LogoutDialog from '@/features/auth/components/wireframes/LogoutDialog'
import LogoutAllDialog from '@/features/auth/components/wireframes/LogoutAllDialog'
import SecuritySessions from '@/features/auth/components/wireframes/SecuritySessions'
import ChangePasswordProfile from '@/features/auth/components/wireframes/ChangePasswordProfile'

// Board creation screens
import BoardDashboardKanban from '@/features/board/components/wireframes/BoardDashboardKanban'
import TemplateChoice from '@/features/board/components/wireframes/TemplateChoice'
import TemplateGallery from '@/features/board/components/wireframes/TemplateGallery'
import CreationForm from '@/features/board/components/wireframes/CreationForm'
import CreationFormValidationError from '@/features/board/components/wireframes/CreationFormValidationError'
import CreationFormDuplicateError from '@/features/board/components/wireframes/CreationFormDuplicateError'
import CreationFormServerError from '@/features/board/components/wireframes/CreationFormServerError'
import CreationFormQuotaError from '@/features/board/components/wireframes/CreationFormQuotaError'
import FreePlanLimit from '@/features/board/components/wireframes/FreePlanLimit'
import InviteMembers from '@/features/board/components/wireframes/InviteMembers'
import ArchivedBoardsTab from '@/features/board/components/wireframes/ArchivedBoardsTab'

// Board / Kanban screens
import BoardView from '@/features/kanban/components/wireframes/BoardView'
import BoardDragPopulated from '@/features/kanban/components/wireframes/BoardDragPopulated'
import BoardDragMidDrag from '@/features/kanban/components/wireframes/BoardDragMidDrag'
import BoardDragDropSuccess from '@/features/kanban/components/wireframes/BoardDragDropSuccess'
import BoardDragDropError from '@/features/kanban/components/wireframes/BoardDragDropError'
import BoardDragKeyboardMove from '@/features/kanban/components/wireframes/BoardDragKeyboardMove'
import BoardDragListReorder from '@/features/kanban/components/wireframes/BoardDragListReorder'
import BoardDragConflict from '@/features/kanban/components/wireframes/BoardDragConflict'
import BoardDragUndoExpired from '@/features/kanban/components/wireframes/BoardDragUndoExpired'

// Card detail screens
import CardDetailPopulated from '@/features/card/components/wireframes/CardDetailPopulated'
import CardDetailEmpty from '@/features/card/components/wireframes/CardDetailEmpty'
import CardDetailSaving from '@/features/card/components/wireframes/CardDetailSaving'
import CardDetailSaveError from '@/features/card/components/wireframes/CardDetailSaveError'
import CardDetailUnsavedChanges from '@/features/card/components/wireframes/CardDetailUnsavedChanges'
import CardDetailConcurrentConflict from '@/features/card/components/wireframes/CardDetailConcurrentConflict'

// Timeline screens
import TimelineViewPopulated from '@/features/timeline/components/wireframes/TimelineViewPopulated'
import TimelineViewEmpty from '@/features/timeline/components/wireframes/TimelineViewEmpty'
import TimelineNavigateWeek from '@/features/timeline/components/wireframes/TimelineNavigateWeek'
import TimelineNavigateWeekShifted from '@/features/timeline/components/wireframes/TimelineNavigateWeekShifted'
import TimelineNavigateMonth from '@/features/timeline/components/wireframes/TimelineNavigateMonth'
import TimelineDragLeftEdge from '@/features/timeline/components/wireframes/TimelineDragLeftEdge'
import TimelineDragRightEdge from '@/features/timeline/components/wireframes/TimelineDragRightEdge'
import TimelineDragFullBar from '@/features/timeline/components/wireframes/TimelineDragFullBar'
import TimelineDependenciesArrows from '@/features/timeline/components/wireframes/TimelineDependenciesArrows'
import TimelineDependenciesWarning from '@/features/timeline/components/wireframes/TimelineDependenciesWarning'
import TimelineDependenciesPanel from '@/features/timeline/components/wireframes/TimelineDependenciesPanel'

// Table view screens
import TableViewPopulated from '@/features/table/components/wireframes/TableViewPopulated'
import TableViewSortActive from '@/features/table/components/wireframes/TableViewSortActive'
import TableViewFilterActive from '@/features/table/components/wireframes/TableViewFilterActive'
import TableViewInlineDropdown from '@/features/table/components/wireframes/TableViewInlineDropdown'
import TableViewInlineNumber from '@/features/table/components/wireframes/TableViewInlineNumber'
import TableViewEmptyCells from '@/features/table/components/wireframes/TableViewEmptyCells'

// Custom field screens
import CustomFieldSettingsEmpty from '@/features/card/components/wireframes/CustomFieldSettingsEmpty'
import CustomFieldSettingsPopulated from '@/features/card/components/wireframes/CustomFieldSettingsPopulated'
import CustomFieldFormDropdown from '@/features/card/components/wireframes/CustomFieldFormDropdown'
import CustomFieldFormNumber from '@/features/card/components/wireframes/CustomFieldFormNumber'
import CustomFieldFormDuplicateError from '@/features/card/components/wireframes/CustomFieldFormDuplicateError'
import CustomFieldFormServerError from '@/features/card/components/wireframes/CustomFieldFormServerError'
import FieldLifecycleEditForm from '@/features/card/components/wireframes/FieldLifecycleEditForm'
import FieldLifecycleReorderDrag from '@/features/card/components/wireframes/FieldLifecycleReorderDrag'
import FieldLifecycleReorderKeyboard from '@/features/card/components/wireframes/FieldLifecycleReorderKeyboard'
import FieldLifecycleDeleteConfirm from '@/features/card/components/wireframes/FieldLifecycleDeleteConfirm'

// Validation screens
import ValidationRequiredIndicators from '@/features/card/components/wireframes/ValidationRequiredIndicators'
import ValidationBlockedMove from '@/features/card/components/wireframes/ValidationBlockedMove'
import ValidationNumberRange from '@/features/card/components/wireframes/ValidationNumberRange'
import ValidationEmailError from '@/features/card/components/wireframes/ValidationEmailError'
import ValidationRequiredEmpty from '@/features/card/components/wireframes/ValidationRequiredEmpty'
import ValidationSettingsTransitions from '@/features/card/components/wireframes/ValidationSettingsTransitions'

// Views showcase screens
import ViewsKanbanCardFront from '@/features/kanban/components/wireframes/ViewsKanbanCardFront'
import ViewsTimelineCardDetail from '@/features/timeline/components/wireframes/ViewsTimelineCardDetail'
import ViewsCalendarCardDetail from '@/features/calendar/components/wireframes/ViewsCalendarCardDetail'
import ViewsRealTimeSync from '@/features/kanban/components/wireframes/ViewsRealTimeSync'
import ViewsNewFieldAppears from '@/features/card/components/wireframes/ViewsNewFieldAppears'

// GitHub screens
import GitHubSettings from '@/features/integrations/components/wireframes/GitHubSettings'
import GitHubLinkedIssues from '@/features/integrations/components/wireframes/GitHubLinkedIssues'
import GitHubIssueSearch from '@/features/integrations/components/wireframes/GitHubIssueSearch'
import GitHubUnlinkConfirm from '@/features/integrations/components/wireframes/GitHubUnlinkConfirm'
import GitHubErrorStates from '@/features/integrations/components/wireframes/GitHubErrorStates'

// @mention screens
import MentionAutocompleteTrigger from '@/features/notifications/components/wireframes/MentionAutocompleteTrigger'
import MentionAutocompleteFiltered from '@/features/notifications/components/wireframes/MentionAutocompleteFiltered'
import MentionChipStates from '@/features/notifications/components/wireframes/MentionChipStates'
import MentionNotificationPanel from '@/features/notifications/components/wireframes/MentionNotificationPanel'
import MentionNotificationFiltered from '@/features/notifications/components/wireframes/MentionNotificationFiltered'
import MentionGroupedExpanded from '@/features/notifications/components/wireframes/MentionGroupedExpanded'
import MentionRateLimitWarnings from '@/features/notifications/components/wireframes/MentionRateLimitWarnings'
import MentionNotificationSettings from '@/features/notifications/components/wireframes/MentionNotificationSettings'

// Onboarding screens
import OnboardingTourSteps from '@/features/onboarding/components/wireframes/OnboardingTourSteps'
import OnboardingSkipConfirm from '@/features/onboarding/components/wireframes/OnboardingSkipConfirm'
import OnboardingHelpMenu from '@/features/onboarding/components/wireframes/OnboardingHelpMenu'
import OnboardingTemplateGallery from '@/features/onboarding/components/wireframes/OnboardingTemplateGallery'
import OnboardingPreloadedBoard from '@/features/onboarding/components/wireframes/OnboardingPreloadedBoard'
import OnboardingCardDetail from '@/features/onboarding/components/wireframes/OnboardingCardDetail'
import OnboardingTemplateLoading from '@/features/onboarding/components/wireframes/OnboardingTemplateLoading'
import OnboardingErrorStates from '@/features/onboarding/components/wireframes/OnboardingErrorStates'

export type WireframeScreen = ComponentType<{ showStructure?: boolean }>

export const screenRegistry: Record<string, WireframeScreen> = {
  // Auth
  'login-default': LoginPage,
  'login-invalid': LoginInvalidCreds,
  'login-locked': LoginLocked,
  'register-default': RegisterPage,
  'register-email-exists': RegisterEmailExists,
  'register-pwd-short': RegisterPwdTooShort,
  'register-pwd-common': RegisterPwdTooCommon,
  'register-success': DashboardWelcome,
  'login-success': DashboardWelcome,
  'forgot-pwd': ForgotPassword,
  'forgot-confirm': ForgotPasswordConfirm,
  'reset-form': ResetPasswordForm,
  'reset-success': ResetPasswordSuccess,
  'link-expired': ResetLinkExpired,
  'email-not-verified': EmailNotVerified,
  'session-expired': SessionExpired,
  'compromised': CompromisedAlert,
  'user-menu': UserMenu,
  'logout-dialog': LogoutDialog,
  'logout-all-dialog': LogoutAllDialog,
  'security-sessions': SecuritySessions,
  'change-pwd-profile': ChangePasswordProfile,

  // Board creation
  'board-dashboard': BoardDashboardKanban,
  'template-choice': TemplateChoice,
  'template-gallery': TemplateGallery,
  'creation-form': CreationForm,
  'creation-form-validation': CreationFormValidationError,
  'creation-form-duplicate': CreationFormDuplicateError,
  'creation-form-server': CreationFormServerError,
  'creation-form-quota': CreationFormQuotaError,
  'free-plan-limit': FreePlanLimit,
  'invite-members': InviteMembers,
  'archived-tab': ArchivedBoardsTab,

  // Board / Kanban
  'board-view': BoardView,
  'drag-populated': BoardDragPopulated,
  'drag-mid-drag': BoardDragMidDrag,
  'drag-drop-success': BoardDragDropSuccess,
  'drag-drop-error': BoardDragDropError,
  'drag-keyboard': BoardDragKeyboardMove,
  'drag-list-reorder': BoardDragListReorder,
  'drag-conflict': BoardDragConflict,
  'drag-undo-expired': BoardDragUndoExpired,

  // Card detail
  'card-detail-populated': CardDetailPopulated,
  'card-detail-empty': CardDetailEmpty,
  'card-detail-saving': CardDetailSaving,
  'card-detail-error': CardDetailSaveError,
  'card-detail-unsaved': CardDetailUnsavedChanges,
  'card-detail-conflict': CardDetailConcurrentConflict,

  // Timeline
  'timeline-populated': TimelineViewPopulated,
  'timeline-empty': TimelineViewEmpty,
  'timeline-nav-week': TimelineNavigateWeek,
  'timeline-nav-week-shifted': TimelineNavigateWeekShifted,
  'timeline-nav-month': TimelineNavigateMonth,
  'timeline-drag-left': TimelineDragLeftEdge,
  'timeline-drag-right': TimelineDragRightEdge,
  'timeline-drag-full': TimelineDragFullBar,
  'timeline-dep-arrows': TimelineDependenciesArrows,
  'timeline-dep-warning': TimelineDependenciesWarning,
  'timeline-dep-panel': TimelineDependenciesPanel,

  // Table view
  'tv-populated': TableViewPopulated,
  'tv-sort-active': TableViewSortActive,
  'tv-filter-active': TableViewFilterActive,
  'tv-inline-dropdown': TableViewInlineDropdown,
  'tv-inline-number': TableViewInlineNumber,
  'tv-empty-cells': TableViewEmptyCells,

  // Custom fields
  'cf-settings-empty': CustomFieldSettingsEmpty,
  'cf-settings-populated': CustomFieldSettingsPopulated,
  'cf-form-dropdown': CustomFieldFormDropdown,
  'cf-form-number': CustomFieldFormNumber,
  'cf-form-duplicate': CustomFieldFormDuplicateError,
  'cf-form-server-error': CustomFieldFormServerError,
  'fl-edit-form': FieldLifecycleEditForm,
  'fl-reorder-drag': FieldLifecycleReorderDrag,
  'fl-reorder-keyboard': FieldLifecycleReorderKeyboard,
  'fl-delete-confirm': FieldLifecycleDeleteConfirm,

  // Validation
  'val-required-indicators': ValidationRequiredIndicators,
  'val-blocked-move': ValidationBlockedMove,
  'val-number-range': ValidationNumberRange,
  'val-email-error': ValidationEmailError,
  'val-required-empty': ValidationRequiredEmpty,
  'val-settings-transitions': ValidationSettingsTransitions,

  // Views
  'views-kanban-front': ViewsKanbanCardFront,
  'views-timeline-detail': ViewsTimelineCardDetail,
  'views-calendar-detail': ViewsCalendarCardDetail,
  'views-realtime-sync': ViewsRealTimeSync,
  'views-new-field': ViewsNewFieldAppears,

  // GitHub
  'gh-settings': GitHubSettings,
  'gh-linked-issues': GitHubLinkedIssues,
  'gh-issue-search': GitHubIssueSearch,
  'gh-unlink': GitHubUnlinkConfirm,
  'gh-error-states': GitHubErrorStates,

  // @mention
  'mention-autocomplete-trigger': MentionAutocompleteTrigger,
  'mention-autocomplete-filtered': MentionAutocompleteFiltered,
  'mention-chip-states': MentionChipStates,
  'mention-notification-panel': MentionNotificationPanel,
  'mention-notification-filtered': MentionNotificationFiltered,
  'mention-grouped-expanded': MentionGroupedExpanded,
  'mention-rate-limit': MentionRateLimitWarnings,
  'mention-settings': MentionNotificationSettings,

  // Onboarding
  'onboarding-tour-1': OnboardingTourSteps,
  'onboarding-tour-2': OnboardingTourSteps,
  'onboarding-tour-3': OnboardingTourSteps,
  'onboarding-tour-4': OnboardingTourSteps,
  'onboarding-tour-5': OnboardingTourSteps,
  'onboarding-skip-confirm': OnboardingSkipConfirm,
  'onboarding-help-menu': OnboardingHelpMenu,
  'onboarding-template-gallery': OnboardingTemplateGallery,
  'onboarding-preloaded-board': OnboardingPreloadedBoard,
  'onboarding-card-detail': OnboardingCardDetail,
  'onboarding-template-loading': OnboardingTemplateLoading,
  'onboarding-error-states': OnboardingErrorStates,
}
