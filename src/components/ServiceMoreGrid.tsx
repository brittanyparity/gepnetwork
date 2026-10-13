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
}: {
  services: ServiceCard[]
  excludeSlug?: string
  showImages?: boolean
}) {
  const items = services.filter((s) => s.slug !== excludeSlug)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border" style={{ borderColor: 'var(--gep-divider)' }}>
      {items.map((svc, i) => (
        <Reveal key={svc.slug} direction="up" delay={(i % 3) * 80}>
          <Link
            to={`/services/${svc.slug}`}
            className={`group relative overflow-hidden border-b sm:border-r block ${showImages ? '' : 'h-full'}`}
            style={{
              borderColor: 'var(--gep-divider)',
              minHeight: showImages ? 280 : undefined,
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
              className={`relative z-10 h-full flex flex-col ${showImages ? 'justify-end p-7' : 'p-7 min-h-[200px]'}`}
              style={showImages ? { minHeight: 280 } : undefined}
            >
              <h3
                className={`uppercase leading-tight mb-3 ${showImages ? 'text-white' : ''}`}
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_TITLE_WEIGHT,
                  fontSize: '1.35rem',
                  letterSpacing: '0.04em',
                  color: showImages ? undefined : 'var(--gep-text)',
                }}
              >
                {svc.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 flex-1 ${showImages ? 'text-white/75' : ''}`}
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
