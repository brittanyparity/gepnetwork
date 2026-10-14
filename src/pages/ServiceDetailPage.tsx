import { Navigate, useParams } from 'react-router-dom'
import ConcertTourProductionDetail from './ConcertTourProductionDetail'
import { ServicePageFooter } from '../components/ServicePageFooter'
import {
  AccentLinkButton,
  BodyText,
  FullWidthPhoto,
  GoldRule,
  PageHero,
  SectionWrap,
  SideBySidePhoto,
} from '../components/PageChrome'
import { Reveal } from '../components/Reveal'
import { getServicePage } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  if (slug === 'tour-pulls-and-tour-storage') return <Navigate to="/storage" replace />

  const page = slug ? getServicePage(slug) : undefined
  if (!page) return <Navigate to="/services" replace />

  if (page.slug === 'concert-and-tour-production') {
    return <ConcertTourProductionDetail />
  }

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.summary}
        image={page.heroImg}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: page.title },
        ]}
      />

      <SectionWrap>
        <Reveal direction="up">
          <div className={`grid gap-10 items-start ${page.introImage ? 'lg:grid-cols-2' : ''}`}>
            <div className="max-w-3xl space-y-5">
              {page.intro.map((p) => (
                <BodyText key={p.slice(0, 24)}>{p}</BodyText>
              ))}
            </div>
            {page.introImage ? <SideBySidePhoto src={page.introImage} alt="" /> : null}
          </div>
        </Reveal>
      </SectionWrap>

      {page.sectionBanners?.[0] ? <FullWidthPhoto src={page.sectionBanners[0]} alt="" /> : null}

      {page.process?.length ? (
        <SectionWrap alt>
          <Reveal direction="up">
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-10"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--gep-text)',
              }}
            >
              {page.processTitle ?? 'Our Process'}
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_min(36%,420px)] gap-10 items-start">
            <div className="grid md:grid-cols-2 gap-8">
              {page.process.map((step, i) => (
                <Reveal key={step.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 100}>
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-sm font-semibold"
                      style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                        {step.title}
                      </h3>
                      <BodyText>{step.body}</BodyText>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            {page.processImages?.length ? (
              <div className="space-y-6">
                {page.processImages.map((src) => (
                  <SideBySidePhoto key={src} src={src} alt="" className="aspect-[3/2]" />
                ))}
              </div>
            ) : null}
          </div>
        </SectionWrap>
      ) : null}

      {page.sectionBanners?.[1] ? <FullWidthPhoto src={page.sectionBanners[1]} alt="" /> : null}

      {page.sectionBanners?.slice(2).map((src) => (
        <FullWidthPhoto key={src} src={src} alt="" />
      ))}

      {page.lists?.map((list, listIndex) => (
        <SectionWrap key={list.title} alt={listIndex % 2 === 1}>
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
              {list.title}
            </h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {list.items.map((item, i) => (
              <Reveal key={item} as="li" direction="up" delay={(i % 6) * 40}>
                <span className="flex items-center gap-3 text-base" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                  <span className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--gep-accent)' }} />
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </SectionWrap>
      ))}

      {page.closing ? (
        <SectionWrap alt>
          <Reveal direction="up">
            <BodyText className="max-w-3xl mb-8">{page.closing}</BodyText>
            <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
          </Reveal>
        </SectionWrap>
      ) : null}

      <ServicePageFooter excludeSlug={page.slug} />
    </>
  )
}
