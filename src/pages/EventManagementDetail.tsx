import type { CSSProperties } from 'react'
import { ServicePageFooter } from '../components/ServicePageFooter'
import { TypewriterHero } from '../components/TypewriterHero'
import { Breadcrumbs } from '../components/Breadcrumbs'
import {
  AccentLinkButton,
  BodyText,
  FullWidthPhoto,
  GoldRule,
  SectionProse,
  SectionWrap,
  SideBySideCopy,
  SideBySidePhoto,
  SideBySideRow,
} from '../components/PageChrome'
import { Reveal, RevealGroup } from '../components/Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const HERO_PHRASES = [{ lead: 'We do ', accent: 'Event Management' }] as const

/** Production action shot — technical crew on site (stock). */
const PRODUCTION_ACTION_IMG = '/em-img-6.jpg'

const INTRO_LEAD = `Welcome to GEP Network, your trusted partner in event management with years of experience in delivering exceptional events.

Navigating the world of Event Management can be overwhelming, especially when trying to identify the specific services needed to bring a successful event to market. For the sake of clarity, let us pinpoint the fundamental differences between Event Production and Event Management.`

const COMPARE_PRODUCTION =
  'Event Production focuses on the technical aspects and creative aspects of bringing an event to life, such as designing and building stages, implementing lighting, sound, video, pyro, special effects, power, and "back of the house" tasks. This includes handling technical staffing needs and working to create immersive atmospheres.'

const COMPARE_MANAGEMENT =
  'EVENT MANAGEMENT on the other hand deals with logistical planning, coordination with vendors, kiosks, suppliers, and budget management. It also involves enhancing attendee experiences and coordinating on-site non-technical staff. Event Management connects the dots of the entire event by working with all departments both in the front-of the-house and back-of-the-house to create a cohesive event and experience for all involved, including the attendees.'

const PROCESS_INTRO =
  'As expert event managers, GEP Network offers a comprehensive process that address all aspects of your event management needs:'

const MANAGEMENT_STEPS: { title: string; body: string }[] = [
  { title: 'Theme Development', body: 'Creating and implementing thematic concepts for the event.' },
  {
    title: 'Logistics Planning',
    body: 'Developing comprehensive plans for scheduling, venue selection, and resource allocation.',
  },
  {
    title: 'Vendor and Supplier Coordination',
    body: 'Liaising with vendors and suppliers to secure necessary resources.',
  },
  {
    title: 'Budget Management',
    body: 'Creating and managing budgets to keep all expenses within specified financial constraints.',
  },
  {
    title: 'Risk Assessment and Safety Planning',
    body: 'Identifying potential risks and hazards associated with the event and implementing measures to mitigate them.',
  },
  {
    title: 'Crisis Management',
    body: 'Developing contingency plans and protocols for handling emergencies or disruptions during the event.',
  },
  {
    title: 'Marketing and Promotion',
    body: 'Developing comprehensive marketing strategies to promote the event.',
  },
  {
    title: 'Sponsorship and Partnerships',
    body: "Securing sponsorships and partnerships to enhance the event's offerings.",
  },
  {
    title: 'Registration and Ticketing',
    body: 'Setting up and managing registration processes, ticket sales, and attendee databases.',
  },
  {
    title: 'Attendee Experience Enhancement',
    body: 'Designing strategies to enhance the overall experience of event attendees.',
  },
  {
    title: 'Guest Services',
    body: 'Providing concierge services for VIP guests, speakers, performers, sponsors, and other stakeholders.',
  },
  {
    title: 'Technical and Production Oversight',
    body: 'Overseeing technical aspects, including audiovisual setup, stage management, and coordination with performers and production crews.',
  },
  {
    title: 'On-Site Staff Coordination',
    body: 'Recruiting, training, and managing event staff and volunteers for smooth execution.',
  },
  {
    title: 'Environmental Sustainability',
    body: 'Implementing eco-friendly practices and initiatives during the event.',
  },
  {
    title: 'Legal and Compliance',
    body: 'Ensuring compliance with legal and regulatory requirements for the event.',
  },
  {
    title: 'Post-Event Analysis and Reporting',
    body: 'Collecting feedback and evaluating the success of the event, identifying areas for improvement in future events.',
  },
]

