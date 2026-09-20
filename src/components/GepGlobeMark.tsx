import { useEffect, useRef } from 'react'
import { LOGO_LOCKUPS, type LogoLockupId } from '../logo-lockups'

const FONT_BRUNO_ACE = "'Bruno Ace', sans-serif"
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

function syncGlobeAttributes(root: HTMLElement | null, colorSchemeKey?: string) {
  if (!root) return
  root.querySelectorAll('gep-globe').forEach((node) => {
    const el = node as HTMLElement
    el.setAttribute('land', readCssVar('--gep-globe-land', '#F2EEE8'))
    el.setAttribute('ocean', readCssVar('--gep-globe-ocean', '#141B23'))
    el.setAttribute('accent', readCssVar('--gep-accent', '#FFC52F'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.setAttribute('speed', reduced ? '0' : '0.18')
  })
  void colorSchemeKey
}

function BrunoFullLockup({ globeSize }: { globeSize: number }) {
  const wordStyle = {
    fontFamily: FONT_BRUNO_ACE,
    fontWeight: 400,
    letterSpacing: '0.08em',
  } as const

  return (
    <>
      <span
        className="uppercase leading-none text-white"
        style={{ ...wordStyle, fontSize: 'clamp(0.7rem, 2vw, 0.95rem)' }}
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
        style={{ ...wordStyle, fontSize: 'clamp(0.7rem, 2vw, 0.95rem)' }}
      >
        NETWORK
      </span>
    </>
  )
}

function CenturyGlobeLockup() {
  return (
    <span className="gep-logo-century inline-flex items-center leading-none text-white whitespace-nowrap">
      <span className="gep-logo-century__g">
        G
        <span className="gep-logo-century__globe" aria-hidden="true">
          <gep-globe />
        </span>
      </span>
      <span className="gep-logo-century__word uppercase">EP&nbsp;NETWORK</span>
    </span>
  )
}

export default function GEPLogoLockup({
  className = '',
  globeSize = 48,
  colorSchemeKey,
  lockupId,
}: GEPLogoLockupProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const lockup = LOGO_LOCKUPS.find((l) => l.id === lockupId) ?? LOGO_LOCKUPS[0]

  useEffect(() => {
    syncGlobeAttributes(linkRef.current, colorSchemeKey)
  }, [colorSchemeKey, lockupId])

  return (
    <a
      ref={linkRef}
      href="#"
      className={`inline-flex items-center flex-shrink-0 ${
        lockup.id === 'bruno-full' ? 'gap-2 sm:gap-2.5' : ''
      } ${className}`}
      aria-label="GEP Network home"
    >
      {lockup.id === 'century-globe' ? (
        <CenturyGlobeLockup />
      ) : (
        <BrunoFullLockup globeSize={globeSize} />
      )}
    </a>
  )
}
