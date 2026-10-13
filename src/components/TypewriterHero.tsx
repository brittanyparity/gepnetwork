import { useEffect, useState, type ReactNode } from 'react'
import { GoldRule } from './PageChrome'
import { DISPLAY_TITLE_WEIGHT, FONT_DISPLAY } from '../site'

const TYPE_MS = 55
const PAUSE_MS = 2400
const DELETE_MS = 28

export type TypewriterPhrase = { lead: string; accent: string }

export function TypewriterHero({
  image,
  phrases,
  breadcrumbs,
}: {
  image: string
  phrases: readonly TypewriterPhrase[]
  breadcrumbs?: ReactNode
}) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const phrase = phrases[phraseIndex] ?? phrases[0]
  const full = phrase.lead + phrase.accent
  const leadLen = phrase.lead.length

  useEffect(() => {
    setCharCount(0)
    setDeleting(false)
  }, [phraseIndex])

  useEffect(() => {
    const atEnd = charCount >= full.length
    const atStart = charCount <= 0

    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && atEnd) delay = PAUSE_MS
    if (deleting && atStart) delay = 400

    const id = window.setTimeout(() => {
      if (!deleting) {
        if (charCount < full.length) {
          setCharCount((c) => c + 1)
        } else {
          setDeleting(true)
        }
      } else if (charCount > 0) {
        setCharCount((c) => c - 1)
      } else {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }, delay)

    return () => window.clearTimeout(id)
  }, [charCount, deleting, full.length, phrases.length])

  const visible = full.slice(0, charCount)
  const leadPart = visible.slice(0, Math.min(visible.length, leadLen))
  const accentPart = visible.length > leadLen ? visible.slice(leadLen) : ''

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--gep-bg)' }}>
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover page-hero-fade" />
      <div className="absolute inset-0" style={{ background: 'rgba(23, 20, 15, 0.62)' }} />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 text-white">
        {breadcrumbs ? <div className="text-white/75 mb-4 page-hero-fade page-hero-fade-delay-1">{breadcrumbs}</div> : null}
        <div className="page-hero-fade page-hero-fade-delay-1">
          <GoldRule />
        </div>
        <h1
          className="leading-tight max-w-4xl min-h-[1.15em] page-hero-fade page-hero-fade-delay-2 normal-case"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            letterSpacing: '0.01em',
            color: '#fff',
            textTransform: 'none',
          }}
          aria-live="polite"
          aria-label={`${phrase.lead}${phrase.accent}`}
        >
          <span>{leadPart}</span>
          {accentPart ? (
            <span style={{ color: 'var(--gep-accent)', fontWeight: 800 }}>{accentPart}</span>
          ) : null}
          <span
            className="inline-block w-[0.06em] ml-0.5 align-baseline animate-pulse"
            style={{ background: 'var(--gep-accent)', height: '0.85em' }}
            aria-hidden
          />
        </h1>
      </div>
    </section>
  )
}
