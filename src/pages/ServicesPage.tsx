import { Link } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { Reveal } from '../components/Reveal'
import { SERVICE_NAV } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do and offer"
        title="Services"
        subtitle="Crafting exceptional events with expert precision — from electrifying concert tours to iconic festivals."
        image="/gep-service-production-management.png"
      />

      <SectionWrap>
        <Reveal direction="up">
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-6 max-w-3xl"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: 'var(--gep-text)',
            }}
          >
            Crafting Exceptional Events with Expert Precision
          </h2>
          <BodyText className="max-w-3xl mb-14">
            At the heart of every memorable event is a fusion of creativity, precision, and innovation — this is where GEP
            Network excels. Our suite of specialized services turns aspirations into tangible, extraordinary experiences.
          </BodyText>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border" style={{ borderColor: 'var(--gep-divider)' }}>
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
        </div>
      </SectionWrap>

      <SectionWrap alt>
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <GoldRule />
              <h2
                className="uppercase leading-tight mb-4"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_TITLE_WEIGHT,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--gep-text)',
                }}
              >
                Need tour storage?
              </h2>
              <BodyText>
                Secure, accessible storage built for the music industry — not general warehousing.
              </BodyText>
            </div>
            <AccentLinkButton to="/storage">Explore Storage</AccentLinkButton>
          </div>
        </Reveal>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
