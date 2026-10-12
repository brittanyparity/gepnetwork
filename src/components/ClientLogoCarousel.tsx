import { CLIENT_LOGOS } from '../content/clients'
import { DISPLAY_TITLE_WEIGHT, FONT_DISPLAY } from '../site'

/** Legacy-style scrolling partner logos (WP carousel energy). */
export function ClientLogoCarousel({
  title = "We've served hundreds of notable clients & partners",
}: {
  title?: string
}) {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ borderTop: '1px solid var(--gep-divider)', background: 'var(--gep-bg-alt)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
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
      </div>
      <div className="relative">
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
