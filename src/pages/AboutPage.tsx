import { Link } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { TEAM } from '../content/team'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY, GEP_FULL_NAME } from '../site'

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
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </SectionWrap>

      <SectionWrap id="ourteam" alt>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              className="group block overflow-hidden"
              style={{ background: 'var(--gep-card)' }}
            >
              <div className="team-card-media relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-photo absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: member.photoPosition ?? 'center top' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(23,20,15,0.85) 0%, transparent 55%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
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
          ))}
        </div>
      </SectionWrap>

      <CtaBand title="We've served hundreds of notable clients & partners" />
    </>
  )
}
