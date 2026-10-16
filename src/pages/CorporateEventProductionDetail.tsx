import type { CSSProperties } from 'react'
import { ServicePageFooter } from '../components/ServicePageFooter'
import { TypewriterHero } from '../components/TypewriterHero'
import { Breadcrumbs } from '../components/Breadcrumbs'
import {
  BodyText,
  FullWidthPhoto,
  GoldRule,
  SectionProse,
  SectionWrap,
  SideBySideCopy,
  SideBySidePhoto,
  SideBySideRow,
  StackedSidePhotos,
} from '../components/PageChrome'
import { Reveal, RevealGroup } from '../components/Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const HERO_PHRASES = [{ lead: 'We do ', accent: 'Corporate Event Production' }] as const

const INTRO_P1 =
  'Corporate events are pivotal moments for businesses and brands, offering opportunities for networking, brand building, client engagement, and product promotion. At GEP Network, we specialize in delivering exceptional corporate event productions that captivate audiences, leave a lasting impression, and achieve your business objectives.'

const INTRO_P2 =
  'Corporate event production is distinct from other types of events due to its strategic focus on delivering professional experiences tailored to the unique needs of businesses. Unlike concerts or festivals that entertain audiences, corporate events are meticulously planned to align with corporate goals, values, and messaging.'

const PROCESS_INTRO = 'Our team recognizes the critical aspects that set corporate events apart:'

const PROCESS_ITEMS: { title: string; body: string }[] = [
  {
    title: 'Professionalism',
    body: "Corporate events demand a high level of professionalism in all aspects, from planning and execution to presentation and communication. Our experienced team ensures that every detail reflects your brand's image and values.",
  },
  {
    title: 'Objective-Driven',
    body: "Each corporate event has specific objectives, whether it's to launch a new product, celebrate achievements, foster networking, or strengthen client relationships. We tailor our production approach to meet these objectives and deliver measurable results.",
  },
  {
    title: 'Audience Engagement',
    body: 'Engaging attendees and creating meaningful interactions are central to the success of corporate events. We incorporate interactive elements, immersive experiences, and engaging content to keep your audience captivated throughout the event.',
  },
  {
    title: 'Technology Integration',
    body: 'Corporate events often require advanced technology solutions, such as LED video walls, projection systems, lighting design, audio setups, and digital displays. We leverage cutting-edge technology to enhance the overall event experience and create impactful presentations.',
  },
]

const CAPABILITIES_P1 =
  'GEP Network offers a comprehensive range of services to meet all your corporate event production needs:'

const CAPABILITY_ITEMS: { title: string; body: string }[] = [
  {
    title: 'Event Planning',
    body: 'We work closely with you to understand your objectives, audience, and messaging to develop a strategic event plan that aligns with your goals.',
  },
  {
    title: 'Production Design',
    body: 'Our team of creative professionals designs visually stunning sets, stages, and environments that reflect your brand identity and create a memorable atmosphere.',
  },
  {
    title: 'Audiovisual Solutions',
    body: 'We provide state-of-the-art audiovisual equipment, including LED video walls, projection systems, professional lighting, sound reinforcement, and technical support to ensure flawless presentations.',
  },
  {
    title: 'Stage Management',
    body: 'Our experienced stage managers oversee all technical aspects, cue transitions, manage rehearsals, and coordinate with performers and presenters for a seamless event flow.',
  },
  {
    title: 'Interactive Experiences',
    body: 'We incorporate interactive technologies, digital displays, and engagement tools to create interactive experiences that captivate and involve your audience.',
  },
  {
    title: 'Logistics and Coordination',
    body: 'From venue selection and logistics planning to vendor management and on-site coordination, we handle all logistical aspects to ensure a smooth and successful event.',
  },
]

const bodyMuted: CSSProperties = {
  fontFamily: FONT_BODY,
  color: 'var(--gep-text-muted)',
  fontWeight: 500,
}

function SectionHeading({ children }: { children: string }) {
  return (
    <p className="text-base leading-relaxed font-semibold mb-4" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
      {children}
    </p>
  )
}

function OrderedServiceItem({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <li className="gep-ordered-step flex gap-4">
      <span
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-semibold tabular-nums"
        style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
        aria-hidden
      >
        {index}
      </span>
      <p className="text-base leading-relaxed pt-0.5" style={bodyMuted}>
        <span className="font-semibold" style={{ color: 'var(--gep-text)' }}>
          {title}:
        </span>{' '}
        {body}
      </p>
    </li>
  )
}

export default function CorporateEventProductionDetail() {
  return (
    <>
      <TypewriterHero
        image="/ce-img-1.jpg"
        phrases={HERO_PHRASES}
        imagePosition="50% 40%"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Corporate Event Production' },
            ]}
          />
        }
      />

      <SectionWrap>
        <SideBySideRow>
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <BodyText className="mb-4">{INTRO_P1}</BodyText>
              <SectionHeading>Understanding Corporate Event Production</SectionHeading>
              <BodyText className="!mb-0">{INTRO_P2}</BodyText>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <SideBySidePhoto fillHeight src="/ce-img-2.jpg" alt="Corporate conference audience" />
          </Reveal>
        </SideBySideRow>
      </SectionWrap>

      <FullWidthPhoto src="/ce-img-3.png" alt="LED wall at corporate venue" maxHeight="none" />

      <SectionWrap alt>
        <RevealGroup direction="fade" step={55} className="mb-10">
          <GoldRule />
          <h2
            className="uppercase leading-tight"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              color: 'var(--gep-text)',
            }}
          >
            Trust the Process
          </h2>
        </RevealGroup>

        <SideBySideRow>
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <BodyText className="mb-4">{PROCESS_INTRO}</BodyText>
              <ol className="gep-compact-steps list-none p-0 m-0">
                {PROCESS_ITEMS.map((item, i) => (
                  <OrderedServiceItem key={item.title} index={i + 1} title={item.title} body={item.body} />
                ))}
              </ol>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <StackedSidePhotos>
              <SideBySidePhoto fillHeight src="/ce-img-4.jpg" alt="Arena stage production setup" />
              <SideBySidePhoto fillHeight src="/ce-img-5.jpg" alt="Corporate panel discussion" />
            </StackedSidePhotos>
          </Reveal>
        </SideBySideRow>
      </SectionWrap>

      <FullWidthPhoto src="/ce-img-6.jpeg" alt="Large-scale corporate gala" maxHeight="none" />

      <SectionWrap>
        <SectionProse>
          <RevealGroup direction="fade" step={55}>
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
              Corporate Event Production Capabilities
            </h2>
            <SectionHeading>Our Comprehensive Capabilities</SectionHeading>
            <BodyText className="mb-8">{CAPABILITIES_P1}</BodyText>
            <ol className="space-y-6 list-none p-0 m-0">
              {CAPABILITY_ITEMS.map((item, i) => (
                <OrderedServiceItem key={item.title} index={i + 1} title={item.title} body={item.body} />
              ))}
            </ol>
          </RevealGroup>
        </SectionProse>
      </SectionWrap>

      <ServicePageFooter excludeSlug="corporate-event-production" />
    </>
  )
}
