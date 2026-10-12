import { Link } from 'react-router-dom'
import { ClientPartnersSection } from '../components/ClientPartnersSection'
import { BodyText, CtaBand, FullWidthPhoto, GoldRule, PageHero, SectionWrap, SideBySidePhoto } from '../components/PageChrome'
import { TeamSocialOverlay } from '../components/Motion'
import { Reveal } from '../components/Reveal'
import { TEAM } from '../content/team'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY, GEP_FULL_NAME } from '../site'

const MISSION_IMG = '/recent-projects/roots-picnic-2026.jpg'
const STORY_IMG = '/gep-service-stage-management.png'
const ABOUT_BANNER = '/gep-service-production-coordination.png'
const ABOUT_GALLERY = [
  '/recent-projects/jcole-fall-off-tour.jpg',
  '/recent-projects/rolling-loud-2026.png',
  '/recent-projects/essence-festival-george-clinton-2026.jpg',
  '/recent-projects/lyrical-lemonade-summer-smash-2026.png',
] as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Us"
        subtitle="We are more than an event production company — we are visionaries, collaborators, and innovators crafting unforgettable live experiences."
        image="/gep-why-gep-team.jpg"
      />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
          <Reveal direction="left">
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-6"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--gep-text)',
              }}
            >
              Our Mission
            </h2>
            <BodyText>
              At {GEP_FULL_NAME}, our mission is simple: to bring your event’s vision to life with unmatched expertise,
              creativity, and precision. Whether it’s a concert tour, festival, corporate event, or beyond, we are
              dedicated to exceeding expectations and delivering extraordinary results.
            </BodyText>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src={MISSION_IMG} alt="Festival production" />
          </Reveal>
        </div>
      </SectionWrap>

      <FullWidthPhoto src={ABOUT_BANNER} alt="Sound engineer at the mixing console" maxHeight="min(65vh, 480px)" />

      <SectionWrap alt>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
          <Reveal direction="left">
            <SideBySidePhoto src={STORY_IMG} alt="Stage and production" />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-6"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--gep-text)',
              }}
            >
              Our Story
            </h2>
            <BodyText>
              Founded by veteran production manager Victor Reed, GEP Network has become synonymous with excellence in
              event production and management. With over 40 years of experience in the industry, Victor’s vision and
              leadership have propelled GEP Network to the forefront of the entertainment world.
            </BodyText>
          </Reveal>
        </div>
      </SectionWrap>

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
            Production in Motion
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {ABOUT_GALLERY.map((src, i) => (
            <Reveal key={src} direction="up" delay={i * 70}>
              <img src={src} alt="" className="w-full aspect-[4/3] object-cover" />
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap id="ourteam" alt>
        <Reveal direction="up">
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-4"
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: DISPLAY_TITLE_WEIGHT,
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--gep-text)',
            }}
          >
            Our Team
          </h2>
          <BodyText className="max-w-2xl mb-12">
            The people behind the productions — operators, creatives, and road veterans who keep shows moving at the
            highest level.
          </BodyText>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <Reveal key={member.slug} direction="up" delay={(i % 3) * 90}>
              <Link
                to={`/team/${member.slug}`}
                className="team-card group block overflow-hidden"
                style={{ background: 'var(--gep-card)' }}
              >
                <div className="team-card-media relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: member.photoPosition ?? 'center top' }}
                  />
                  <TeamSocialOverlay />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(23,20,15,0.85) 0%, transparent 55%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 pointer-events-none">
                    <h3
                      className="text-white uppercase leading-tight"
                      style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.35rem' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[11px] tracking-widest uppercase mt-1 text-white/70 font-medium" style={{ fontFamily: FONT_BODY }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4 font-medium" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                    {member.summary}
                  </p>
                  <span
                    className="text-xs tracking-widest uppercase font-semibold"
                    style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <ClientPartnersSection />
      <CtaBand />
    </>
  )
}
