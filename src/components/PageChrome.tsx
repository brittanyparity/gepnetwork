import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export function GoldRule() {
  return <div className="w-12 h-px mb-6" style={{ background: 'var(--gep-accent)' }} />
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--gep-bg)' }}>
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(23, 20, 15, 0.62)' }} />
        </>
      ) : null}
      <div className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 ${image ? 'text-white' : ''}`}>
        <GoldRule />
        {eyebrow ? (
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{
              fontFamily: FONT_BODY,
              color: image ? 'rgba(255,255,255,0.7)' : 'var(--gep-text-muted)',
            }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="uppercase leading-tight max-w-4xl"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            letterSpacing: '0.02em',
            color: image ? '#fff' : 'var(--gep-text)',
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
            style={{
              fontFamily: FONT_BODY,
              color: image ? 'rgba(255,255,255,0.8)' : 'var(--gep-text-muted)',
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}

export function SectionWrap({ children, id, alt }: { children: ReactNode; id?: string; alt?: boolean }) {
  return (
    <section
      id={id}
      className="py-20 md:py-24"
      style={{ background: alt ? 'var(--gep-bg-alt)' : 'var(--gep-bg)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">{children}</div>
    </section>
  )
}

export function BodyText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-base leading-relaxed ${className}`} style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
      {children}
    </p>
  )
}

export function AccentLinkButton({ to, children }: { to: string; children: ReactNode }) {
  const style: CSSProperties = {
    fontFamily: FONT_BODY,
    borderColor: 'var(--gep-accent)',
    color: 'var(--gep-accent)',
    background: 'transparent',
  }
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--gep-accent)'
        e.currentTarget.style.color = 'var(--gep-accent-text)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = 'var(--gep-accent)'
      }}
    >
      {children}
    </Link>
  )
}

export function CtaBand({
  title = "Ready to partner with us?",
  body = 'From global icons to leading brands, our client roster speaks volumes about our commitment to excellence. Let’s create something extraordinary together.',
}: {
  title?: string
  body?: string
}) {
  return (
    <SectionWrap alt>
      <div className="max-w-3xl">
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-4"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--gep-text)',
          }}
        >
          {title}
        </h2>
        <BodyText className="mb-8">{body}</BodyText>
        <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
      </div>
    </SectionWrap>
  )
}
