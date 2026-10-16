import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

type ServiceCard = {
  slug: string
  title: string
  summary: string
  img: string
}

export function ServiceMoreGrid({
  services,
  excludeSlug,
  showImages = true,
  size = 'default',
  className = '',
}: {
  services: ServiceCard[]
  excludeSlug?: string
  showImages?: boolean
  /** Larger tiles for the main Services page grid */
  size?: 'default' | 'large'
  className?: string
}) {
  const items = services.filter((s) => s.slug !== excludeSlug)

  return (
    <div
      className={`gep-service-more-grid grid sm:grid-cols-2 gap-0 border ${size === 'large' ? 'gep-service-more-grid--large' : ''} ${className}`.trim()}
      data-svc-count={items.length}
      style={{
        borderColor: 'var(--gep-divider)',
        ['--svc-more-count' as string]: String(items.length),
      }}
    >
      {items.map((svc, i) => (
        <Reveal key={svc.slug} direction="up" delay={(i % 3) * 80}>
          <Link
            to={`/services/${svc.slug}`}
            className={`gep-service-more-tile group relative overflow-hidden border-b sm:border-r block ${showImages ? '' : 'h-full'}`}
            style={{
              borderColor: 'var(--gep-divider)',
              background: showImages ? undefined : 'var(--gep-card)',
            }}
          >
            {showImages ? (
              <>
                <img
                  src={svc.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
              </>
            ) : null}
            <div
              className={`gep-service-more-tile__body relative z-10 h-full flex flex-col ${showImages ? 'justify-end' : ''}`}
            >
              <h3
                className={`gep-service-more-tile__title uppercase leading-tight mb-2 line-clamp-2 ${showImages ? 'text-white' : ''}`}
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_TITLE_WEIGHT,
                  letterSpacing: '0.04em',
                  color: showImages ? undefined : 'var(--gep-text)',
                }}
              >
                {svc.title}
              </h3>
              <p
                className={`gep-service-more-tile__summary text-xs leading-snug mb-3 flex-1 line-clamp-3 ${showImages ? 'text-white/75' : ''}`}
                style={{ fontFamily: FONT_BODY, color: showImages ? undefined : 'var(--gep-text-muted)' }}
              >
                {svc.summary}
              </p>
              <span
                className={`text-xs tracking-widest uppercase font-semibold ${showImages ? 'text-white/90' : ''}`}
                style={{ fontFamily: FONT_BODY, color: showImages ? undefined : 'var(--gep-accent)' }}
              >
                Read More →
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
