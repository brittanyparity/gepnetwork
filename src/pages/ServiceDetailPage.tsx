import { Link, Navigate, useParams } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { Reveal } from '../components/Reveal'
import { getServicePage, SERVICE_NAV } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const page = slug ? getServicePage(slug) : undefined
  if (!page) return <Navigate to="/services" replace />

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
          <div className="max-w-3xl space-y-5">
            {page.intro.map((p) => (
              <BodyText key={p.slice(0, 24)}>{p}</BodyText>
            ))}
          </div>
        </Reveal>
      </SectionWrap>

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
        </SectionWrap>
      ) : null}

      {page.lists?.map((list) => (
        <SectionWrap key={list.title}>
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

      <SectionWrap>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_NAV.filter((s) => s.slug !== page.slug).map((svc, i) => (
            <Reveal key={svc.slug} direction="up" delay={(i % 3) * 80}>
              <Link
                to={`/services/${svc.slug}`}
                className="block p-6 transition-colors h-full"
                style={{ background: 'var(--gep-card)', color: 'var(--gep-text)' }}
              >
                <h3
                  className="uppercase mb-2"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.15rem' }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                  {svc.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
