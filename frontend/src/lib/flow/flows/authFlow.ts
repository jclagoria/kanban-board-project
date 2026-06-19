import type { FlowDef } from '@/lib/types/flow'

export const authFlow: FlowDef = {
  id: 'auth',
  name: 'Authentication',
  entryPoint: 'login-default',
  steps: [
    {
      id: 'login-default',
      label: 'Login',
      layout: 'auth',
      transitions: [
        { action: 'Log in (valid) →', target: 'login-success', description: 'Valid credentials' },
        { action: 'Log in (invalid) →', target: 'login-invalid', description: 'Invalid credentials' },
        { action: 'Log in (locked) →', target: 'login-locked', description: 'Account locked (3 failures)' },
        { action: 'Create account →', target: 'register-default' },
        { action: 'Forgot password? →', target: 'forgot-pwd' },
      ],
    },
    {
      id: 'login-invalid',
      label: 'Login — Invalid credentials',
      layout: 'auth',
      transitions: [
        { action: '← Try again', target: 'login-default' },
        { action: 'Forgot password? →', target: 'forgot-pwd' },
      ],
    },
    {
      id: 'login-locked',
      label: 'Login — Account locked',
      layout: 'auth',
      transitions: [
        { action: '← Back to login (after 15 min)', target: 'login-default' },
        { action: 'Forgot password? →', target: 'forgot-pwd' },
      ],
    },
    {
      id: 'login-success',
      label: 'Dashboard — Welcome (first login)',
      layout: 'dashboard',
      transitions: [
        { action: '→ Continue to dashboard', target: 'board-dashboard' },
        { action: '→ Start onboarding tour', target: 'onboarding-tour-1' },
      ],
    },
    {
      id: 'register-default',
      label: 'Register',
      layout: 'auth',
      transitions: [
        { action: 'Create account (valid) →', target: 'register-success', description: 'Valid registration' },
        { action: 'Create account (email exists) →', target: 'register-email-exists', description: 'Email already registered' },
        { action: 'Create account (pwd short) →', target: 'register-pwd-short', description: 'Password < 10 chars' },
        { action: 'Create account (pwd common) →', target: 'register-pwd-common', description: 'Password too common' },
        { action: '← Already have an account', target: 'login-default' },
      ],
    },
    {
      id: 'register-email-exists',
      label: 'Register — Email exists',
      layout: 'auth',
      transitions: [
        { action: '← Try again', target: 'register-default' },
        { action: '→ Go to login', target: 'login-default' },
      ],
    },
    {
      id: 'register-pwd-short',
      label: 'Register — Password too short',
      layout: 'auth',
      transitions: [
        { action: '← Try again', target: 'register-default' },
      ],
    },
    {
      id: 'register-pwd-common',
      label: 'Register — Password too common',
      layout: 'auth',
      transitions: [
        { action: '← Try again', target: 'register-default' },
      ],
    },
    {
      id: 'register-success',
      label: 'Register — Welcome',
      layout: 'dashboard',
      transitions: [
        { action: '→ Start onboarding tour', target: 'onboarding-tour-1' },
        { action: '→ Skip to dashboard', target: 'board-dashboard' },
      ],
    },
    {
      id: 'forgot-pwd',
      label: 'Forgot password',
      layout: 'auth',
      transitions: [
        { action: 'Send reset email →', target: 'forgot-confirm' },
        { action: '← Back to login', target: 'login-default' },
      ],
    },
    {
      id: 'forgot-confirm',
      label: 'Check your email',
      layout: 'auth',
      transitions: [
        { action: '→ Open reset form', target: 'reset-form' },
        { action: '← Back to login', target: 'login-default' },
      ],
    },
    {
      id: 'reset-form',
      label: 'Set new password',
      layout: 'auth',
      transitions: [
        { action: 'Reset password →', target: 'reset-success' },
        { action: '→ Link expired', target: 'link-expired' },
        { action: '← Back to login', target: 'login-default' },
      ],
    },
    {
      id: 'reset-success',
      label: 'Password updated',
      layout: 'auth',
      transitions: [
        { action: '→ Go to login', target: 'login-default' },
      ],
    },
    {
      id: 'link-expired',
      label: 'Reset link expired',
      layout: 'auth',
      transitions: [
        { action: '← Request new link', target: 'forgot-pwd' },
        { action: '← Back to login', target: 'login-default' },
      ],
    },
    {
      id: 'email-not-verified',
      label: 'Email not verified',
      layout: 'auth',
      transitions: [
        { action: '← Back to dashboard', target: 'board-dashboard' },
        { action: 'Resend verification →', target: 'email-not-verified' },
      ],
    },
    {
      id: 'user-menu',
      label: 'User menu',
      layout: 'dashboard',
      transitions: [
        { action: '→ Security / Sessions', target: 'security-sessions' },
        { action: '→ Logout (single device)', target: 'logout-dialog' },
        { action: '→ Logout (all devices)', target: 'logout-all-dialog' },
        { action: '← Close menu', target: 'board-dashboard' },
        { action: '→ Change password', target: 'change-pwd-profile' },
      ],
    },
    {
      id: 'logout-dialog',
      label: 'Logout confirmation',
      layout: 'dashboard',
      transitions: [
        { action: 'Confirm logout →', target: 'login-default', description: 'Logged out, back to login' },
        { action: '← Cancel', target: 'board-dashboard' },
      ],
    },
    {
      id: 'logout-all-dialog',
      label: 'Logout all devices',
      layout: 'dashboard',
      transitions: [
        { action: 'Logout all →', target: 'login-default' },
        { action: '← Cancel', target: 'board-dashboard' },
      ],
    },
    {
      id: 'security-sessions',
      label: 'Security & sessions',
      layout: 'dashboard',
      transitions: [
        { action: '← Back', target: 'user-menu' },
      ],
    },
    {
      id: 'session-expired',
      label: 'Session expired',
      layout: 'auth',
      transitions: [
        { action: '→ Go to login', target: 'login-default' },
      ],
    },
    {
      id: 'change-pwd-profile',
      label: 'Change password (profile)',
      layout: 'dashboard',
      transitions: [
        { action: '← Back to menu', target: 'user-menu' },
        { action: 'Update password →', target: 'login-default', description: 'Session invalidated' },
      ],
    },
  ],
}
