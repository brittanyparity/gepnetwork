import { Link } from 'react-router-dom'
import { ClientPartnersSection, ClientSatisfactionBlock } from '../components/ClientPartnersSection'
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border mt-16" style={{ borderColor: 'var(--gep-divider)' }}>
          {SERVICE_NAV.map((svc, i) => (
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
                    style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.35rem', letterSpacing: '0.04em' }}
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
          <Reveal direction="up" delay={(SERVICE_NAV.length % 3) * 80}>
            <Link
              to="/storage"
              className="group relative overflow-hidden border-b sm:border-r block"
              style={{ borderColor: 'var(--gep-divider)', minHeight: 280 }}
            >
              <img
                src="/gep-tour-storage-multi-dock.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
              <div className="relative z-10 h-full flex flex-col justify-end p-7" style={{ minHeight: 280 }}>
                <h3
                  className="text-white uppercase leading-tight mb-3"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.35rem', letterSpacing: '0.04em' }}
                >
                  Tour Storage
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-4" style={{ fontFamily: FONT_BODY }}>
                  Secure tour pulls and warehouse storage built for the entertainment industry.
                </p>
                <span className="text-xs tracking-widest uppercase font-semibold text-white/90" style={{ fontFamily: FONT_BODY }}>
                  Read More →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </SectionWrap>

      <ClientPartnersSection />
    </>
  )
}
