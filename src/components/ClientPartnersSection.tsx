import { useEffect, useRef, useState } from 'react'
import { RevealGroup } from './Reveal'
import { ClientLogoCarousel } from './ClientLogoCarousel'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

/** Scrolling client logos — matches legacy WP carousel at bottom of inner pages. */
export function ClientPartnersSection(props: { title?: string; layout?: 'default' | 'about' }) {
  return <ClientLogoCarousel {...props} />
}

export function ClientSatisfactionBlock() {
  const blockRef = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = blockRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPercent(100)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!animate) return

    const durationMs = 2400
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs)
      const eased = 1 - (1 - progress) ** 2
      setPercent(Math.round(eased * 100))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animate])

  return (
    <div ref={blockRef} className="mt-10 pt-8 border-t max-w-xl" style={{ borderColor: 'var(--gep-divider)' }}>
      <RevealGroup direction="fade" step={50}>
        <h3
          className="uppercase leading-tight mb-5"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
            color: 'var(--gep-text)',
          }}
        >
          Our Commitment to Client Satisfaction
        </h3>
        <div className="h-2 w-full overflow-hidden rounded-sm" style={{ background: 'var(--gep-divider)' }}>
          <div
            className="h-full rounded-sm transition-[width] duration-75 ease-out"
            style={{ width: `${percent}%`, background: 'var(--gep-accent)' }}
          />
        </div>
        <p
          className="mt-3 tabular-nums leading-none"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            color: 'var(--gep-accent)',
          }}
          aria-live="polite"
        >
          {percent}%
        </p>
      </RevealGroup>
    </div>
  )
}
