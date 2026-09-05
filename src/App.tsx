import { useState, useEffect, type CSSProperties, type FormEvent } from 'react'
import liveNationColor from './imports/live-nation-logo-color.png'
import liveNationWhite from './imports/live-nation-logo-white.png'
import aegPresentsColor from './imports/aeg-presents-logo-color.png'
import aegPresentsWhite from './imports/aeg-presents-logo-white.png'
import betColor from './imports/BET-logo-color.png'
import betWhite from './imports/BET-logo-white.png'
import rocNationColor from './imports/rocnation-logo-color.png'
import rocNationWhite from './imports/rocnation-logo-white.png'
import atlanticRecordsColor from './imports/atlantic-records-logo-color.png'
import atlanticRecordsWhite from './imports/atlantic-records-logo-white.png'
import defJamColor from './imports/def-jam-logo-color.png'
import defJamWhite from './imports/def-jam-logo-white.png'
import universalMusicColor from './imports/universal-music-logo-color.png'
import universalMusicWhite from './imports/universal-music-logo-white.png'
import warnerMusicColor from './imports/warner-music-logo-color.png'
import warnerMusicWhite from './imports/warner-music-logo-white.png'
import sonyMusicColor from './imports/sony-music-logo-color.png'
import sonyMusicWhite from './imports/sony-music-logo-white.png'
import republicRecordsColor from './imports/republic-records-logo-color.svg'
import republicRecordsWhite from './imports/republic-records-logo-white.png'

const GEP_LOGO = '/gep-logo.png'
const HERO_VIDEO = '/gep-hero-video.mp4'

const LIGHT_COLOR_SCHEMES = new Set(['navy-gold-light', 'light-slate'])

type ColorScheme = {
  id: string
  name: string
  vars: Record<string, string>
}

const COLOR_SCHEMES: ColorScheme[] = [
  {
    id: 'navy-gold-light',
    name: 'Classic Light',
    vars: {
      '--gep-bg': '#F5F5F7',
      '--gep-bg-alt': '#FFFFFF',
      '--gep-card': '#FFFFFF',
      '--gep-footer': 'linear-gradient(180deg, #000000 0%, #000032 100%)',
      '--gep-accent': '#FFC52F',
      '--gep-accent-text': '#000032',
      '--gep-header-scrolled': 'rgba(0,0,50,0.97)',
      '--gep-overlay-top': 'rgba(0,0,50,0.50)',
      '--gep-overlay-mid': 'rgba(0,0,50,0.40)',
      '--gep-overlay-bottom': 'rgba(0,0,50,0.85)',
      '--gep-card-overlay': 'rgba(0,0,50,0.78)',
      '--gep-staffing-overlay': 'rgba(0,0,50,0.68)',
      '--gep-text': '#1D1D1F',
      '--gep-text-muted': '#6E6E73',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(0,0,0,0.08)',
      '--gep-hero-word': '#FFC52F',
    },
  },
  {
    id: 'classic',
    name: 'Classic Dark',
    vars: {
      '--gep-bg': '#000032',
      '--gep-bg-alt': '#000040',
      '--gep-card': '#00003e',
      '--gep-footer': 'linear-gradient(180deg, #000000 0%, #000032 100%)',
      '--gep-accent': '#FFC52F',
      '--gep-accent-text': '#000032',
      '--gep-header-scrolled': 'rgba(0,0,64,0.97)',
      '--gep-overlay-top': 'rgba(0,0,64,0.55)',
      '--gep-overlay-mid': 'rgba(0,0,64,0.45)',
      '--gep-overlay-bottom': 'rgba(0,0,64,0.88)',
      '--gep-card-overlay': 'rgba(0,0,64,0.92)',
      '--gep-staffing-overlay': 'rgba(0,0,50,0.75)',
      '--gep-text': '#ffffff',
      '--gep-text-muted': 'rgba(255,255,255,0.6)',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0) invert(1)',
      '--gep-divider': 'rgba(255,255,255,0.07)',
      '--gep-hero-word': '#FFC52F',
    },
  },
  {
    id: 'light-slate',
    name: 'Platinum Light',
    vars: {
      '--gep-bg': '#FFFFFF',
      '--gep-bg-alt': '#F5F5F7',
      '--gep-card': '#F5F5F7',
      '--gep-footer': 'linear-gradient(180deg, #000000 0%, #000032 100%)',
      '--gep-accent': '#FFC52F',
      '--gep-accent-text': '#000032',
      '--gep-header-scrolled': 'rgba(0,0,0,0.93)',
      '--gep-overlay-top': 'rgba(0,0,0,0.45)',
      '--gep-overlay-mid': 'rgba(0,0,0,0.38)',
      '--gep-overlay-bottom': 'rgba(0,0,0,0.78)',
      '--gep-card-overlay': 'rgba(0,0,0,0.72)',
      '--gep-staffing-overlay': 'rgba(0,0,0,0.62)',
      '--gep-text': '#1D1D1F',
      '--gep-text-muted': '#6E6E73',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(0,0,0,0.08)',
      '--gep-hero-word': '#FFC52F',
    },
  },
  {
    id: 'platinum',
    name: 'Platinum Dark',
    vars: {
      '--gep-bg': '#0f0f12',
      '--gep-bg-alt': '#1a1a1f',
      '--gep-card': '#222228',
      '--gep-footer': 'linear-gradient(180deg, #000000 0%, #000032 100%)',
      '--gep-accent': '#FFC52F',
      '--gep-accent-text': '#000032',
      '--gep-header-scrolled': 'rgba(15,15,18,0.97)',
      '--gep-overlay-top': 'rgba(15,15,18,0.55)',
      '--gep-overlay-mid': 'rgba(15,15,18,0.45)',
      '--gep-overlay-bottom': 'rgba(15,15,18,0.88)',
      '--gep-card-overlay': 'rgba(15,15,18,0.92)',
      '--gep-staffing-overlay': 'rgba(15,15,18,0.75)',
      '--gep-text': '#ffffff',
      '--gep-text-muted': 'rgba(255,255,255,0.6)',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0) invert(1)',
      '--gep-divider': 'rgba(255,255,255,0.07)',
      '--gep-hero-word': '#FFC52F',
    },
  },
]