const CLOSING_BODY =
  'At GEP Network, we are committed to delivering exceptional event management services that exceed your expectations and ensure the success of your events. Let us handle the details while you focus on creating memorable experiences for your attendees.'

const bodyMuted: CSSProperties = {
  fontFamily: FONT_BODY,
  color: 'var(--gep-text-muted)',
  fontWeight: 500,
}

function CompareDivider() {
  return <div className="my-8 h-px w-full" style={{ background: 'var(--gep-divider)' }} aria-hidden />
}

function OrderedStep({ index, title, body }: { index: number; title: string; body: string }) {
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

function StepList({ items, startIndex }: { items: { title: string; body: string }[]; startIndex: number }) {
  return (
    <ol className="gep-compact-steps list-none p-0 m-0">
      {items.map((item, i) => (
        <OrderedStep key={item.title} index={startIndex + i} title={item.title} body={item.body} />
      ))}
    </ol>
  )
}

export default function EventManagementDetail() {
  const stepsA = MANAGEMENT_STEPS.slice(0, 5)
  const stepsB = MANAGEMENT_STEPS.slice(5, 10)
  const stepsC = MANAGEMENT_STEPS.slice(10, 16)

  return (
    <>
      <TypewriterHero
        image="/em-img-1.png"
        phrases={HERO_PHRASES}
        imagePosition="50% top"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Event Management & Promotions' },
            ]}
          />
        }
      />

      <SectionWrap>
        <SideBySideRow className="mb-10">
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <RevealGroup direction="fade" step={55}>
                <h2
                  className="uppercase leading-tight mb-4"
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontWeight: DISPLAY_TITLE_WEIGHT,
                    fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
                    color: 'var(--gep-text)',
                  }}
                >
                  Event Production vs EVENT MANAGEMENT
                </h2>
                <BodyText className="whitespace-pre-line">{INTRO_LEAD}</BodyText>
                <BodyText className="!mb-0">{COMPARE_PRODUCTION}</BodyText>
              </RevealGroup>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <SideBySidePhoto fillHeight src={PRODUCTION_ACTION_IMG} alt="Live event production on stage" />
          </Reveal>
        </SideBySideRow>

        <SectionProse>
          <CompareDivider />
          <Reveal direction="fade">
            <BodyText className="!mb-0">{COMPARE_MANAGEMENT}</BodyText>
          </Reveal>
        </SectionProse>
      </SectionWrap>

      <FullWidthPhoto src="/em-img-2.png" alt="Festival production with pyrotechnics" maxHeight="none" />

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
            Event Management, The Right Way
          </h2>
        </RevealGroup>

        <SideBySideRow className="mb-12">
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <RevealGroup direction="fade" step={55}>
                <BodyText className="mb-4">{PROCESS_INTRO}</BodyText>
                <StepList items={stepsA} startIndex={1} />
              </RevealGroup>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <SideBySidePhoto fillHeight src="/em-img-3.jpg" alt="Event planning and strategy session" />
          </Reveal>
        </SideBySideRow>

        <SideBySideRow className="mb-12">
          <Reveal direction="left" className="order-2 lg:order-1 h-full">
            <SideBySidePhoto fillHeight src="/em-img-4.jpg" alt="On-site event coordination" />
          </Reveal>
          <Reveal direction="right" delay={120} className="order-1 lg:order-2 h-full">
            <SideBySideCopy>
              <Reveal direction="fade">
                <StepList items={stepsB} startIndex={6} />
              </Reveal>
            </SideBySideCopy>
          </Reveal>
        </SideBySideRow>

        <SideBySideRow className="mb-16">
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <Reveal direction="fade">
                <StepList items={stepsC} startIndex={11} />
              </Reveal>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <SideBySidePhoto fillHeight src="/em-img-5.jpg" alt="Event budgeting and reporting" />
          </Reveal>
        </SideBySideRow>

        <SectionProse className="pt-8 border-t" style={{ borderColor: 'var(--gep-divider)' }}>
          <RevealGroup direction="fade" step={55}>
          <h2
            className="uppercase leading-tight mb-4"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--gep-text)',
            }}
          >
            Let&apos;s Make it Magical
          </h2>
          <BodyText className="mb-8">{CLOSING_BODY}</BodyText>
          <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
          </RevealGroup>
        </SectionProse>
      </SectionWrap>

      <ServicePageFooter excludeSlug="event-management" />
    </>
  )
}
