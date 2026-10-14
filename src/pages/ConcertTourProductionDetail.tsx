import { ServicePageFooter } from '../components/ServicePageFooter'
import { TypewriterHero } from '../components/TypewriterHero'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { BodyText, FullWidthPhoto, GoldRule, SectionWrap, SideBySidePhoto } from '../components/PageChrome'
import { Reveal } from '../components/Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const HERO_PHRASES = [{ lead: 'We Do ', accent: 'Concerts and Tour Production' }] as const

const INTRO_P1 =
  'GEP Network is a leading provider of comprehensive tour production services, specializing in producing and executing concert tours of all sizes and complexities. With decades of experience and a dedicated team of industry professionals, we offer a wide range of services to ensure the success of every tour.'

const INTRO_CLIENT_HISTORY =
  'With a roster of past and present clients that include iconic artists such as Mary J. Blige, Nicki Minaj, Kendrick Lamar, and Earth, Wind & Fire, as well as ongoing working relationships with top-tier promoters like Live Nation, AEG, and the Black Promoters Collective, GEP Network has a proven track record of success in concert tour production. Our extensive experience and long-standing relationships speak to our commitment to excellence and our ability to deliver outstanding results, no matter the scale or scope of the project.'

const PROCESS_INTRO =
  'Our production process cover every aspect of planning, coordination, and execution required to bring a concert tour to life. From initial conceptualization to post-tour wrap-up, we handle all aspects of tour production with precision and expertise.'

const PROCESS_STEPS: { title: string; body: string }[] = [
  {
    title: 'Tour Planning and Objectives',
    body: 'We collaborate closely with tour organizers to understand their vision, goals, and logistical requirements. From technical rider fulfillment to rehearsals, our experienced team ensures timely and budget-friendly execution. Our team then leverages our extensive industry experience and network of contacts to craft customized solutions tailored to each tour’s unique needs.',
  },
  {
    title: 'Logistics Planning and Coordination',
    body: 'As the tour dates approach, meticulous logistics planning is crucial. This involves tour routing, technical analysis of venues, and travel coordination, as well as transportation, accommodations, and scheduling to optimize efficiency and minimize downtime. Additionally, it encompasses production vendor selection and contracting, covering aspects such as trucking, busing, catering, sound, lighting, and more.',
  },
  {
    title: 'Production Vendor Selection and Contracting',
    body: 'Production elements such as stage design, lighting, sound, and special effects are carefully orchestrated to create an immersive concert experience. We collaborate with technical crews, designers, and vendors to bring the tour’s creative vision to life while adhering to budgetary constraints and safety regulations.',
  },
  {
    title: 'Creative Production Orchestration',
    body: 'Throughout the tour, our team provides ongoing management and coordination to address any challenges or logistical issues that may arise. This includes overseeing day-to-day operations, managing crew members, troubleshooting technical issues, and ensuring the overall success of each tour stop.',
  },
  {
    title: 'Ongoing Tour Production and Coordination',
    body: 'We handle every aspect of tour execution, allowing our clients to focus on delivering unforgettable performances and creating lasting memories for their fans. This includes all aspects of technical event production, including LED video, projection, lighting, audio, DJ equipment, laser projection, and special effects. We work closely with lighting and tour show designers to deliver sustainable production for the entire tour.',
  },
  {
    title: 'Post-Tour Activities and Evaluation',
    body: 'Finally, post-tour activities such as settlement, budget reconciliation, and performance evaluation allow us to assess the tour’s performance, identify areas for improvement, and lay the groundwork for future tours.',
  },
]

const PRODUCTION_SERVICES = [
  'Production Management',
  'Stage Management',
  'Audio & Sound Production',
  'Production Coordination',
  'Creative & Show Design',
  'Venue Conceptualization',
  'Video Services',
  'Stage Construction & Rigging',
  'Lighting Design',
  'Expert Budgeting/Settlement',
  'Barricade Setup & Takedown',
  'Permitting & Insurance',
  'Pyro & Special Effects',
  'Expert Budgeting/Settlement',
  'Hospitality/Back of House Coordination',
] as const