// ─── Images ────────────────────────────────────────────────────────────────
const HERO_IMG = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop&auto=format'
const CONCERT1 = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop&auto=format'
const CONCERT2 = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop&auto=format'
const CONCERT3 = 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=500&fit=crop&auto=format'
const CONCERT4 = 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=800&h=500&fit=crop&auto=format'
const CONCERT5 = 'https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?w=800&h=500&fit=crop&auto=format'
const WAREHOUSE1 = 'https://images.unsplash.com/photo-1758789667762-56175fe4601c?w=700&h=500&fit=crop&auto=format'
const WAREHOUSE2 = 'https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=700&h=500&fit=crop&auto=format'
const WAREHOUSE3 = 'https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?w=700&h=500&fit=crop&auto=format'
const STAGE_BG = 'https://images.unsplash.com/photo-1558620013-a08999547a36?w=1920&h=900&fit=crop&auto=format'

// ─── Data ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  {label: 'Home', href: '#'}, 
  {label: 'About Us', href: '#about'}, 
  {label: 'Services', href: '#services'}, 
  {label: 'Storage', href: '#storage'}, 
  {label: 'Events', href: '#events'}, 
  {label: 'Contact Us', href: '#contact'}, 
]


const PRODUCTIONS = [
  { name: 'Roots Picnic 2026', img: CONCERT1, type: 'Festival' },
  { name: 'Rolling Loud 2026', img: CONCERT2, type: 'Festival' },
  { name: 'J. Cole: The Fall Off Tour', img: CONCERT3, type: 'Tour' },
  { name: 'Playboi Carti: Antagonist Tour', img: CONCERT4, type: 'Tour' },
  { name: 'Don Toliver: Nitrous Tour', img: CONCERT5, type: 'Tour' },
  { name: 'Mary J. Blige: The For My Fans Tour', img: CONCERT1, type: 'Tour' },
  { name: 'Jill Scott: To Whom This May Concern Tour', img: CONCERT2, type: 'Tour' },
  { name: 'Kendrick Lamar: GNX Tour', img: CONCERT3, type: 'Tour' },
  { name: 'Nicki Minaj: Pink Friday 2 World Tour', img: CONCERT4, type: 'Tour' },
]

