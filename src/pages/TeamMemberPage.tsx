import { Link, Navigate, useParams } from 'react-router-dom'
import { AccentLinkButton, BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { getTeamMember, TEAM } from '../content/team'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

export default function TeamMemberPage() {
  const { slug } = useParams()
  const member = slug ? getTeamMember(slug) : undefined
  if (!member) return <Navigate to="/about" replace />

  const others = TEAM.filter((m) => m.slug !== member.slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Our Team" title={member.name} subtitle={member.role} image={member.img} />

      <SectionWrap>
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
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
                {member.stats.map((s) => (
                  <div key={s.label} className="p-4" style={{ background: 'var(--gep-card)' }}>
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
          </aside>

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
              {member.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                    {section.heading}
                  </h3>
                  <BodyText>{section.body}</BodyText>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <AccentLinkButton to="/contact">Contact Us</AccentLinkButton>
            </div>
          </div>
        </div>
      </SectionWrap>

      <SectionWrap alt>
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
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((m) => (
            <Link
              key={m.slug}
              to={`/team/${m.slug}`}
              className="block overflow-hidden"
              style={{ background: 'var(--gep-card)' }}
            >
              <div className="relative aspect-[4/3]">
                <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
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
          ))}
        </div>
        <div className="mt-8">
          <Link to="/about#ourteam" className="text-xs tracking-widest uppercase font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}>
            View full team →
          </Link>
        </div>
      </SectionWrap>

      <CtaBand />
    </>
  )
}
