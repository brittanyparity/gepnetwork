import { Link } from 'react-router-dom'
import { CLIENT_LOGOS } from '../content/clients'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const ABOUT_CLIENTS_SUB =
  'From global icons to leading brands, our client roster speaks volumes about our commitment to excellence. Let’s create something extraordinary together.'

/** Legacy-style scrolling partner logos (WP carousel energy). */
export function ClientLogoCarousel({
  title = "We've served hundreds of notable clients & partners",
  layout = 'default',
}: {
  title?: string
  layout?: 'default' | 'about'
}) {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  const header = (
    <div className={`max-w-[1400px] mx-auto px-6 lg:px-10 ${layout === 'about' ? 'mb-12' : 'mb-10'}`}>
      <h2
        className="uppercase text-center leading-tight max-w-3xl mx-auto"
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: DISPLAY_TITLE_WEIGHT,
          fontSize: 'clamp(1.35rem, 3vw, 2rem)',
          color: 'var(--gep-text)',
        }}
      >
        {title}
      </h2>
      {layout === 'about' ? (
        <>
          <p
            className="text-center text-sm leading-relaxed max-w-2xl mx-auto mt-5 mb-8"
            style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
          >
            {ABOUT_CLIENTS_SUB}
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200"
              style={{
                fontFamily: FONT_BODY,
                borderColor: 'var(--gep-accent)',
                color: 'var(--gep-accent)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gep-accent)'
                e.currentTarget.style.color = 'var(--gep-accent-text)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--gep-accent)'
              }}
            >
              Contact Us
            </Link>
          </div>
        </>
      ) : null}
    </div>
  )

  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ borderTop: '1px solid var(--gep-divider)', background: 'var(--gep-bg-alt)' }}
    >
      {header}
      <div className={`relative${layout === 'about' ? ' mt-10' : ''}`}>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: 'linear-gradient(to right, var(--gep-bg-alt), transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{ background: 'linear-gradient(to left, var(--gep-bg-alt), transparent)' }}
        />
        <div className="flex gap-10 animate-marquee w-max items-center px-6">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center shrink-0 px-4 py-3"
              style={{ minWidth: 160, minHeight: 72 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`max-h-11 w-auto max-w-[150px] object-contain opacity-85 hover:opacity-100 transition-opacity${client.logoClass ? ` ${client.logoClass}` : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