const SERVICES = [
  {
    title: 'Production Management',
    icon: '◈',
    desc: 'End-to-end oversight of live productions — from pre-production planning through load-out. We coordinate every moving part so your show runs flawlessly.',
    img: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Production Coordinator',
    icon: '◉',
    desc: 'On-the-ground coordination between departments, vendors, and talent. Our coordinators are the connective tissue of any successful production.',
    img: 'https://images.unsplash.com/photo-1565035010268-a3816f98589a?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Event Management',
    icon: '◎',
    desc: 'Full-scale event operations for concerts, festivals, and corporate experiences — from site logistics to day-of execution.',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Artist Services',
    icon: '◇',
    desc: 'Dedicated support for artists and their touring teams. Riders, hospitality, scheduling — we keep talent comfortable and focused.',
    img: 'https://images.unsplash.com/photo-1567401893254-7f81c89a619c?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Stage Management',
    icon: '▣',
    desc: 'Precise cue-to-cue stage management with experienced crew who have worked the biggest shows in the industry.',
    img: 'https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Travel Logistics',
    icon: '◆',
    desc: 'Ground transportation, hotel blocks, and movement logistics for crew and talent — nationwide and internationally.',
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Tour Storage',
    icon: '▤',
    desc: 'Secure, climate-appropriate storage for touring equipment between legs — in our dedicated facility near major venue corridors.',
    img: 'https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Design Services',
    icon: '◐',
    desc: 'Creative production design support — stage layouts, sight-line planning, and visual concept development in collaboration with your team.',
    img: 'https://images.unsplash.com/photo-1599739291060-4578e77dac5d?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Merch',
    icon: '◫',
    desc: 'Tour and event merchandise programs — sourcing, inventory management, on-site sales operations, and fulfillment logistics.',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Artist Booking',
    icon: '◑',
    desc: 'Talent booking and routing support — connecting artists with the right venues, dates, and production teams for successful engagements.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Pre-Production Development',
    icon: '◧',
    desc: 'Concept-to-call-sheet planning — budgets, schedules, vendor coordination, and technical design before the first load-in.',
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Post-Production Development',
    icon: '◨',
    desc: 'Wrap-out support including content capture coordination, asset archiving, settlement documentation, and debrief reporting.',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Tour & Event Consultation',
    icon: '◩',
    desc: 'Strategic advisory for tours, festivals, and one-off events — feasibility studies, risk assessment, and operational roadmaps.',
    img: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=500&fit=crop&auto=format',
  },
  {
    title: 'Budget Development',
    icon: '◪',
    desc: 'Detailed production budgets built from real-world touring data — line-item accuracy, contingency planning, and vendor cost modeling.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop&auto=format',
  },
]

const STORAGE_FEATURES = [
  {
    title: 'Multi-Dock Access',
    desc: 'Multiple loading bays for fast, efficient gear movement — in and out without delay.',
    img: WAREHOUSE1,
  },
  {
    title: 'Music Industry Expertise',
    desc: "Our team understands touring equipment. We've stored it, moved it, and protected it for 40+ years.",
    img: WAREHOUSE2,
  },
  {
    title: 'Courteous Service',
    desc: 'Professional, responsive staff who treat your gear with the same care you do.',
    img: WAREHOUSE3,
  },
]

