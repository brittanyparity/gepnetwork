import { useEffect, useRef } from 'react'
import { LOGO_LOCKUPS, type LogoLockupId } from '../logo-lockups'

const FONT_TELE_MARINES = "'Tele Marines GEP', 'Tele Marines', sans-serif"

type GEPLogoLockupProps = {
  className?: string
  globeSize?: number
  colorSchemeKey?: string
  lockupId: LogoLockupId
  /** Larger scale for hero centerpiece */
  variant?: 'header' | 'hero'
}

function readCssVar(name: string, fallback: string) {
  if (typeof document === 'undefined') return fallback
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

function syncGlobeAttributes(root: HTMLElement | null) {
  if (!root) return
  root.querySelectorAll('gep-globe').forEach((node) => {
    const el = node as HTMLElement
    el.setAttribute('land', readCssVar('--gep-globe-land', '#0A0C10'))
    el.setAttribute('ocean', readCssVar('--gep-globe-ocean', '#96A2AE'))
    el.setAttribute('accent', readCssVar('--gep-accent', '#FFC52F'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.setAttribute('speed', reduced ? '0' : '0.18')
  })
}

function TeleMarinesOLetter() {
  return (
    <span className="gep-logo-tele__o">
      <span className="gep-logo-tele__o-letter">O</span>
      <span className="gep-logo-tele__o-bar" aria-hidden="true" />
    </span>
  )
}

function TeleMarinesNetworkLockup({ globeSize }: { globeSize: number; hero: boolean }) {
  const wordStyle = {
    fontFamily: FONT_TELE_MARINES,
    fontWeight: 400,
    letterSpacing: '0.02em',
  } as const

  return (
    <>
      <span className="leading-none text-inherit" style={wordStyle}>
        ep
      </span>
      <span
        className="relative block flex-shrink-0"
        style={{ width: globeSize, height: globeSize }}
        aria-hidden="true"
      >
        <gep-globe />
      </span>
      <span className="leading-none text-inherit whitespace-nowrap" style={wordStyle}>
        NetW
        <TeleMarinesOLetter />
        rk
      </span>
    </>
  )
}

function CenturyGlobeLockup({ hero }: { hero: boolean }) {
  return (
    <span
      className={`gep-logo-century inline-flex items-center leading-none whitespace-nowrap flex-nowrap flex-shrink-0 ${
        hero ? 'gep-logo-century--hero text-white' : 'text-inherit'
      }`}
    >
      <span className="gep-logo-century__g">
        G
        <span className="gep-logo-century__globe" aria-hidden="true">
          <gep-globe />
        </span>
      </span>
      <span className="gep-logo-century__word">
        ep&nbsp;NetW
        <TeleMarinesOLetter />
        rk
      </span>
    </span>
  )
}

export function GEPAbbrevGlobeMark({
  className = '',
  colorSchemeKey,
}: {
  className?: string
  colorSchemeKey?: string
}) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    syncGlobeAttributes(linkRef.current)
  }, [colorSchemeKey])

  return (
    <a
      ref={linkRef}
      href="#"
      className={`inline-flex items-center flex-shrink-0 text-white ${className}`}
      aria-label="GEP Network home"
    >
      <span className="gep-logo-century gep-logo-abbrev inline-flex items-center leading-none whitespace-nowrap">
        <span className="gep-logo-century__g">
          G
          <span className="gep-logo-century__globe" aria-hidden="true">
            <gep-globe />
          </span>
        </span>
      </span>
    </a>
  )
}

export default function GEPLogoLockup({
  className = '',
  globeSize = 56,
  colorSchemeKey,
  lockupId,
  variant = 'header',
}: GEPLogoLockupProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const lockup = LOGO_LOCKUPS.find((l) => l.id === lockupId) ?? LOGO_LOCKUPS[0]
  const hero = variant === 'hero'
  const effectiveGlobeSize = hero ? (lockup.id === 'bruno-full' ? 160 : globeSize) : globeSize

  useEffect(() => {
    syncGlobeAttributes(linkRef.current)
  }, [colorSchemeKey, lockupId, variant])

  return (
    <a
      ref={linkRef}
      href="#"
      className={`inline-flex items-center flex-shrink-0 flex-nowrap whitespace-nowrap ${
        lockup.id === 'bruno-full'
          ? `gep-logo-tele ${hero ? 'gep-logo-tele--hero' : ''} gap-2 sm:gap-3 ${hero ? 'sm:gap-6' : ''}`
          : ''
      } ${hero ? 'justify-center text-white' : 'text-inherit'} ${className}`}
      aria-label="GEP Network home"
    >
      {lockup.id === 'century-globe' ? (
        <CenturyGlobeLockup hero={hero} />
      ) : (
        <TeleMarinesNetworkLockup globeSize={effectiveGlobeSize} hero={hero} />
      )}
    </a>
  )
}
