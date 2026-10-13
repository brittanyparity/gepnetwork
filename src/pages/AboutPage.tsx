import { Link } from 'react-router-dom'
import { AboutTypewriterHero } from '../components/AboutTypewriterHero'
import { ClientPartnersSection } from '../components/ClientPartnersSection'
import { BodyText, FullWidthPhoto, GoldRule, SectionWrap, SideBySidePhoto } from '../components/PageChrome'
import { TeamSocialOverlay } from '../components/Motion'
import { Reveal } from '../components/Reveal'
import { TEAM } from '../content/team'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const ABOUT_HERO_IMG = '/about-page-hero.jpg'
const ABOUT_INTRO_IMG = '/about-text-section.png'
const ABOUT_BAND_IMG = '/about-section-max-width.jpg'
const OUR_STORY_IMG = '/our-story-text-section.png'
/** Festival stock — full-bleed behind Our Team tiles */
const TEAM_SECTION_BG = '/recent-projects/rolling-loud-2026.png'

const ABOUT_TEAM = TEAM.filter((member) => member.slug !== 'donna-burns')

const ABOUT_US_P1 =
  'At GEP Network, we are more than just an event production and management company - we are visionaries, collaborators, and innovators. with a rich history of crafting unforgettable experiences and a commitment to excellence that is unrivaled, we stand as a beacon of creativity and professionalism in the entertainment industry.'

const ABOUT_US_P2 =
  "Our mission is simple to bring your event's vision to life with unmatched expertise, creativity, and precision. Whether it's a concert tour, festival, corporate event, or beyond, we are dedicated to exceeding expectations and delivering extraordinary results that leave a lasting impression on audiences worldwide."

const OUR_STORY_BODY =
  "Founded by veteran production manager Victor Reed, GEP Network has become synonymous with excellence in event production and management. With over 40 years of experience in the industry, Victor's vision and leadership have propelled GEP Network to the forefront of the entertainment world, earning the trust and admiration of clients and colleagues alike."

const TEAM_INTRO =
  'At GEP Network, we are more than just an event production and management company - we are visionaries, collaborators, and innovators. With a rich history of crafting unforgettable experiences and a commitment to excellence that is unrivaled, we stand as a beacon of creativity and professionalism in the entertainment industry.'

export default function AboutPage() {
  return (
    <>
      <AboutTypewriterHero image={ABOUT_HERO_IMG} />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-center">
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
              About Us
            </h2>
            <BodyText className="mb-6">{ABOUT_US_P1}</BodyText>
            <BodyText>{ABOUT_US_P2}</BodyText>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src={ABOUT_INTRO_IMG} alt="Live event production" />
          </Reveal>
        </div>
      </SectionWrap>

      <FullWidthPhoto src={ABOUT_BAND_IMG} alt="Live event production" maxHeight="none" />

      <SectionWrap alt>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl items-center">
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
              Our Story
            </h2>
            <BodyText>{OUR_STORY_BODY}</BodyText>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SideBySidePhoto src={OUR_STORY_IMG} alt="Stage crew building a production" />
          </Reveal>
        </div>
      </SectionWrap>

      <section id="ourteam" className="relative overflow-hidden py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <img src={TEAM_SECTION_BG} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 gep-about-team-section__wash" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal direction="up">
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-4 text-white"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              }}
            >
              Our Team
            </h2>
            <p
              className="text-base leading-relaxed font-normal max-w-3xl mb-12"
              style={{ fontFamily: FONT_BODY, color: 'rgba(255, 255, 255, 0.82)', fontWeight: 500 }}
            >
              {TEAM_INTRO}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_TEAM.map((member, i) => (
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
        </div>
      </section>

      <ClientPartnersSection layout="about" />
    </>
  )
}
