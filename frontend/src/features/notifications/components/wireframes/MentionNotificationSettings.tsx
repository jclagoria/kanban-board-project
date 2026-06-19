import { RegionLabel } from '@/components/shared/wireframes/_WireframeBase'
import { paneCss, sectionCss, dividerCss, sectionTitleCss } from '@/components/shared/wireframes/_designTokens'

const headerCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '14px 20px', borderBottom: '1px solid #ddd', fontSize: 15, fontWeight: 600,
}

/* ── Setting row ── */
const settingRowCss: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
  padding: '12px 0', borderBottom: '1px solid #f5f5f5', position: 'relative',
}
const settingRowLastCss: React.CSSProperties = { ...settingRowCss, borderBottom: 'none' }
const settingInfoCss: React.CSSProperties = { flex: 1, paddingRight: 24 }
const settingLabelCss: React.CSSProperties = { fontSize: 14, fontWeight: 600, marginBottom: 2 }
const settingDescCss: React.CSSProperties = { fontSize: 12, color: '#888', lineHeight: 1.4 }

/* ── Toggle ── */
const toggleOnCss: React.CSSProperties = {
  width: 40, height: 22, borderRadius: 11, background: '#1976d2',
  position: 'relative', cursor: 'pointer', flexShrink: 0,
}
const toggleOffCss: React.CSSProperties = {
  width: 40, height: 22, borderRadius: 11, background: '#ccc',
  position: 'relative', cursor: 'pointer', flexShrink: 0,
}
const toggleKnobOnCss: React.CSSProperties = {
  position: 'absolute', top: 2, right: 2, width: 18, height: 18,
  borderRadius: '50%', background: '#fff',
}
const toggleKnobOffCss: React.CSSProperties = {
  position: 'absolute', top: 2, left: 2, width: 18, height: 18,
  borderRadius: '50%', background: '#fff',
}

/* ── Always-on box ── */
const alwaysOnBoxCss: React.CSSProperties = {
  background: '#f0f7ff', border: '1px solid #bbdefb', borderRadius: 4,
  padding: '12px 14px', marginTop: 8, fontSize: 13, color: '#1565c0',
  position: 'relative',
}

/* ── Back link ── */
export default function MentionNotificationSettings({ showStructure }: { showStructure?: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {showStructure && <RegionLabel top={0} left={0}>Settings — Notification Preferences</RegionLabel>}
      <div style={paneCss}>
        <div style={headerCss}>
          <span>Settings</span>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, color: '#555' }}>✕</button>
        </div>

        {/* Settings nav tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #ddd' }}>
          <div style={{ padding: '10px 16px', fontSize: 13, cursor: 'pointer', color: '#888' }}>Profile</div>
          <div style={{ padding: '10px 16px', fontSize: 13, cursor: 'pointer', color: '#888' }}>Account</div>
          <div style={{ padding: '10px 16px', fontSize: 13, cursor: 'pointer', fontWeight: 700, borderBottom: '2px solid #1976d2', color: '#1976d2' }}>
            Notifications
          </div>
          <div style={{ padding: '10px 16px', fontSize: 13, cursor: 'pointer', color: '#888' }}>Integrations</div>
        </div>

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Notification Preferences — @mention settings</RegionLabel>}
          <div style={sectionTitleCss}>@mentions</div>

          {/* Email toggle — ON (default) */}
          <div style={settingRowCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Email toggle — ON (default)</RegionLabel>}
            <div style={settingInfoCss}>
              <div style={settingLabelCss}>Email notifications for @mentions</div>
              <div style={settingDescCss}>
                Receive an email when someone mentions you in a card comment or description.
                <br />Applies across all boards.
              </div>
            </div>
            <div style={toggleOnCss}>
              <div style={toggleKnobOnCss} />
            </div>
          </div>

          {/* Email toggle — OFF */}
          <div style={settingRowCss}>
            {showStructure && <RegionLabel top={-2} left={0}>Email toggle — OFF (user disabled)</RegionLabel>}
            <div style={settingInfoCss}>
              <div style={{ ...settingLabelCss, color: '#888' }}>Email notifications for @mentions</div>
              <div style={settingDescCss}>
                Currently disabled. You will not receive mention emails.
                <br />In-app notifications still work.
              </div>
            </div>
            <div style={toggleOffCss}>
              <div style={toggleKnobOffCss} />
            </div>
          </div>

          {/* In-app always on */}
          <div style={settingRowLastCss}>
            {showStructure && <RegionLabel top={-2} left={0}>In-app — always on, no toggle</RegionLabel>}
            <div style={settingInfoCss}>
              <div style={settingLabelCss}>In-app notifications</div>
              <div style={settingDescCss}>
                Receive notifications in your notification panel (bell icon).
                <br />Changes are reflected in real time across all active sessions.
              </div>
            </div>
            <div style={alwaysOnBoxCss}>
              {showStructure && <RegionLabel top={-2} left={0}>Always-on indicator</RegionLabel>}
              <span>In-app notifications are always on to keep you connected</span>
            </div>
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={sectionCss}>
          {showStructure && <RegionLabel top={0} left={0}>Other notification types</RegionLabel>}
          <div style={sectionTitleCss}>Other Notifications</div>

          <div style={settingRowCss}>
            <div style={settingInfoCss}>
              <div style={settingLabelCss}>Email for card assignments</div>
              <div style={settingDescCss}>Receive an email when you are assigned to a card.</div>
            </div>
            <div style={toggleOnCss}><div style={toggleKnobOnCss} /></div>
          </div>

          <div style={settingRowLastCss}>
            <div style={settingInfoCss}>
              <div style={settingLabelCss}>Email for due date reminders</div>
              <div style={settingDescCss}>Receive an email 24 hours before a card due date.</div>
            </div>
            <div style={toggleOnCss}><div style={toggleKnobOnCss} /></div>
          </div>
        </div>

        <hr style={dividerCss} />

        <div style={{ ...sectionCss, fontSize: 11, color: '#888', fontStyle: 'italic' }}>
          Changes apply immediately. Your preferences are persisted across sessions.
        </div>
      </div>
    </div>
  )
}
