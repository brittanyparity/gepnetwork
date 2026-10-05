import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRIMARY_NAV, type NavItem } from '../content/nav'
import { FONT_BODY } from '../site'

function NavDropdownPanel({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  if (!item.groups?.length) return null

  return (
    <div
      className="gep-nav-dropdown-panel absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2 min-w-[16rem] max-w-[min(92vw,20rem)]"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div
        className="rounded-sm border py-2 shadow-lg max-h-[min(70vh,28rem)] overflow-y-auto"
        style={{
          background: 'var(--gep-bg)',
          borderColor: 'var(--gep-divider)',
        }}
      >
        {item.groups.map((group, groupIndex) => (
          <div key={group.heading ?? groupIndex} className={groupIndex > 0 ? 'mt-2 pt-2 border-t' : ''} style={{ borderColor: 'var(--gep-divider)' }}>
            {group.heading ? (
              <p
                className="px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
              >
                {group.heading}
              </p>
            ) : null}
            <ul>
              {group.items.map((child) => (
                <li key={child.to + child.label}>
                  <Link
                    to={child.to}
                    role="menuitem"
                    className="block px-4 py-2.5 transition-colors hover:bg-white/5"
                    style={{ fontFamily: FONT_BODY }}
                    onClick={onNavigate}
                  >
                    <span className="block text-sm leading-snug" style={{ color: 'var(--gep-text)' }}>
                      {child.label}
                    </span>
                    {child.description ? (
                      <span className="block text-xs mt-0.5 leading-snug" style={{ color: 'var(--gep-text-muted)' }}>
                        {child.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function DesktopNavItem({
  item,
  linkClass,
  onNavigate,
}: {
  item: NavItem
  linkClass: string
  onNavigate?: () => void
}) {
  const hasMenu = Boolean(item.groups?.length)

  if (!hasMenu) {
    return (
      <Link to={item.to} className={linkClass} style={{ fontFamily: FONT_BODY }} onClick={onNavigate}>
        {item.label}
      </Link>
    )
  }

  return (
    <div className="gep-nav-dropdown group relative">
      <div className="flex items-center gap-1">
        <Link to={item.to} className={linkClass} style={{ fontFamily: FONT_BODY }} onClick={onNavigate}>
          {item.label}
        </Link>
        <span
          className="gep-header-link text-[10px] opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden
        >
          ▾
        </span>
      </div>
      <NavDropdownPanel item={item} onNavigate={onNavigate} />
    </div>
  )
}

export function PrimaryNavDesktop({
  linkClass,
  onNavigate,
  className = '',
}: {
  linkClass: string
  onNavigate?: () => void
  className?: string
}) {
  return (
    <nav className={className} aria-label="Primary">
      {PRIMARY_NAV.map((item) => (
        <DesktopNavItem key={item.label} item={item} linkClass={linkClass} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)
  const hasMenu = Boolean(item.groups?.length)

  if (!hasMenu) {
    return (
      <Link
        to={item.to}
        className="text-sm tracking-widest uppercase transition-colors"
        style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b pb-3" style={{ borderColor: 'var(--gep-divider)' }}>
      <div className="flex items-center justify-between gap-3">
        <Link
          to={item.to}
          className="text-sm tracking-widest uppercase transition-colors flex-1"
          style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="text-xs tracking-widest uppercase px-2 py-1 gep-header-link"
          style={{ fontFamily: FONT_BODY }}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '−' : '+'}
        </button>
      </div>
      {open ? (
        <div className="mt-3 pl-2 space-y-3">
          {item.groups!.map((group, groupIndex) => (
            <div key={group.heading ?? groupIndex}>
              {group.heading ? (
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
                >
                  {group.heading}
                </p>
              ) : null}
              <ul className="space-y-2">
                {group.items.map((child) => (
                  <li key={child.to + child.label}>
                    <Link
                      to={child.to}
                      className="block text-sm leading-snug transition-colors"
                      style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}
                      onClick={onNavigate}
                    >
                      {child.label}
                      {child.description ? (
                        <span className="block text-xs mt-0.5" style={{ color: 'var(--gep-text-muted)' }}>
                          {child.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function PrimaryNavMobile({
  onNavigate,
  className = '',
}: {
  onNavigate?: () => void
  className?: string
}) {
  return (
    <nav className={className} aria-label="Primary">
      {PRIMARY_NAV.map((item) => (
        <MobileNavItem key={item.label} item={item} onNavigate={onNavigate} />
      ))}
    </nav>
  )
}
