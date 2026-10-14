import { ClientPartnersSection } from './ClientPartnersSection'
import { GoldRule, SectionWrap } from './PageChrome'
import { Reveal } from './Reveal'
import { ServiceMoreGrid } from './ServiceMoreGrid'
import { SERVICE_NAV } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_DISPLAY } from '../site'

/** More Services grid + Notable Clients — shared footer for service detail pages. */
export function ServicePageFooter({ excludeSlug }: { excludeSlug?: string }) {
  return (
    <>
      <SectionWrap alt>
        <Reveal direction="up">
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-8"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--gep-text)',
            }}
          >
            More Services
          </h2>
        </Reveal>
        <ServiceMoreGrid services={SERVICE_NAV} excludeSlug={excludeSlug} />
      </SectionWrap>

      <ClientPartnersSection />
    </>
  )
}
