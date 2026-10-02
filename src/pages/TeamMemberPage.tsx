import { Link, Navigate, useParams } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { DEFAULT_TEAM_SOCIAL, SocialRow, TeamSocialOverlay } from '../components/Motion'
import { Reveal } from '../components/Reveal'
import { getTeamMember, TEAM } from '../content/team'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function TeamMemberPage() {
  const { slug } = useParams()
  const member = slug ? getTeamMember(slug) : undefined
  if (!member) return <Navigate to="/about" replace />

  const others = TEAM.filter((m) => m.slug !== member.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={member.name}
        subtitle={member.role}
        image={member.img}
        portrait
      />

      <SectionWrap>
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <Reveal direction="left">
            <aside className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                  Experience
                </p>
                <p className="text-lg font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                  {member.experience}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                  Specialization
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                  {member.specialization}
                </p>
              </div>
              {member.stats?.length ? (
                <div className="grid grid-cols-2 gap-3">
                  {member.stats.map((s, i) => (
                    <Reveal key={s.label} direction="up" delay={i * 80}>
                      <div className="p-4" style={{ background: 'var(--gep-card)' }}>
                        <p
                          className="text-2xl uppercase leading-none mb-2"
                          style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: 'var(--gep-accent)' }}
                        >
                          {s.value}
                        </p>
                        <p className="text-[10px] tracking-wider uppercase" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                          {s.label}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : null}
              <div className="space-y-1">
                <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="block text-sm" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                  {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className="block text-sm" style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}>
                  {member.email}
                </a>
              </div>
              <SocialRow links={DEFAULT_TEAM_SOCIAL} />
            </aside>
          </Reveal>

          <Reveal direction="right" delay={100}>
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
                {member.aboutTitle}
              </h2>
              <BodyText className="mb-8">{member.summary}</BodyText>
              <div className="space-y-8">
                {member.sections.map((section, i) => (
                  <Reveal key={section.heading} direction="up" delay={i * 90}>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                      {section.heading}
                    </h3>
                    <BodyText>{section.body}</BodyText>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10">
                <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrap>

      <SectionWrap alt>
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
            Other Team Members
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((m, i) => (
            <Reveal key={m.slug} direction="up" delay={i * 90}>
              <Link
                to={`/team/${m.slug}`}
                className="team-card group block overflow-hidden"
                style={{ background: 'var(--gep-card)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="team-photo absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: m.photoPosition ?? 'center top' }}
                  />
                  <TeamSocialOverlay />
                </div>
                <div className="p-4">
                  <h3
                    className="uppercase"
                    style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.15rem', color: 'var(--gep-text)' }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-xs mt-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
                    {m.role}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={200}>
          <div className="mt-8">
            <Link to="/about#ourteam" className="text-xs tracking-widest uppercase font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}>
              View full team →
            </Link>
          </div>
        </Reveal>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