const CLIENTS = [
  { name: 'Live Nation', colorLogo: liveNationColor, whiteLogo: liveNationWhite },
  { name: 'AEG Presents', colorLogo: aegPresentsColor, whiteLogo: aegPresentsWhite },
  { name: 'BET', colorLogo: betColor, whiteLogo: betWhite },
  { name: 'Roc Nation', colorLogo: rocNationColor, whiteLogo: rocNationWhite },
  { name: 'Atlantic Records', colorLogo: atlanticRecordsColor, whiteLogo: atlanticRecordsWhite },
  { name: 'Def Jam', colorLogo: defJamColor, whiteLogo: defJamWhite },
  { name: 'Universal Music', colorLogo: universalMusicColor, whiteLogo: universalMusicWhite },
  { name: 'Warner Music', colorLogo: warnerMusicColor, whiteLogo: warnerMusicWhite },
  { name: 'Sony Music', colorLogo: sonyMusicColor, whiteLogo: sonyMusicWhite },
  { name: 'Republic Records', colorLogo: republicRecordsColor, whiteLogo: republicRecordsWhite },
]

const STAFFING_ROLES = [
  'Production Managers',
  'Production Coordinators',
  'FOH & Monitor Engineers',
  'Tour & Venue Security',
  'Video Techs',
  'Stage Managers',
  'Carpenters & Stage Hands',
  'Sound & Audio Techs',
  'Backline Techs',
  'Catering Specialists',
  'Bus & Truck Drivers',
]

const TESTIMONIALS = [
  {
    quote: "GEP delivered a flawless production from start to finish. Their team anticipated every need before we even had to ask.",
    author: 'Marcus T.',
    title: 'Tour Manager, Live Nation',
  },
  {
    quote: "After 15 years of working together, GEP is still the first call I make when a tour is going out. Unmatched reliability.",
    author: 'Denise W.',
    title: 'Production Director, AEG Presents',
  },
  {
    quote: "The storage facility and logistics team made our multi-leg festival season completely seamless. Couldn't have done it without them.",
    author: 'Kevin R.',
    title: 'Festival Operations, Rolling Loud',
  },
  {
    quote: "GEP's coordinators are the best in the business — calm under pressure, solutions-first, always two steps ahead.",
    author: 'Sandra L.',
    title: 'Artist Manager',
  },
]

// ─── Sub-components ─────────────────────────────────────────────────────────

function GoldRule() {
  return <div className="w-12 h-px mb-6" style={{ background: 'var(--gep-accent)' }} />
}

function ColorSchemePicker({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  const isLightScheme = value === 'navy-gold-light' || value === 'light-slate'
  const chevronColor = isLightScheme ? '1D1D1F' : 'ffffff'

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <label htmlFor="color-scheme" className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--gep-text-muted)' }}>
        Color Scheme
      </label>
      <select
        id="color-scheme"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2.5 text-xs tracking-wide border cursor-pointer appearance-none pr-8"
        style={{
          background: 'var(--gep-card)',
          color: 'var(--gep-text)',
          borderColor: 'rgba(128,128,128,0.25)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23${chevronColor}' fill-opacity='0.5' d='M3 5l3 3 3-3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
        }}
      >
        {COLOR_SCHEMES.map((scheme) => (
          <option key={scheme.id} value={scheme.id} style={{ background: 'var(--gep-bg)', color: 'var(--gep-text)' }}>
            {scheme.name}
          </option>
        ))}
      </select>
    </div>
  )
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--gep-header-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(128,128,128,0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src={GEP_LOGO}
            alt="GEP Network"
            className="h-12 w-auto object-contain"
            style={{ filter: 'var(--gep-logo-filter)' }}
          />
        </a>

        {/* Desktop Nav + Call — grouped and right-aligned */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-100"
                style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.65)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:8774376381"
            className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'var(--gep-accent)',
              color: 'var(--gep-accent-text)',
            }}
          >
            877-437-6381
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#ffffff' }} />
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#ffffff' }} />
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#ffffff' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden" style={{ borderTop: '1px solid var(--gep-divider)', background: 'var(--gep-bg)' }}>
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-widest uppercase transition-colors"
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8774376381"
              className="mt-2 px-5 py-3 text-xs tracking-widest uppercase font-semibold text-center"
              style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: 'Inter, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              877-437-6381
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gep-bg)' }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_IMG}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
        <img src={HERO_IMG} alt="Live concert stage production" className="absolute inset-0 w-full h-full object-cover" />
      </video>
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--gep-overlay-top) 0%, var(--gep-overlay-mid) 50%, var(--gep-overlay-bottom) 100%)',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-hero-word, var(--gep-accent))' }}>
          Full-Service Live Event Production
        </p>
        <h1
          className="text-white uppercase leading-none mb-6"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
          }}
        >
          Production<br />
          <span style={{ color: 'var(--gep-hero-word, var(--gep-accent))' }}>Without</span> Limits
        </h1>
        <p className="text-white/60 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          GEP Network executes concerts, tours, festivals, and corporate events at the highest level — backed by 40+ years of industry expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 hover:border-white/50 hover:text-white"
            style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <span className="text-white text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
      </div>
    </section>
  )
}

