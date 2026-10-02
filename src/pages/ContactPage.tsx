import { useState, type FormEvent } from 'react'
import { BodyText, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { Reveal } from '../components/Reveal'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const CONTACT_BLOCKS = [
  {
    title: 'Production',
    lines: ['GEP NETWORK, LLC', 'Victor Reed – Prod. Mgr.', '877-437-6381', 'admin@gepnetwork.com'],
  },
  {
    title: 'Bookings',
    lines: ['Belinda Pervall', 'Direct: 404-454-8416', 'Office: 877-437-6381', 'bookings@gepnetwork.com'],
  },
  {
    title: 'Storage',
    lines: ['1390 Business Ctr Dr. SW', 'Ste 200 – 300', 'Conyers, GA 30094', '877-437-6381'],
  },
  {
    title: 'Management & Promotions',
    lines: ['Belinda Pervall — 404-454-8416', 'Chico Chapman — 404-585-1038', 'Office: 877-437-6381'],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full px-4 py-3 text-sm focus:outline-none'
  const inputStyle = {
    fontFamily: FONT_BODY,
    background: 'var(--gep-bg)',
    color: 'var(--gep-text)',
    border: '1px solid var(--gep-divider)',
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Reach production, bookings, storage, or promotions — or send us a message and we’ll follow up."
      />

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-14">
          <Reveal direction="left">
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-8"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--gep-text)',
              }}
            >
              Direct Contacts
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {CONTACT_BLOCKS.map((block, i) => (
                <Reveal key={block.title} direction="up" delay={i * 70}>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase mb-3"
                    style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
                  >
                    {block.title}
                  </p>
                  {block.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
                      {line}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <GoldRule />
            <h2
              className="uppercase leading-tight mb-4"
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: DISPLAY_TITLE_WEIGHT,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: 'var(--gep-text)',
              }}
            >
              Send Us a Message
            </h2>
            <BodyText className="mb-8">Tell us about your production needs and the right team member will respond.</BodyText>

            {submitted ? (
              <div className="p-8" style={{ background: 'var(--gep-card)' }}>
                <h3
                  className="uppercase mb-3"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.5rem', color: 'var(--gep-text)' }}
                >
                  Message Received
                </h3>
                <BodyText>Thank you — our team will get back to you shortly.</BodyText>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Company / Tour"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help? *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
                <button
                  type="submit"
                  className="mt-2 px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
                  style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </SectionWrap>
    </>
  )
}
