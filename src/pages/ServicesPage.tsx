import { ClientPartnersSection, ClientSatisfactionBlock } from '../components/ClientPartnersSection'
import { ServiceMoreGrid } from '../components/ServiceMoreGrid'
import { TypewriterHero } from '../components/TypewriterHero'
import { BodyText, GoldRule, SectionWrap, SideBySidePhoto } from '../components/PageChrome'
import { Reveal, RevealGroup } from '../components/Reveal'
import { SERVICE_NAV } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const SERVICES_HERO_IMG = '/service-page-hero.jpeg'
const CRAFTING_IMG = '/service-text-section.jpg'

const SERVICES_HERO_PHRASES = [{ lead: 'What ', accent: 'We Do and Offer' }] as const

const CRAFTING_BODY =
  "At the heart of every memorable event is a fusion of creativity, precision, and innovation – this is where GEP Network excels. Our suite of specialized services is the cornerstone of event production and management that turns your aspirations into tangible, extraordinary experiences. From electrifying concert tours to iconic festivals, our commitment to excellence ensures that each event is not just produced but passionately crafted to leave a lasting impression. Step into the realm of GEP Network, where every service is a pledge to bring your event's vision to life with unmatched expertise and finesse."

export default function ServicesPage() {
  return (
    <>
      <TypewriterHero image={SERVICES_HERO_IMG} phrases={SERVICES_HERO_PHRASES} />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-start">
          <Reveal direction="left">
            <SideBySidePhoto src={CRAFTING_IMG} alt="Festival production" />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <RevealGroup direction="fade" step={50}>
              <GoldRule />
              <h2
                className="uppercase leading-tight mb-6"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_TITLE_WEIGHT,
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  color: 'var(--gep-text)',
                }}
              >
                Crafting Exceptional Events with Expert Precision
              </h2>
              <BodyText>{CRAFTING_BODY}</BodyText>
              <ClientSatisfactionBlock />
            </RevealGroup>
          </Reveal>
        </div>

        <ServiceMoreGrid services={SERVICE_NAV} size="large" className="mt-16" />
      </SectionWrap>

      <ClientPartnersSection />
    </>
  )
}
