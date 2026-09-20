import { useEffect, useRef } from 'react'
import { LOGO_LOCKUPS, type LogoLockupId } from '../logo-lockups'

type GEPLogoLockupProps = {
  className?: string
  globeSize?: number
  colorSchemeKey?: string
  lockupId: LogoLockupId
}

function readCssVar(name: string, fallback: string) {
  if (typeof document === 'undefined') return fallback
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

export default function GEPLogoLockup({
  className = '',
  globeSize = 48,
  colorSchemeKey,
  lockupId,
}: GEPLogoLockupProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const lockup = LOGO_LOCKUPS.find((l) => l.id === lockupId) ?? LOGO_LOCKUPS[0]
  const bothBruno = lockupId === 'bruno-bruno'

  useEffect(() => {
    const el = linkRef.current?.querySelector('gep-globe')
    if (!el) return

    el.setAttribute('land', readCssVar('--gep-globe-land', '#F2EEE8'))
    el.setAttribute('ocean', readCssVar('--gep-globe-ocean', '#0E1116'))
    el.setAttribute('accent', readCssVar('--gep-accent', '#FFC52F'))

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.setAttribute('speed', reduced ? '0' : '0.18')
  }, [colorSchemeKey, lockupId])

  return (
    <a
      ref={linkRef}
      href="#"
      className={`inline-flex items-center flex-shrink-0 gap-2 sm:gap-2.5 ${className}`}
      aria-label="GEP Network home"
    >
      <span
        className="uppercase leading-none text-white"
        style={{
          fontFamily: lockup.gepFont,
          fontWeight: bothBruno ? 400 : 700,
          fontSize: bothBruno ? '0.95rem' : 'clamp(1.15rem, 2.2vw, 1.45rem)',
          letterSpacing: bothBruno ? '0.08em' : '0.02em',
        }}
      >
        GEP
      </span>

      <span
        className="relative block flex-shrink-0"
        style={{ width: globeSize, height: globeSize }}
        aria-hidden="true"
      >
        <gep-globe />
      </span>

      <span
        className="uppercase leading-none text-white"
        style={{
          fontFamily: lockup.networkFont,
          fontWeight: 400,
          fontSize: bothBruno ? 'clamp(0.7rem, 2vw, 0.95rem)' : 'clamp(0.48rem, 1.1vw, 0.72rem)',
          letterSpacing: '0.16em',
          marginTop: bothBruno ? 0 : '0.12em',
        }}
      >
        NETWORK
      </span>
    </a>
  )
}
