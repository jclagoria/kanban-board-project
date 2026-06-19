import type { CSSProperties } from 'react'

/* ══════════════════════════════════════════════════════
   Calm Clarity — Design Tokens for Wireframes
   Refined: deep navy, warm coral accent, neutral warmth
   ══════════════════════════════════════════════════════ */

/* ─── Palette ─── */
export const brand = {
  50: '#f0f4f8',
  100: '#d9e2ec',
  200: '#b3c5d9',
  300: '#8da8c6',
  400: '#6b8ba8',
  500: '#4a6d89',
  600: '#3a5670',
  700: '#2a4057',
  800: '#1b2a3e',
  900: '#0e1825',
} as const

export const accent = {
  50: '#fdf2f0',
  100: '#fadbd4',
  200: '#f5b7aa',
  300: '#ef9380',
  400: '#e86f55',
  500: '#e85d3a',
  600: '#cf4a2e',
  700: '#a83b24',
  800: '#822d1b',
  900: '#5c1f12',
} as const

export const surface = {
  card: '#ffffff',
  page: '#f8f7f4',
  sidebar: '#0f172a',
  sidebarHover: '#1e293b',
} as const

export const text = {
  primary: '#0f172a',
  secondary: '#64748b',
  muted: '#94a3b8',
  sidebar: '#94a3b8',
  sidebarActive: '#f8fafc',
} as const

export const border = {
  light: '#e9e7e2',
  default: '#d4d2cc',
  dark: '#334155',
} as const

export const semantic = {
  danger: '#d4534a',
  warning: '#d4943a',
  success: '#6b9e6b',
} as const

/* ─── Shadows ─── */
export const shadows = {
  card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
  cardHover: '0 4px 12px rgba(232, 93, 58, 0.1), 0 1px 3px rgba(15, 23, 42, 0.04)',
  dropdown: '0 4px 16px rgba(15, 23, 42, 0.1)',
  modal: '0 8px 32px rgba(15, 23, 42, 0.14)',
  elevated: '0 2px 8px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
} as const

/* ─── Shared Style Objects ─── */

/* Shell / Card wrappers */
export const shellCss: CSSProperties = {
  maxWidth: 420,
  margin: '0 auto',
}

export const paneCss: CSSProperties = {
  position: 'relative',
  border: `1px solid ${border.default}`,
  background: surface.card,
  maxWidth: 640,
  borderRadius: 12,
  boxShadow: shadows.card,
}

/* Typography helpers */
export const fontCss: CSSProperties = {
  fontFamily: 'system-ui, sans-serif',
}

/* Auth forms */
export const fieldCss: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  marginBottom: 16,
}

export const inputCss: CSSProperties = {
  border: `1px solid ${border.default}`,
  borderRadius: 10,
  padding: '11px 14px',
  fontSize: 14,
  background: surface.card,
  color: text.primary,
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
}

export const inputFullCss: CSSProperties = {
  ...inputCss,
  width: '100%',
  boxSizing: 'border-box',
}

export const textareaCss: CSSProperties = {
  ...inputFullCss,
  resize: 'vertical',
  minHeight: 60,
}

export const selectCss: CSSProperties = {
  ...inputFullCss,
  appearance: 'none',
}

export const btnCss: CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '12px',
  border: 'none',
  borderRadius: 10,
  background: accent[500],
  color: '#fff',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
  marginBottom: 12,
  transition: 'background 150ms ease, transform 150ms ease',
}

export const btnSecondaryCss: CSSProperties = {
  ...btnCss,
  background: surface.card,
  color: text.primary,
  border: `1px solid ${border.default}`,
  boxShadow: shadows.card,
}

export const linkRowCss: CSSProperties = {
  textAlign: 'center',
  padding: '8px 0',
  fontSize: 14,
  color: text.secondary,
}

export const footerCss: CSSProperties = {
  textAlign: 'center',
  fontSize: 14,
  marginTop: 16,
  borderTop: `1px solid ${border.light}`,
  paddingTop: 16,
  color: text.secondary,
}

export const formCardCss: CSSProperties = {
  background: surface.card,
  borderRadius: 14,
  padding: 32,
  boxShadow: shadows.elevated,
  border: `1px solid ${border.light}`,
}

/* Board / View layouts */
export const topBarCss: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  borderBottom: `1px solid ${border.light}`,
  background: surface.card,
}

export const boardHeaderCss: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
}

export const boardNameCss: CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: text.primary,
}

export const visibilityBadgeCss: CSSProperties = {
  fontSize: 11,
  border: `1px solid ${border.default}`,
  padding: '2px 8px',
  borderRadius: 4,
  color: text.secondary,
}

export const actionBtnCss: CSSProperties = {
  padding: '6px 12px',
  border: `1px solid ${border.default}`,
  background: surface.card,
  fontSize: 12,
  cursor: 'pointer',
  borderRadius: 8,
  color: text.secondary,
  transition: 'background 150ms ease, color 150ms ease',
}

export const listCss: CSSProperties = {
  border: `1px solid ${border.light}`,
  background: '#f3f2ef',
  borderRadius: 12,
  minWidth: 270,
  maxWidth: 270,
  padding: 12,
  boxShadow: shadows.card,
}

