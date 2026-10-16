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

const HERO_PHRASES = [{ lead: 'We do ', accent: 'Tour Pulls and Tour Storage' }] as const

const STORAGE_ADDRESS = '1390 Business Center Dr SW, Conyers, GA 30094'
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(STORAGE_ADDRESS)}&z=14&output=embed`

const INTRO_BODY =
  'At GEP Network, our storage solutions are designed with the unique needs of the entertainment industry in mind. From tour pulls and equipment storage to long-term warehousing needs, we offer flexible, secure, and easily accessible storage services. Our commitment is to provide peace of mind with a storage solution that is as reliable as it is convenient.'

const LOCATION_BODY =
  'Strategically situated at the heart of the logistics hub, our storage facilities offer unparalleled access to major transportation networks. Just minutes from downtown and major highways, GEP Network ensures that your storage needs are covered with 24/7 availability, facilitating easy pickups and deliveries by appointment to match the non-stop pace of the entertainment world.'

const DOCK_BODY =
  'Our state-of-the-art warehouse is equipped with loading docks that accommodate any size of tour trucks, making the loading and unloading of your event equipment a seamless process. The integration of high-capacity storage with efficient dock access means that your gear is always show-ready.'

const COMMERCIAL_BODY =
  'Secure and spacious, our commercial equipment storage services are tailored to protect and house your valuable gear. From lighting rigs to sound systems, we ensure your equipment is safeguarded against the elements and ready for your next big event.'

const BULK_BODY =
  'Our bulk storage solutions are perfect for managing large quantities of event materials. With expansive space and organized logistics, we handle everything from merchandise to staging equipment, ensuring your items are stored safely and can be accessed whenever needed.'

const LONG_TERM_BODY =
  'For productions that require extended storage between events or tours, our long-term storage options provide the perfect solution. Our facilities are designed to accommodate and protect your assets for as long as necessary, giving you the flexibility to plan your events without the constraint of space.'

const SHORT_TERM_BODY =
  "GEP Network offers short-term storage solutions that are ideal for the fast-paced nature of event production. Whether it's for a few days or several weeks, we provide the space you need with the convenience and flexibility your schedule demands."

const COMMITMENT_INTRO =
  'Our commitment at GEP Network goes beyond just offering space. We provide a full suite of services to ensure your storage needs are met with the highest standards:'

const COMMITMENT_ITEMS = [
  {
    title: '24/7 Facility Access',
    body: 'Gain entry to your stored items on your schedule, ensuring that you can move to the rhythm of event timelines.',
  },
  {
    title: 'Advanced Security',
    body: 'Rest easy knowing your equipment is under the watchful eyes of our security systems, including CCTV monitoring and coded access.',
  },
  {
    title: 'Versatile Storage Options',
    body: 'From pallet racks to square footage tailored to your requirements, we adapt our space to fit your needs.',
  },
  {
    title: 'Equipment Support',
    body: 'Available forklifts, pallet jacks, and hand dollies facilitate the easy organization and transfer of your materials.',
  },
  {
    title: 'Flexible Payment Options',
    body: 'We accept a variety of payment methods, making business with us straightforward and hassle-free.',
  },
] as const

const CLOSING =
  'Choose GEP Network for storage solutions that harmonize with the demands of your events. Our team is dedicated to supporting the success of your productions with services that are as reliable as they are accommodating.'

const bodyMuted: CSSProperties = {
  fontFamily: FONT_BODY,
  color: 'var(--gep-text-muted)',
  fontWeight: 500,
}

function Subheading({ children, className = '' }: { children: string; className?: string }) {
  return (
    <p
      className={`text-base leading-relaxed font-semibold ${className}`}
      style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}
    >
      {children}
    </p>
  )
}

function StorageMap() {
  return (
    <div className="gep-map-embed" style={{ background: 'var(--gep-card)' }}>
      <iframe
        title="GEP Network storage facility location"
        src={MAP_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export default function TourPullsTourStorageDetail() {
  return (
    <>
      <TypewriterHero
        image="/ts-img-1.jpg"
        phrases={HERO_PHRASES}
        imagePosition="50% 45%"
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Tour Pulls & Tour Storage' },
            ]}
          />
        }
      />

      <SectionWrap>
        <SectionProse className="mb-12">
          <RevealGroup direction="fade" step={55}>
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-4"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'var(--gep-text)',
              }}
            >
              Storage Solutions
            </h2>
            <Subheading className="mb-4">Secure, Accessible, and Customized Storage Services</Subheading>
            <BodyText>{INTRO_BODY}</BodyText>
          </RevealGroup>
        </SectionProse>

        <SideBySideRow>
          <Reveal direction="left" className="h-full">
            <SideBySideCopy>
              <Subheading className="mb-2">Convenient Location &amp; Availability</Subheading>
              <BodyText className="mb-4">{LOCATION_BODY}</BodyText>
              <Subheading className="mb-2">Warehouse Storage With Loading Dock</Subheading>
              <BodyText className="!mb-0">{DOCK_BODY}</BodyText>
            </SideBySideCopy>
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <StorageMap />
          </Reveal>
        </SideBySideRow>
      </SectionWrap>

      <FullWidthPhoto src="/ts-img-2.jpg" alt="Warehouse loading docks" maxHeight="none" />

      <SectionWrap alt>
        <SectionProse className="mb-10">
          <RevealGroup direction="fade" step={55}>
            <Subheading className="mb-3">Commercial Equipment Storage</Subheading>
            <BodyText className="mb-8">{COMMERCIAL_BODY}</BodyText>
            <Subheading className="mb-3">Bulk Storage Solutions</Subheading>
            <BodyText>{BULK_BODY}</BodyText>
          </RevealGroup>
        </SectionProse>

        <SideBySideRow className="mb-12">
          <Reveal direction="left" className="h-full">
            <SideBySidePhoto fillHeight src="/ts-img-3.jpg" alt="Forklift moving equipment in warehouse" />
          </Reveal>
          <Reveal direction="right" delay={120} className="h-full">
            <SideBySideCopy>
              <Subheading className="mb-2">Long-Term Storage</Subheading>
              <BodyText className="mb-4">{LONG_TERM_BODY}</BodyText>
              <Subheading className="mb-2">Short-Term Storage</Subheading>
              <BodyText className="!mb-0">{SHORT_TERM_BODY}</BodyText>
            </SideBySideCopy>
          </Reveal>
        </SideBySideRow>

        <Reveal direction="up">
          <SectionProse>
            <BodyText className="mb-6">{COMMITMENT_INTRO}</BodyText>
            <ul className="space-y-4 mb-8">
              {COMMITMENT_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-base" style={bodyMuted}>
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
            <BodyText className="mb-8">{CLOSING}</BodyText>
            <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
          </SectionProse>
        </Reveal>
      </SectionWrap>

      <FullWidthPhoto src="/ts-img-4.png" alt="Tour equipment road cases in storage" maxHeight="none" />

      <ServicePageFooter excludeSlug="tour-pulls-and-tour-storage" />
    </>
  )
}
