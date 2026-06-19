import type { ReactNode } from 'react'
import { accent, border, surface, semantic, shadows } from './_designTokens'

const labelCss: React.CSSProperties = {
  position: 'absolute',
  background: accent[500],
  color: '#fff',
  padding: '1px 8px',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.5px',
  whiteSpace: 'nowrap',
  zIndex: 10,
  borderRadius: 4,
}

export function RegionLabel({
  top = 0, left, right, children,
}: {
  top?: number
  left?: number
  right?: number
  children: ReactNode
}) {
  return (
    <div
      style={{
        ...labelCss,
        top,
        ...(left !== undefined ? { left } : {}),
        ...(right !== undefined ? { right } : {}),
      }}
    >
      {children}
    </div>
  )
}

const cardCss: React.CSSProperties = {
  position: 'relative',
  border: `1px solid ${border.light}`,
  padding: 32,
  background: surface.card,
  borderRadius: 14,
  boxShadow: shadows.elevated,
}

export function Card({ children }: { children: ReactNode }) {
  return <div style={cardCss}>{children}</div>
}

const fieldRowCss: React.CSSProperties = {
  position: 'relative',
  marginBottom: 6,
}

export function FieldRow({
  label, showStructure, children,
}: {
  label: string
  showStructure?: boolean
  children: ReactNode
}) {
  return (
    <div style={fieldRowCss}>
      {showStructure && <RegionLabel top={-2} left={0}>Field: {label}</RegionLabel>}
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#0f172a' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

const errorBoxCss: React.CSSProperties = {
  position: 'relative',
  border: `1px solid ${semantic.danger}`,
  background: '#fef2f1',
  padding: '10px 14px',
  fontSize: 13,
  color: '#991b1b',
  marginTop: 6,
  borderRadius: 10,
}

export function ErrorMsg({
  showStructure, children,
}: {
  showStructure?: boolean
  children: ReactNode
}) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={-2} left={0}>Error Message — Inline</RegionLabel>}
      <div style={errorBoxCss}>{children}</div>
    </div>
  )
}