const STAFFING_ITEMS = [
  'Production Managers',
  'Stage Managers',
  'Production Coordinators',
  'FOH & Monitor Engineers',
  'Audio Staff/Techs',
  'Backline Staff/Techs',
  'Carpenters',
  'Hospitality Coordinators',
  'Lighting Directors/Designers',
  'Lighting Staff/Techs',
  'Video Staff/Tech',
  'Stage Hands',
  'Carpenters',
  'Riggers',
  'Spotlight Operators',
  'Caterers',
  'Tour Security',
  'Glam Staff (Hair, Makeup, Wardrobe)',
  'Bus & Truck Drivers',
  'Pyro & Special Effects Techs',
  'Automation Staff/Techs',
  'Camera Operators',
] as const

const STAFFING_INTRO =
  'In addition to our tour production services, we offer comprehensive staffing solutions for concert tours. From music directors and stage managers to security personnel and caterers, we provide skilled professionals and trusted vendors to support every aspect of your tour.'

const CLOSING =
  'Ready to take your concert tour to the next level with GEP Network’s tour production services? Contact us today to discuss your tour requirements and discover how we can bring your vision to life.'

function ProcessStep({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-sm font-semibold"
        style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
      >
        {index}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
          {title}
        </h3>
        <BodyText>{body}</BodyText>
      </div>
    </div>
  )
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <Reveal key={`${item}-${i}`} as="li" direction="up" delay={(i % 6) * 40}>
          <span className="flex items-start gap-3 text-base" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
            <span className="flex-shrink-0 mt-0.5 text-sm font-bold" style={{ color: 'var(--gep-accent)' }} aria-hidden>
              ✓
            </span>
            {item}
          </span>
        </Reveal>
      ))}
    </ul>
  )
}

export default function ConcertTourProductionDetail() {
  const stepsA = PROCESS_STEPS.slice(0, 3)
  const stepsB = PROCESS_STEPS.slice(3, 6)

  return (
    <>
      <TypewriterHero
        image="/c-p-hero.png"
        phrases={HERO_PHRASES}
        imagePosition="50% top"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Concert & Tour Production' },
            ]}
          />
        }
      />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-start">
          <Reveal direction="left">
            <BodyText className="mb-6">{INTRO_P1}</BodyText>
            <p className="text-base leading-relaxed font-normal" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)', fontWeight: 500 }}>
              <span className="font-semibold" style={{ color: 'var(--gep-text)' }}>
                Client Base/History:{' '}
              </span>
              {INTRO_CLIENT_HISTORY}
            </p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src="/c-p-text-section.png" alt="Tour production on site" />
          </Reveal>
        </div>
      </SectionWrap>

      <FullWidthPhoto src="/c-p-max-width.png" alt="Concert production" maxHeight="none" />

      <SectionWrap alt>
        <Reveal direction="up">
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
            Trust the Process
          </h2>
          <BodyText className="max-w-4xl mb-12">{PROCESS_INTRO}</BodyText>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-8">
            {stepsA.map((step, i) => (
              <Reveal key={step.title} direction="left" delay={i * 80}>
                <ProcessStep index={i + 1} title={step.title} body={step.body} />
              </Reveal>
            ))}
          </div>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src="/process-1.jpg" alt="Tour logistics planning" className="aspect-[3/4] lg:aspect-auto lg:min-h-[480px]" />
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal direction="left" className="order-2 lg:order-1">
            <SideBySidePhoto src="/process-2.jpg" alt="Live concert production" className="aspect-[3/4] lg:aspect-auto lg:min-h-[480px]" />
          </Reveal>
          <div className="space-y-8 order-1 lg:order-2">
            {stepsB.map((step, i) => (
              <Reveal key={step.title} direction="right" delay={i * 80}>
                <ProcessStep index={i + 4} title={step.title} body={step.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrap>

      <FullWidthPhoto src="/c-p-max-width-2.png" alt="Arena tour production" maxHeight="none" />

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
            Summary of Production Services
          </h2>
        </Reveal>
        <CheckList items={PRODUCTION_SERVICES} />

        <Reveal direction="up">
          <h2
            className="uppercase leading-tight mt-16 mb-6"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--gep-text)',
            }}
          >
            Staffing & Vendor Procurement
          </h2>
          <BodyText className="max-w-3xl mb-8">{STAFFING_INTRO}</BodyText>
        </Reveal>
        <CheckList items={STAFFING_ITEMS} />
        <Reveal direction="up">
          <BodyText className="max-w-3xl mt-12">{CLOSING}</BodyText>
        </Reveal>
      </SectionWrap>

      <ServicePageFooter excludeSlug="concert-and-tour-production" />
    </>
  )
}
