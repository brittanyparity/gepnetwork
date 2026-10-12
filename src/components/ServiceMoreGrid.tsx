import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

type ServiceCard = {
  slug: string
  title: string
  summary: string
  img: string
}

export function ServiceMoreGrid({ services, excludeSlug }: { services: ServiceCard[]; excludeSlug?: string }) {
  const items = services.filter((s) => s.slug !== excludeSlug)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border" style={{ borderColor: 'var(--gep-divider)' }}>
      {items.map((svc, i) => (
        <Reveal key={svc.slug} direction="up" delay={(i % 3) * 80}>
          <Link
            to={`/services/${svc.slug}`}
            className="group relative overflow-hidden border-b sm:border-r block"
            style={{ borderColor: 'var(--gep-divider)', minHeight: 280 }}
          >
            <img
              src={svc.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
            <div className="relative z-10 h-full flex flex-col justify-end p-7" style={{ minHeight: 280 }}>
              <h3
                className="text-white uppercase leading-tight mb-3"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_TITLE_WEIGHT,
                  fontSize: '1.35rem',
                  letterSpacing: '0.04em',
                }}
              >
                {svc.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mb-4" style={{ fontFamily: FONT_BODY }}>
                {svc.summary}
              </p>
              <span className="text-xs tracking-widest uppercase font-semibold text-white/90" style={{ fontFamily: FONT_BODY }}>
                Read More →
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
