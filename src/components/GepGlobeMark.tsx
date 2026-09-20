import { useEffect, useRef } from 'react'

type GepGlobeMarkProps = {
  className?: string
  size?: number
  colorSchemeKey?: string
}

function readCssVar(name: string, fallback: string) {
  if (typeof document === 'undefined') return fallback
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

export default function GepGlobeMark({ className = '', size = 52, colorSchemeKey }: GepGlobeMarkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = linkRef.current?.querySelector('gep-globe')
    if (!el) return

    el.setAttribute('land', readCssVar('--gep-globe-land', '#F2EEE8'))
    el.setAttribute('ocean', readCssVar('--gep-globe-ocean', '#0E1116'))
    el.setAttribute('accent', readCssVar('--gep-accent', '#FFC52F'))

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.setAttribute('speed', reduced ? '0' : '0.18')
  }, [colorSchemeKey])

  return (
    <a
      ref={linkRef}
      href="#"
      className={`relative block flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="GEP Network home"
    >
      <gep-globe />
    </a>
  )
}
