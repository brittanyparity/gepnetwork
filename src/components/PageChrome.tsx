import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs'
import { AnimatedTitle } from './Motion'
import { Reveal, RevealGroup } from './Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export function GoldRule() {
  return <div className="w-12 h-px mb-6" style={{ background: 'var(--gep-accent)' }} />
}

function useFullWidthParallax(
  containerRef: RefObject<HTMLDivElement | null>,
  imageRef: RefObject<HTMLImageElement | null>,
) {
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let raf = 0
    const update = () => {
      const el = containerRef.current
      const img = imageRef.current
      if (!el || !img) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom <= 0 || rect.top >= vh) return

      const travel = rect.height + vh
      const distance = vh - rect.top
      const progress = Math.min(1, Math.max(0, distance / travel))
      const range = Math.min(Math.max(img.offsetHeight, el.offsetHeight) * 0.18, 140)
      setTranslateY((progress - 0.5) * range * 2)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [containerRef, imageRef])

  return translateY
}

/** Full-bleed section photo (matches legacy WP breaks between copy blocks). */
export function FullWidthPhoto({
  src,
  alt = '',
  maxHeight = 'min(70vh, 520px)',
}: {
  src: string
  alt?: string
  maxHeight?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const translateY = useFullWidthParallax(containerRef, imageRef)
  const naturalHeight = maxHeight === 'none'

  return (
    <div
      ref={containerRef}
      className="gep-fullwidth-parallax relative z-0 w-full overflow-hidden"
      style={{
        background: 'var(--gep-bg)',
        ...(naturalHeight ? undefined : { height: maxHeight, minHeight: 220 }),
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={
          naturalHeight
            ? 'block w-full scale-[1.06] origin-center will-change-transform'
            : 'absolute left-0 w-full object-cover will-change-transform'
        }
        style={
          naturalHeight
            ? { transform: `translate3d(0, ${translateY}px, 0)` }
            : {
                height: '122%',
                top: '-11%',
                transform: `translate3d(0, ${translateY}px, 0)`,
              }
        }
      />
    </div>
  )
}

export function SideBySidePhoto({
  src,
  alt = '',
  objectPosition,
  className = '',
  fillHeight = false,
}: {
  src: string
  alt?: string
  objectPosition?: string
  className?: string
  /** Match adjacent copy column height (use inside `.gep-side-by-side-row`). */
  fillHeight?: boolean
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover ${fillHeight ? 'h-full min-h-[280px] aspect-auto' : 'aspect-[4/3]'} ${className}`}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}

/** Two-column text + image rows — equal column height on large screens. */
export function SideBySideRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`gep-side-by-side-row ${className}`.trim()}>{children}</div>
}

/** Copy column aligned to image height with slightly tighter typography. */
export function SideBySideCopy({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`gep-side-by-side-copy ${className}`.trim()}>{children}</div>
}

export function StackedSidePhotos({ children }: { children: ReactNode }) {
  return <div className="gep-stacked-photos">{children}</div>
}

/** Full-width prose within SectionWrap (no narrow max-width). */
export function SectionProse({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={`gep-section-prose w-full ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition,
  portrait,
  solidBanner,
  breadcrumbs,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
  /** CSS object-position, e.g. "center 18%" */
  imagePosition?: string
  /** Prefer face-safe crop for portrait photos (team heroes) */
  portrait?: boolean
  /** Text-only hero on a solid surface (no photo banner) */
  solidBanner?: boolean
  breadcrumbs?: BreadcrumbItem[]
}) {
  const bannerBackground = solidBanner ? 'var(--gep-card)' : 'var(--gep-bg)'

  return (
    <section
      className={`relative overflow-hidden ${portrait && image ? 'page-hero--portrait' : ''}`}
      style={{ background: bannerBackground }}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover page-hero-fade ${portrait ? 'page-hero-portrait-img' : ''}`}
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(23, 20, 15, 0.62)' }} />
        </>
      ) : null}
      <div className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 ${image ? 'text-white' : ''}`}>
        {breadcrumbs?.length ? (
          <div className={image ? 'text-white/75' : ''} style={image ? undefined : { color: 'var(--gep-text-muted)' }}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <div className="page-hero-fade page-hero-fade-delay-1">
          <GoldRule />
        </div>
        {eyebrow ? (
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 font-medium page-hero-fade page-hero-fade-delay-1"
            style={{
              fontFamily: FONT_BODY,
              color: image ? 'rgba(255,255,255,0.75)' : 'var(--gep-text-muted)',
            }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="uppercase leading-tight max-w-4xl page-hero-fade page-hero-fade-delay-2"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            letterSpacing: '0.02em',
            color: image ? '#fff' : 'var(--gep-text)',
          }}
        >
          <AnimatedTitle text={title} />
        </h1>
        {subtitle ? (
          <p
            className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl font-medium page-hero-fade page-hero-fade-delay-3"
            style={{
              fontFamily: FONT_BODY,
              color: image ? 'rgba(255,255,255,0.85)' : 'var(--gep-text-muted)',
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
      className="relative z-[1] py-20 md:py-24"
      style={{ background: alt ? 'var(--gep-bg-alt)' : 'var(--gep-bg)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <RevealGroup direction="fade" step={55}>
          {children}
        </RevealGroup>
      </div>
    </section>
  )
}

export function BodyText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-base leading-relaxed font-normal ${className}`}
      style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)', fontWeight: 500 }}
    >
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
      <RevealGroup direction="fade" step={55} className="max-w-3xl">
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
      </RevealGroup>
    </SectionWrap>
  )
}
