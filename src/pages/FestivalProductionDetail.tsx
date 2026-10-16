import type { CSSProperties } from 'react'
import { ServicePageFooter } from '../components/ServicePageFooter'
import { TypewriterHero } from '../components/TypewriterHero'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { BodyText, FullWidthPhoto, GoldRule, SectionWrap, SideBySidePhoto } from '../components/PageChrome'
import { Reveal, RevealGroup } from '../components/Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const HERO_PHRASES = [{ lead: 'We do ', accent: 'Festival Production' }] as const

const INTRO_P1 =
  'At GEP Network, we bring your festival vision to life with our comprehensive production services. With years of experience and a proven track record, we specialize in delivering exceptional results for festivals of all sizes and genres. From technical production to seamless coordination, we are your trusted partner in creating unforgettable festival experiences.'

const INTRO_EXPERIENCE =
  "GEP Network has a rich history of successful festival productions, including renowned events like Mary J. Blige's Strength of a Woman Festival, Honeyland Festival in Houston, TX, Broccoli City Festival in Washington, DC, Roots Picnic in Philadelphia, PA, and Jazz in The Garden Festival in Miami, FL. Our festival collaboration speak volumes about our expertise and ability to deliver outstanding results."

const SERVICES_INTRO =
  'We offer a complete range of services to cover every aspect of festival production:'

const FESTIVAL_SERVICES: { title: string; body: string }[] = [
  {
    title: 'Production Needs Assessment',
    body: 'Analyzing production requirements, reviewing venue contracts, and liaising with venue managers for seamless execution.',
  },
  {
    title: 'Advancing',
    body: "Ensuring artists' technical and hospitality needs are met, resolving any potential issues before the event.",
  },
  {
    title: 'Production Scheduling',
    body: 'Creating detailed schedules, timelines, load-in and strike schedules, and maintaining daily schedules during the festival.',
  },
  {
    title: 'Budgeting and Procurement',
    body: 'Managing production budgets, sourcing production assets, and handling venue-related costs.',
  },
  {
    title: 'Human Resources Management',
    body: 'Hiring and training production staff, supervising operations during the festival.',
  },
  {
    title: 'Stage Management of Multiple Stages',
    body: 'Expertly managing multiple stages and locations, coordinating performances, and ensuring smooth transitions between acts.',
  },
  {
    title: 'On-Site Management',
    body: 'Overseeing load-ins, strikes, and providing hands-on support throughout the event.',
  },
  {
    title: 'Technical Production',
    body: 'Providing top-of-the-line audio, lighting, LED video, special effects, and other technical services to enhance the overall festival experience.',
  },
  {
    title: 'Vendor Coordination',
    body: 'Collaborating with vendors for equipment rentals, catering, security, and other essential services.',
  },
  {
    title: 'Safety and Compliance',
    body: 'Ensuring compliance with safety regulations, securing necessary permits, and implementing emergency protocols.',
  },
  {
    title: 'Administration',
    body: 'Participating in production meetings, preparing final reports, and attending post-mortem sessions for continuous improvement.',
  },
  {
    title: 'Marketing and Promotion Support',
    body: 'Assisting with marketing strategies, promotional materials, and media coverage to maximize festival exposure and attendance.',
  },
]

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Extensive Experience',
    body: 'Years of successful festival productions and partnerships with industry leaders.',
  },
  {
    title: 'Comprehensive Services',
    body: 'From planning to execution, we cover every aspect of festival production.',
  },
  {
    title: 'Cutting-Edge Equipment',
    body: 'Top-of-the-line technical equipment for a seamless and immersive experience.',
  },
  {
    title: 'Collaborative Approach',
    body: 'Working closely with clients to bring visions to life and exceed expectations.',
  },
  {
    title: 'Proven Results',
    body: 'Satisfied clients, successful festivals, and a reputation for excellence in the industry.',
  },
] as const

const bodyMuted: CSSProperties = {
  fontFamily: FONT_BODY,
  color: 'var(--gep-text-muted)',
  fontWeight: 500,
}

function LabeledParagraph({
  label,
  children,
  className = '',
}: {
  label: string
  children: string
  className?: string
}) {
  return (
    <p className={`text-base leading-relaxed font-normal ${className}`.trim()} style={bodyMuted}>
      <span className="font-semibold" style={{ color: 'var(--gep-text)' }}>
        {label}
      </span>{' '}
      {children}
    </p>
  )
}

