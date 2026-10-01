import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { getServicePage } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const STORAGE = getServicePage('tour-pulls-and-tour-storage')!

const FEATURES = [
  {
    title: 'Multi-Dock Access',
    desc: 'Multiple loading bays for fast, efficient gear movement — in and out without delay.',
    img: '/gep-tour-storage-multi-dock.png',
  },
  {
    title: 'Music Industry Expertise',
    desc: "Our team understands touring equipment. We've stored it, moved it, and protected it for 40+ years.",
    img: '/gep-service-travel-logistics.png',
  },
  {
    title: 'Courteous Service',
    desc: 'Professional, responsive staff who treat your gear with the same care you do.',
    img: '/gep-tour-storage-courteous-service.png',
  },
]

export default function StoragePage() {
  return (
    <>
      <PageHero
        eyebrow={STORAGE.eyebrow}
        title="Tour Storage"
        subtitle="Secure, accessible, and customized storage services built for the entertainment industry."
        image={STORAGE.heroImg}
      />

      <SectionWrap>
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
          Storage Solutions
        </h2>
        <div className="max-w-3xl space-y-5 mb-14">
          {STORAGE.intro.map((p) => (
            <BodyText key={p.slice(0, 20)}>{p}</BodyText>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="relative overflow-hidden" style={{ height: 360, background: 'var(--gep-card)' }}>
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(23,20,15,0.88) 0%, rgba(23,20,15,0.2) 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white uppercase mb-2"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.35rem' }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: FONT_BODY }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {STORAGE.process?.map((step) => (
            <div key={step.title}>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                {step.title}
              </h3>
              <BodyText>{step.body}</BodyText>
            </div>
          ))}
        </div>

        {STORAGE.lists?.[0] ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {STORAGE.lists[0].items.map((item) => (
              <li key={item} className="flex items-center gap-3" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                <span className="w-1.5 h-1.5" style={{ background: 'var(--gep-accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <AccentLinkButton to="/contact">Inquire About Storage</AccentLinkButton>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
