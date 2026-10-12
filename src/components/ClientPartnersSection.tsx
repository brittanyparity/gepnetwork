import { ClientLogoCarousel } from './ClientLogoCarousel'

/** Scrolling client logos — matches legacy WP carousel at bottom of inner pages. */
export function ClientPartnersSection(props: { title?: string }) {
  return <ClientLogoCarousel {...props} />
}

export function ClientSatisfactionBlock() {
  return (
    <div
      className="mt-12 p-8 md:p-10 border max-w-3xl"
      style={{ borderColor: 'var(--gep-divider)', background: 'var(--gep-card)' }}
    >
      <h3
        className="uppercase leading-tight mb-6"
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: DISPLAY_TITLE_WEIGHT,
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          color: 'var(--gep-text)',
        }}
      >
        Our Commitment to Client Satisfaction
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <p
          className="leading-none"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(3.5rem, 10vw, 5rem)',
            color: 'var(--gep-accent)',
          }}
        >
          100%
        </p>
        <p className="text-sm leading-relaxed max-w-md pb-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
          Client retention and repeat partnerships across touring, festivals, and corporate production — built on
          decades of show-day execution.
        </p>
      </div>
      <div className="mt-6 h-1.5 w-full overflow-hidden" style={{ background: 'var(--gep-divider)' }}>
        <div className="h-full w-full" style={{ background: 'var(--gep-accent)' }} />
      </div>
    </div>
  )
}