function OrderedServiceItem({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-semibold tabular-nums"
        style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
        aria-hidden
      >
        {index}
      </span>
      <p className="text-base leading-relaxed pt-0.5" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)', fontWeight: 500 }}>
        <span className="font-semibold" style={{ color: 'var(--gep-text)' }}>
          {title}:
        </span>{' '}
        {body}
      </p>
    </li>
  )
}

export default function FestivalProductionDetail() {
  const servicesA = FESTIVAL_SERVICES.slice(0, 6)
  const servicesB = FESTIVAL_SERVICES.slice(6, 12)

  return (
    <>
      <TypewriterHero
        image="/fp-hero.jpg"
        phrases={HERO_PHRASES}
        imagePosition="50% 35%"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Festival Production' },
            ]}
          />
        }
      />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-start">
          <Reveal direction="left">
            <RevealGroup direction="fade" step={55}>
              <BodyText className="mb-6">{INTRO_P1}</BodyText>
              <LabeledParagraph label="Our Experience:">{INTRO_EXPERIENCE}</LabeledParagraph>
            </RevealGroup>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src="/fp-img-1.jpg" alt="Festival stage production" />
          </Reveal>
        </div>
      </SectionWrap>

      <FullWidthPhoto src="/fp-img-2.png" alt="Festival crowd and stage" maxHeight="none" />

      <SectionWrap alt>
        <Reveal direction="up">
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-8"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: 'var(--gep-text)',
            }}
          >
            Festival Production Service
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <Reveal direction="left">
            <RevealGroup direction="fade" step={50}>
              <BodyText className="mb-8">{SERVICES_INTRO}</BodyText>
              <ol className="space-y-6 list-none p-0 m-0">
                {servicesA.map((item, i) => (
                  <OrderedServiceItem key={item.title} index={i + 1} title={item.title} body={item.body} />
                ))}
              </ol>
            </RevealGroup>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src="/fp-img-3.jpg" alt="Festival production planning" className="aspect-[4/3] lg:min-h-[420px]" />
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal direction="left" className="order-2 lg:order-1">
            <SideBySidePhoto src="/fp-img-4.jpg" alt="Festival stage build" className="aspect-[4/3] lg:min-h-[420px]" />
          </Reveal>
          <Reveal direction="right" delay={120} className="order-1 lg:order-2">
            <ol className="space-y-6 list-none p-0 m-0">
              {servicesB.map((item, i) => (
                <OrderedServiceItem key={item.title} index={i + 7} title={item.title} body={item.body} />
              ))}
            </ol>
          </Reveal>
        </div>
      </SectionWrap>

      <FullWidthPhoto src="/fp-img-5.png" alt="Festival production at night" maxHeight="none" />

      <SectionWrap>
        <RevealGroup direction="fade" step={55}>
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-8"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: 'var(--gep-text)',
            }}
          >
            Excellence, it&apos;s our Competitive Edge
          </h2>
          <LabeledParagraph label="Cutting-Edge Equipment:" className="mb-6">
            We boast a vast inventory of cutting-edge technical equipment, including audio, lighting, LED video, special effects, and more. Our team ensures that every visual and auditory aspect of your festival is top-notch, enhancing the overall attendee experience.
          </LabeledParagraph>
          <LabeledParagraph label="Collaborative Approach and Proven Results:">
            At GEP Network, we believe in collaboration and transparency. We work closely with promoters, artists, vendors, and stakeholders to understand your vision and deliver exceptional results within budget and on time. Our proven track record and satisfied clients speak volumes about our commitment to excellence.
          </LabeledParagraph>
          <p className="text-base leading-relaxed font-semibold mt-10 mb-4" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
            Why Choose GEP Network?
          </p>
          <ul className="space-y-4 mb-8">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-3 text-base" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)', fontWeight: 500 }}>
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5" style={{ background: 'var(--gep-accent)' }} aria-hidden />
                <span>
                  <span className="font-semibold" style={{ color: 'var(--gep-text)' }}>
                    {item.title}:
                  </span>{' '}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
          <BodyText>
            Partner with GEP Network for your next festival production and elevate your event to new heights of success. Contact us today to discuss your festival vision and let us make it a reality.
          </BodyText>
        </RevealGroup>
      </SectionWrap>

      <ServicePageFooter excludeSlug="festival-production" />
    </>
  )
}