function RecentProjectsCarousel() {
  const [paused, setPaused] = useState(false)
  const marqueeItems = [...PRODUCTIONS, ...PRODUCTIONS]

  return (
    <section id="events" className="py-24 overflow-hidden" style={{ background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <GoldRule />
        <h2
          className="uppercase leading-none"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
        >
          Recent Projects
        </h2>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 animate-marquee w-max"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {marqueeItems.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href="#events"
              className="flex-shrink-0 relative group overflow-hidden block"
              style={{ width: 280, height: 370, background: 'var(--gep-card)' }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ background: 'linear-gradient(to top, var(--gep-card-overlay) 0%, rgba(0,0,64,0.2) 60%, transparent 100%)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--gep-accent)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent)' }}>{p.type}</p>
                <h3
                  className="text-white uppercase leading-tight"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.02em' }}
                >
                  {p.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyGEP() {
  return (
    <section
    id="about"  
    className="relative py-28 overflow-hidden"
      style={{ background: 'var(--gep-bg-alt)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <GoldRule />
          <h2
            className="uppercase leading-tight mb-8"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
          >
            Why GEP<br />Is the Right Choice
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
            For over four decades, GEP Network has been the production partner that the live entertainment industry turns to when execution matters most. We don't just staff shows — we build the infrastructure that makes them legendary.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
            From 30,000-seat arenas to international festivals, our coordinators, managers, and crew are embedded in your production from first call to final load-out. We know the business because we've lived it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-semibold hover:gap-5 transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent)' }}
          >
            Start a Conversation <span className="text-lg leading-none">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "var(--gep-divider)" }}>
          {[
            { n: '40+', l: 'Years in Business' },
            { n: '500+', l: 'Productions Executed' },
            { n: '50+', l: 'Active Crew Members' },
            { n: '100%', l: 'Client Retention Rate' },
          ].map((s) => (
            <div key={s.l} className="p-10 flex flex-col justify-end" style={{ background: 'var(--gep-bg-alt)' }}>
              <div
                className="uppercase leading-none mb-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '3.5rem', color: 'var(--gep-accent)' }}
              >
                {s.n}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  return (
    <section id="services" className="py-24" style={{ background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4">
          <h2
            className="uppercase leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
          >
            What We Do
          </h2>
          <p className="text-sm max-w-xs" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
            Hover a card to learn more. Full-spectrum production services, one point of contact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="flip-card cursor-pointer"
              style={{ height: 320, perspective: '1000px' }}
            >
              <div className="flip-card-inner">

                {/* Front */}
                <div className="flip-card-front overflow-hidden" style={{ background: 'var(--gep-card)' }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    style={{ height: '75%' }}
                  />
                  <div
                    className="flex items-center justify-center px-4"
                    style={{ height: '25%', background: 'var(--gep-card)' }}
                  >
                    <h3
                      className="uppercase text-center leading-tight"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.06em', color: 'var(--gep-text)' }}
                    >
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back flex flex-col items-center justify-center p-8 text-center"
                  style={{ background: 'var(--gep-accent)' }}
                >
                  <div
                    className="text-3xl mb-5"
                    style={{ color: 'var(--gep-accent-text)' }}
                  >
                    {svc.icon}
                  </div>
                  <h3
                    className="uppercase mb-4 leading-tight"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.06em', color: 'var(--gep-accent-text)' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent-text)', opacity: 0.85 }}
                  >
                    {svc.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StorageInquiryModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 text-sm focus:outline-none transition-colors'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-8 lg:p-10"
        style={{ background: 'var(--gep-card)', border: '1px solid var(--gep-divider)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl leading-none transition-colors"
          style={{ color: 'var(--gep-text-muted)' }}
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div
              className="w-12 h-12 mx-auto mb-5 flex items-center justify-center text-2xl"
              style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)' }}
            >
              ✓
            </div>
            <h3
              className="uppercase mb-3"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: 'var(--gep-text)' }}
            >
              Inquiry Received
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
              Thank you for your interest in GEP tour storage. Our team will review your request and respond within one business day.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 text-xs tracking-widest uppercase font-semibold"
              style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: 'Inter, sans-serif' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <GoldRule />
            <h3
              className="uppercase mb-2"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: 'var(--gep-text)' }}
            >
              Storage Inquiry
            </h3>
            <p className="text-sm mb-8" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
              Tell us about your storage needs and we will follow up with availability and pricing.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company / Tour"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Describe your storage needs — gear type, duration, estimated volume... *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
              />
              <button
                type="submit"
                className="mt-2 px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: 'Inter, sans-serif' }}
              >
                Submit Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function StorageSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm && <StorageInquiryModal onClose={() => setShowForm(false)} />}
      <section id="storage" className="py-24" style={{ background: 'var(--gep-bg-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4">
          <h2
            className="uppercase leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
          >
            Tour Storage
          </h2>
          <p className="text-sm max-w-xs" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>
            Secure, accessible storage built for the music industry — not general warehousing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {STORAGE_FEATURES.map((f) => (
            <div key={f.title} className="relative group overflow-hidden" style={{ height: 380, background: 'var(--gep-card)' }}>
              <img
                src={f.img}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,64,0.95) 0%, rgba(0,0,64,0.5) 55%, rgba(0,0,64,0.25) 100%)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'var(--gep-accent)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="text-white uppercase mb-2 leading-tight"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.03em' }}
                >
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-block px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{
              fontFamily: 'Inter, sans-serif',
              borderColor: 'var(--gep-accent)',
              color: 'var(--gep-accent)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gep-accent)'
              e.currentTarget.style.color = 'var(--gep-accent-text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gep-accent)'
            }}
          >
            Inquire About Storage
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

function ClientLogoWall({ colorScheme }: { colorScheme: string }) {
  const useColorLogos = LIGHT_COLOR_SCHEMES.has(colorScheme)

  return (
    <section className="py-20" style={{ borderTop: '1px solid var(--gep-divider)', borderBottom: '1px solid var(--gep-divider)', background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p
          className="text-xs tracking-[0.3em] uppercase text-center mb-12"
          style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}
        >
          Trusted by the Industry's Best
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center py-8 px-8 group transition-colors duration-200"
              style={{ minHeight: 96, background: 'var(--gep-bg)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gep-card)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gep-bg)' }}
            >
              <img
                src={useColorLogos ? client.colorLogo : client.whiteLogo}
                alt={client.name}
                className="max-h-8 w-auto object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductionStaffing() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: 'var(--gep-bg)' }}
    >
      {/* Background image */}
      <img
        src={STAGE_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--gep-staffing-overlay)' }} />

      <div className="relative max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <div className="flex justify-center">
          <GoldRule />
        </div>
        <h2
          className="text-white uppercase leading-tight mb-6"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
        >
          Production Staffing
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-14 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          We provide experienced, vetted production personnel across every discipline — ready to deploy nationwide on short notice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-md mx-auto">
          {STAFFING_ROLES.map((role) => (
            <div
              key={role}
              className="flex items-center justify-center sm:justify-start gap-3 px-2 py-2 hover:bg-white/03 transition-colors duration-200 group"
            >
              <span className="w-1 h-1 rounded-full flex-shrink-0 group-hover:w-2 transition-all duration-200" style={{ background: 'var(--gep-accent)' }} />
              <span
                className="text-white/70 group-hover:text-white text-sm transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {role}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center sm:justify-end px-2 py-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold hover:gap-4 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent)' }}
            >
              Learn More <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section className="py-24" style={{ background: 'var(--gep-bg-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-16"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
        >
          What They're Saying
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote card */}
          <div className="p-10 lg:p-14 relative overflow-hidden" style={{ border: '1px solid var(--gep-divider)', background: 'var(--gep-card)' }}>
            <div
              className="absolute top-10 left-10 leading-none select-none"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '6rem', opacity: 0.15, lineHeight: 0.7, color: 'var(--gep-accent)' }}
            >
              "
            </div>
            <blockquote key={active} className="relative z-10 animate-fade-up">
              <p
                className="text-lg lg:text-2xl leading-relaxed mb-8 max-w-3xl"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'var(--gep-text)' }}
              >
                "{TESTIMONIALS[active].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px" style={{ background: 'var(--gep-accent)' }} />
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text)' }}>{TESTIMONIALS[active].author}</p>
                  <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-text-muted)' }}>{TESTIMONIALS[active].title}</p>
                </div>
              </div>
            </blockquote>
          </div>

          {/* Nav dots */}
          <div className="flex gap-3 mt-6 justify-end">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-200"
                style={{
                  width: i === active ? 24 : 8,
                  height: 3,
                  background: i === active ? 'var(--gep-accent)' : 'var(--gep-divider)',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ClientCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--gep-accent)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent-text)', opacity: 0.55 }}>
            Partner With GEP
          </p>
          <h2
            className="uppercase leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-accent-text)' }}
          >
            Ready to Produce<br />Your Next Event?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-sm max-w-xs text-center sm:text-right" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--gep-accent-text)', opacity: 0.65 }}>
            From arena tours to festival seasons — let's build something unforgettable together.
          </p>
          <a
            href="tel:8774376381"
            className="flex-shrink-0 px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-opacity hover:opacity-90"
            style={{ fontFamily: 'Inter, sans-serif', background: 'var(--gep-accent-text)', color: 'var(--gep-accent)' }}
          >
            877-437-6381
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'var(--gep-footer)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={GEP_LOGO}
              alt="GEP Network"
              className="h-12 w-auto object-contain mb-4"
              style={{ filter: 'var(--gep-logo-filter)' }}
            />
            <p className="text-white/35 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Full-service live event production. 40+ years of experience. Global reach.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { name: 'Instagram', href: 'https://instagram.com/gepnetwork' },
                { name: 'Facebook', href: 'https://facebook.com/gepnetwork' },
                { name: 'LinkedIn', href: 'https://linkedin.com/company/gepnetwork' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-[color:var(--gep-accent)] text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>Navigate</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>General</p>
                <a href="mailto:admin@gepnetwork.com" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  admin@gepnetwork.com
                </a>
              </div>
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Bookings</p>
                <a href="mailto:bookings@gepnetwork.com" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  bookings@gepnetwork.com
                </a>
              </div>
            </div>
          </div>

          {/* Address + Phone */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
            <address className="not-italic text-white/50 text-sm leading-loose mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              1390 Business Ctr Dr. SW<br />
              Ste 200 - 300<br />
              Conyers, GA 30094
            </address>
            <a href="tel:8774376381" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              877-437-6381
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-white/20 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} GEP Network, Inc. All rights reserved.
          </p>
          <p className="text-white/15 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            Full-Service Live Event Production
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [colorScheme, setColorScheme] = useState('navy-gold-light')
  const scheme = COLOR_SCHEMES.find((s) => s.id === colorScheme) ?? COLOR_SCHEMES[0]

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ ...scheme.vars, background: 'var(--gep-bg)', color: 'var(--gep-text)' } as CSSProperties}
    >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <ClientLogoWall colorScheme={colorScheme} />
      <RecentProjectsCarousel />
      <WhyGEP />
      <ServicesGrid />
      <StorageSection />
      <ProductionStaffing />
      <Testimonials />
      <ClientCTA />
      <Footer />
      <ColorSchemePicker value={colorScheme} onChange={setColorScheme} />
    </div>
  )
}