export const listHeaderCss: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
  paddingBottom: 8,
  borderBottom: `1px solid ${border.light}`,
}

export const listTitleCss: CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: text.primary,
}

export const listCountCss: CSSProperties = {
  fontSize: 12,
  color: text.muted,
}

export const cardCss: CSSProperties = {
  border: `1px solid ${border.light}`,
  background: surface.card,
  padding: '10px 14px',
  marginBottom: 8,
  fontSize: 13,
  cursor: 'grab',
  position: 'relative',
  borderRadius: 10,
  boxShadow: shadows.card,
  transition: 'box-shadow 150ms ease, transform 150ms ease',
}

export const addCardBtnCss: CSSProperties = {
  padding: '8px 0',
  fontSize: 13,
  color: text.muted,
  cursor: 'pointer',
  textAlign: 'center',
  border: `1px dashed ${border.default}`,
  marginTop: 8,
  borderRadius: 8,
  transition: 'color 150ms ease, border-color 150ms ease',
}

export const bottomBarCss: CSSProperties = {
  padding: '8px 20px',
  borderTop: `1px solid ${border.light}`,
  fontSize: 12,
  color: text.muted,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: surface.card,
}

/* View tabs */
export const viewTabsCss: CSSProperties = {
  display: 'flex',
  gap: 4,
  background: '#f1f0ed',
  padding: 3,
  borderRadius: 10,
}

export const viewTabCss: CSSProperties = {
  padding: '5px 12px',
  background: 'transparent',
  color: text.secondary,
  fontSize: 12,
  cursor: 'pointer',
  border: 'none',
  borderRadius: 7,
  transition: 'background 150ms ease, color 150ms ease',
}

export const viewTabActiveCss: CSSProperties = {
  padding: '5px 12px',
  background: surface.card,
  color: accent[500],
  fontSize: 12,
  cursor: 'pointer',
  border: 'none',
  borderRadius: 7,
  fontWeight: 600,
  boxShadow: shadows.elevated,
}

/* Detail / Settings panels */
export const sectionCss: CSSProperties = {
  padding: '20px 24px',
  position: 'relative',
}

export const sectionTitleCss: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: text.muted,
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  marginBottom: 16,
}

export const dividerCss: CSSProperties = {
  border: 'none',
  borderTop: `1px solid ${border.light}`,
  margin: 0,
}

/* Labels / badges */
export const labelPillCss: CSSProperties = {
  padding: '2px 10px',
  fontSize: 12,
  fontWeight: 600,
  borderRadius: 6,
}

/* Icon buttons */
export const iconBtnCss: CSSProperties = {
  border: `1px solid ${border.default}`,
  background: surface.card,
  cursor: 'pointer',
  fontSize: 14,
  color: text.secondary,
  padding: '4px 8px',
  borderRadius: 8,
  transition: 'background 150ms ease',
}

/* Navigation / pagination */
export const navBtnCss: CSSProperties = {
  padding: '5px 12px',
  border: `1px solid ${border.default}`,
  background: surface.card,
  fontSize: 12,
  cursor: 'pointer',
  borderRadius: 8,
  color: text.secondary,
  transition: 'background 150ms ease',
}

/* Onboarding */
export const onboardingBaseCss: CSSProperties = {
  border: `2px solid ${accent[500]}`,
  borderRadius: 12,
  background: surface.card,
  padding: 24,
  maxWidth: 360,
  boxShadow: shadows.modal,
  position: 'relative',
}

export const dotCss: CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: border.default,
}

export const dotActiveCss: CSSProperties = {
  ...dotCss,
  background: accent[500],
}

/* Table */
export const tableThCss: CSSProperties = {
  textAlign: 'left',
  padding: '10px 12px',
  fontWeight: 600,
  borderBottom: `1px solid ${border.default}`,
  background: '#f3f2ef',
  whiteSpace: 'nowrap',
  position: 'relative',
  fontSize: 12,
  color: text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}

export const tableTdCss: CSSProperties = {
  padding: '10px 12px',
  borderBottom: `1px solid ${border.light}`,
  verticalAlign: 'top',
  fontSize: 13,
}

/* Tabs */
export const tabActiveCss: CSSProperties = {
  padding: '8px 16px',
  borderBottom: `2px solid ${accent[500]}`,
  background: 'transparent',
  fontWeight: 600,
  fontSize: 13,
  cursor: 'pointer',
  color: text.primary,
}

export const tabInactiveCss: CSSProperties = {
  padding: '8px 16px',
  borderBottom: `2px solid transparent`,
  background: 'transparent',
  fontSize: 13,
  cursor: 'pointer',
  color: text.muted,
}

/* Progress bars */
export const progressBarBgCss: CSSProperties = {
  flex: 1,
  height: 8,
  background: border.light,
  borderRadius: 4,
  overflow: 'hidden',
}

export const progressBarFillCss: CSSProperties = {
  width: '30%',
  height: '100%',
  background: accent[500],
  borderRadius: 4,
}

/* Field rows inside detail panels */
export const fieldRowCss: CSSProperties = {
  marginBottom: 16,
  position: 'relative',
}

export const fieldLabelCss: CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 4,
  color: text.primary,
}
