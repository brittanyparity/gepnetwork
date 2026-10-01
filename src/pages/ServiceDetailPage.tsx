import { Link, Navigate, useParams } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { getServicePage, SERVICE_NAV } from '../content/services'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const page = slug ? getServicePage(slug) : undefined
  if (!page) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.summary} image={page.heroImg} />

      <SectionWrap>
        <div className="max-w-3xl space-y-5">
          {page.intro.map((p) => (
            <BodyText key={p.slice(0, 24)}>{p}</BodyText>
          ))}
        </div>
      </SectionWrap>

      {page.process?.length ? (
        <SectionWrap alt>
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
          <div className="grid md:grid-cols-2 gap-8">
            {page.process.map((step, i) => (
              <div key={step.title} className="flex gap-4">
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
            ))}
          </div>
        </SectionWrap>
      ) : null}

      {page.lists?.map((list) => (
        <SectionWrap key={list.title}>
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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {list.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base"
                style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}
              >
                <span className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--gep-accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        </SectionWrap>
      ))}

      {page.closing ? (
        <SectionWrap alt>
          <BodyText className="max-w-3xl mb-8">{page.closing}</BodyText>
          <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
        </SectionWrap>
      ) : null}

      <SectionWrap>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_NAV.filter((s) => s.slug !== page.slug).map((svc) => (
            <Link
              key={svc.slug}
              to={`/services/${svc.slug}`}
              className="block p-6 transition-colors"
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
          ))}
        </div>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
