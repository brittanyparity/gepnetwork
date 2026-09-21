import { useState, useEffect, type CSSProperties, type FormEvent } from 'react'
import liveNationColor from './imports/live-nation-logo-color.png'
import liveNationWhite from './imports/live-nation-logo-white.png'
import aegPresentsColor from './imports/aeg-presents-logo-color.png'
import aegPresentsWhite from './imports/aeg-presents-logo-white.png'
import betColor from './imports/BET-logo-color.png'
import betWhite from './imports/BET-logo-white.png'
import rocNationColor from './imports/roc-nation-logo-color.png'
import rocNationWhite from './imports/roc-nation-logo-white.png'
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
import GEPLogoLockup, { GEPAbbrevGlobeMark } from './components/GepGlobeMark'
import { LOGO_LOCKUPS, type LogoLockupId } from './logo-lockups'
import { SITE_LAYOUTS, type SiteLayoutId } from './site-layouts'

const HERO_VIDEO = '/gep-hero-video.mp4'

const LIGHT_COLOR_SCHEMES = new Set(['light-slate', 'bone-light', 'bone-dark'])

type ColorScheme = {
  id: string
  name: string
  vars: Record<string, string>
}

const COLOR_SCHEMES: ColorScheme[] = [
  {
    id: 'bone-light',
    name: 'Bone Light',
    vars: {
      '--gep-bg': '#F8F5F0',
      '--gep-bg-alt': '#F3EFE8',
      '--gep-card': '#ECE6DC',
      '--gep-footer': 'linear-gradient(180deg, #5C5348 0%, #7A7064 100%)',
      '--gep-accent': '#B44A18',
      '--gep-accent-text': '#F8F5F0',
      '--gep-header-scrolled': 'rgba(107, 99, 88, 0.68)',
      '--gep-overlay-top': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-mid': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-bottom': 'rgba(0, 0, 0, 0.10)',
      '--gep-card-overlay': 'rgba(107, 99, 88, 0.72)',
      '--gep-staffing-overlay': 'linear-gradient(to bottom, rgba(0, 0, 50, 0.8) 0%, rgba(0, 0, 62, 0.72) 100%)',
      '--gep-text': '#17140F',
      '--gep-text-muted': '#7A7064',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(23, 20, 15, 0.12)',
      '--gep-hero-word': '#B44A18',
      '--gep-hero-kicker': '#F8F5F0',
      '--gep-why-gep-overlay': 'linear-gradient(105deg, rgba(23, 20, 15, 0.78) 0%, rgba(23, 20, 15, 0.42) 50%, rgba(23, 20, 15, 0.32) 100%)',
      '--gep-storage-overlay': 'linear-gradient(to top, rgba(92, 83, 72, 0.78) 0%, rgba(140, 130, 118, 0.4) 55%, rgba(92, 83, 72, 0.16) 100%)',
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
      '--gep-overlay-top': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-mid': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-bottom': 'rgba(0, 0, 0, 0.10)',
      '--gep-card-overlay': 'rgba(0,0,0,0.72)',
      '--gep-staffing-overlay': 'linear-gradient(to bottom, rgba(0, 0, 50, 0.8) 0%, rgba(0, 0, 62, 0.72) 100%)',
      '--gep-text': '#1D1D1F',
      '--gep-text-muted': '#6E6E73',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(0,0,0,0.08)',
      '--gep-hero-word': '#FFC52F',
      '--gep-hero-kicker': '#F5F5F0',
      '--gep-why-gep-overlay': 'linear-gradient(105deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0.36) 100%)',
      '--gep-storage-overlay': 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.48) 55%, rgba(0,0,0,0.22) 100%)',
    },
  },
  {
    id: 'bone-dark',
    name: 'Bone Dark',
    vars: {
      '--gep-bg': '#F3EFE8',
      '--gep-bg-alt': '#E4DDD2',
      '--gep-card': '#E4DDD2',
      '--gep-footer': 'linear-gradient(180deg, #17140F 0%, #2A2218 100%)',
      '--gep-accent': '#B44A18',
      '--gep-accent-text': '#F8F5F0',
      '--gep-header-scrolled': 'rgba(23, 20, 15, 0.72)',
      '--gep-overlay-top': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-mid': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-bottom': 'rgba(0, 0, 0, 0.10)',
      '--gep-card-overlay': 'rgba(23, 20, 15, 0.78)',
      '--gep-staffing-overlay': 'linear-gradient(to bottom, rgba(0, 0, 50, 0.8) 0%, rgba(0, 0, 62, 0.72) 100%)',
      '--gep-text': '#17140F',
      '--gep-text-muted': '#6B6358',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(23, 20, 15, 0.16)',
      '--gep-hero-word': '#B44A18',
      '--gep-hero-kicker': '#F8F5F0',
      '--gep-why-gep-overlay': 'linear-gradient(105deg, rgba(23, 20, 15, 0.8) 0%, rgba(23, 20, 15, 0.44) 50%, rgba(23, 20, 15, 0.34) 100%)',
      '--gep-storage-overlay': 'linear-gradient(to top, rgba(45, 40, 34, 0.86) 0%, rgba(107, 99, 88, 0.46) 55%, rgba(45, 40, 34, 0.2) 100%)',
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
      '--gep-overlay-top': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-mid': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-bottom': 'rgba(0, 0, 0, 0.10)',
      '--gep-card-overlay': 'rgba(15,15,18,0.92)',
      '--gep-staffing-overlay': 'linear-gradient(to bottom, rgba(0, 0, 50, 0.8) 0%, rgba(0, 0, 62, 0.72) 100%)',
      '--gep-text': '#ffffff',
      '--gep-text-muted': 'rgba(255,255,255,0.6)',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0) invert(1)',
      '--gep-divider': 'rgba(255,255,255,0.07)',
      '--gep-hero-word': '#FFC52F',
      '--gep-hero-kicker': '#F5F3F0',
      '--gep-why-gep-overlay': 'linear-gradient(105deg, rgba(15, 15, 18, 0.85) 0%, rgba(15, 15, 18, 0.5) 50%, rgba(15, 15, 18, 0.38) 100%)',
      '--gep-storage-overlay': 'linear-gradient(to top, rgba(15,15,18,0.92) 0%, rgba(15,15,18,0.52) 55%, rgba(15,15,18,0.26) 100%)',
    },
  },
]

// ─── Images ────────────────────────────────────────────────────────────────
const HERO_IMG = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop&auto=format'
const WAREHOUSE1 = 'https://images.unsplash.com/photo-1758789667762-56175fe4601c?w=700&h=500&fit=crop&auto=format'
const WAREHOUSE2 = 'https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=700&h=500&fit=crop&auto=format'
const WAREHOUSE3 = 'https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?w=700&h=500&fit=crop&auto=format'
const STAGE_BG = `${import.meta.env.BASE_URL}gep-production-staffing.jpg`
const TEAM_COLLAB_IMG = '/gep-why-gep-team.jpg'

/** Tour art lives in `public/recent-projects/` (served as static URLs for preview). */
const recentProjectImg = (file: string) => `${import.meta.env.BASE_URL}recent-projects/${file}`

const FONT_BODY = "'Inter', sans-serif"
const FONT_DISPLAY = "'Barlow Condensed', sans-serif"

const CALL_BUTTON_CLASS =
  'px-5 py-2.5 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 hover:opacity-90'
const callButtonStyle: CSSProperties = {
  fontFamily: FONT_BODY,
  borderColor: 'var(--gep-accent)',
  color: '#ffffff',
  background: 'transparent',
}

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
  { name: 'J. Cole', tour: 'The Fall Off World Tour', img: recentProjectImg('jcole-fall-off-tour.jpg') },
  { name: 'Jill Scott', tour: 'To Whom This May Concern World Tour', img: recentProjectImg('jillscott-twtmc-tour.jpg') },
  { name: 'Playboi Carti', tour: 'After Hours til Dawn World Tour', img: recentProjectImg('playboi-carti-after-hours-tour.jpg') },
  { name: 'Don Toliver', tour: 'Nitrous - Octane World Tour', img: recentProjectImg('don-toliver-nitrous-tour.png') },
  { name: 'Playboi Carti', tour: 'Antagonious World Tour', img: recentProjectImg('playboi-carti-antagonious-tour.jpg') },
  { name: 'Awarefest', tour: '2026', img: recentProjectImg('awarefest-2026.png') },
  { name: 'Roots Picnic', tour: '2026', img: recentProjectImg('roots-picnic-2026.jpg') },
  { name: 'Broccoli City Music Festival', tour: '2026', img: recentProjectImg('broccoli-city2026.png') },
  { name: 'Rolling Loud', tour: '2026', img: recentProjectImg('rolling-loud-2026.png') },
  { name: 'NBA Youngboy', tour: 'MASA World Tour 2026', img: recentProjectImg('nba-youngboy-masa-tour.png') },
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

/** Matches live gepnetwork.com Production Staffing columns (incl. duplicate Video Techs). */
const STAFFING_COLUMNS: [string[], string[]] = [
  [
    'Production Managers',
    'Production Coordinators',
    'FOH & Monitor Engineers',
    'Tour & Venue Security',
    'Video Techs',
    'Video Techs',
  ],
  [
    'Stage Managers',
    'Carpenters & Stage Hands',
    'Sound & Audio Techs',
    'Backline Techs',
    'Catering Specialists',
    'Bus & Truck Drivers',
  ],
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

function themeSelectStyle(chevronHex: string): CSSProperties {
  return {
    background: 'var(--gep-card)',
    color: 'var(--gep-text)',
    borderColor: 'rgba(128,128,128,0.25)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23${chevronHex}' fill-opacity='0.5' d='M3 5l3 3 3-3'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
  }
}

function ThemePicker({
  colorScheme,
  onColorSchemeChange,
  logoLockup,
  onLogoLockupChange,
  siteLayout,
  onSiteLayoutChange,
}: {
  colorScheme: string
  onColorSchemeChange: (id: string) => void
  logoLockup: LogoLockupId
  onLogoLockupChange: (id: LogoLockupId) => void
  siteLayout: SiteLayoutId
  onSiteLayoutChange: (id: SiteLayoutId) => void
}) {
  const isLightScheme = LIGHT_COLOR_SCHEMES.has(colorScheme)
  const chevronColor = isLightScheme ? '1D1D1F' : 'ffffff'
  const selectClass =
    'w-full min-w-[220px] max-w-[min(100vw-3rem,280px)] px-4 py-2.5 text-xs tracking-wide border cursor-pointer appearance-none pr-8'

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      style={{ fontFamily: FONT_BODY }}
    >
      <div className="flex flex-col items-end gap-2 w-full">
        <label htmlFor="color-scheme" className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--gep-text-muted)' }}>
          Color Scheme
        </label>
        <select
          id="color-scheme"
          value={colorScheme}
          onChange={(e) => onColorSchemeChange(e.target.value)}
          className={selectClass}
          style={themeSelectStyle(chevronColor)}
        >
          {COLOR_SCHEMES.map((scheme) => (
            <option key={scheme.id} value={scheme.id} style={{ background: 'var(--gep-bg)', color: 'var(--gep-text)' }}>
              {scheme.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-end gap-2 w-full">
        <label htmlFor="logo-lockup" className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--gep-text-muted)' }}>
          Logo Lockup
        </label>
        <select
          id="logo-lockup"
          value={logoLockup}
          onChange={(e) => onLogoLockupChange(e.target.value as LogoLockupId)}
          className={selectClass}
          style={themeSelectStyle(chevronColor)}
        >
          {LOGO_LOCKUPS.map((lockup) => (
            <option key={lockup.id} value={lockup.id} style={{ background: 'var(--gep-bg)', color: 'var(--gep-text)' }}>
              {lockup.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-end gap-2 w-full">
        <label htmlFor="site-layout" className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--gep-text-muted)' }}>
          Site Layout
        </label>
        <select
          id="site-layout"
          value={siteLayout}
          onChange={(e) => onSiteLayoutChange(e.target.value as SiteLayoutId)}
          className={selectClass}
          style={themeSelectStyle(chevronColor)}
        >
          {SITE_LAYOUTS.map((layout) => (
            <option key={layout.id} value={layout.id} style={{ background: 'var(--gep-bg)', color: 'var(--gep-text)' }}>
              {layout.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
  colorScheme,
  logoLockup,
  siteLayout,
}: {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  colorScheme: string
  logoLockup: LogoLockupId
  siteLayout: SiteLayoutId
}) {
  const centeredLogoHero = siteLayout === 'centered-logo-hero'
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center w-full">
        {!centeredLogoHero && (
          <GEPLogoLockup globeSize={48} colorSchemeKey={colorScheme} lockupId={logoLockup} />
        )}

        {centeredLogoHero && (
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap">
            {scrolled && (
              <GEPAbbrevGlobeMark
                colorSchemeKey={colorScheme}
                className="mr-1 transition-opacity duration-300"
              />
            )}
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-100"
                style={{ fontFamily: FONT_BODY, color: 'rgba(255,255,255,0.65)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {!centeredLogoHero && (
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-100"
                  style={{ fontFamily: FONT_BODY, color: 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="tel:8774376381" className={CALL_BUTTON_CLASS} style={callButtonStyle}>
              877-437-6381
            </a>
          </div>
        )}

        {centeredLogoHero && (
          <a href="tel:8774376381" className={`hidden lg:inline-flex ml-auto ${CALL_BUTTON_CLASS}`} style={callButtonStyle}>
            877-437-6381
          </a>
        )}

        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 ${centeredLogoHero ? '' : 'ml-auto'} ${centeredLogoHero ? 'order-first' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#ffffff' }} />
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#ffffff' }} />
          <span className={`block w-6 h-px transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#ffffff' }} />
        </button>

        {centeredLogoHero && (
          <a href="tel:8774376381" className={`lg:hidden ml-auto ${CALL_BUTTON_CLASS} px-4 py-2 text-[10px]`} style={callButtonStyle}>
            877-437-6381
          </a>
        )}
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
                style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8774376381"
              className={`mt-2 ${CALL_BUTTON_CLASS} block text-center py-3`}
              style={callButtonStyle}
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

function Hero({
  siteLayout,
  colorScheme,
  logoLockup,
}: {
  siteLayout: SiteLayoutId
  colorScheme: string
  logoLockup: LogoLockupId
}) {
  const centeredLogoHero = siteLayout === 'centered-logo-hero'

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
        {!centeredLogoHero && (
          <p
            className="text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: FONT_BODY, color: 'var(--gep-hero-kicker, #F8F5F0)' }}
          >
            Full-Service Live Event Production
          </p>
        )}
        {centeredLogoHero ? (
          <>
            <div className="flex justify-center mb-6 w-full max-w-[min(100%,64rem)] mx-auto px-2">
              <GEPLogoLockup
                variant="hero"
                globeSize={140}
                colorSchemeKey={colorScheme}
                lockupId={logoLockup}
                className="max-w-full"
              />
            </div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-10"
              style={{ fontFamily: FONT_BODY, color: 'var(--gep-hero-kicker, #F8F5F0)' }}
            >
              Full-Service Live Event Production
            </p>
          </>
        ) : (
          <h1
            className="text-white uppercase leading-none mb-6"
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
            }}
          >
            Production<br />
            <span style={{ color: 'var(--gep-hero-word, var(--gep-accent))' }}>Without</span> Limits
          </h1>
        )}
        <p className="text-white/60 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: FONT_BODY }}>
          GEP Network executes concerts, tours, festivals, and corporate events at the highest level — backed by 40+ years of industry expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 hover:border-white/50 hover:text-white"
            style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)', fontFamily: FONT_BODY }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <span className="text-white text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: FONT_BODY }}>Scroll</span>
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
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
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
                <h3
                  className="text-white uppercase leading-tight mb-1"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.02em' }}
                >
                  {p.name}
                </h3>
                <p className="text-[11px] tracking-widest uppercase" style={{ fontFamily: FONT_BODY, color: 'rgba(255,255,255,0.75)' }}>
                  {p.tour}
                </p>
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
    <section className="relative py-28 overflow-hidden min-h-[32rem]">
      <img
        src={TEAM_COLLAB_IMG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'var(--gep-why-gep-overlay)' }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <GoldRule />
          <h2
            className="text-white uppercase leading-tight mb-8"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            Why GEP<br />Is the Right Choice
          </h2>
          <p className="text-base leading-relaxed mb-6 text-white/75" style={{ fontFamily: FONT_BODY }}>
            For over four decades, GEP Network has been the production partner that the live entertainment industry turns to when execution matters most. We don't just staff shows — we build the infrastructure that makes them legendary.
          </p>
          <p className="text-base leading-relaxed mb-10 text-white/75" style={{ fontFamily: FONT_BODY }}>
            From 30,000-seat arenas to international festivals, our coordinators, managers, and crew are embedded in your production from first call to final load-out. We know the business because we've lived it.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-semibold hover:gap-5 transition-all duration-200"
            style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent)' }}
          >
            Learn More About Us <span className="text-lg leading-none">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/15">
          {[
            { n: '40+', l: 'Years in Business' },
            { n: '500+', l: 'Productions Executed' },
            { n: '50+', l: 'Active Crew Members' },
            { n: '100%', l: 'Client Retention Rate' },
          ].map((s) => (
            <div
              key={s.l}
              className="p-10 flex flex-col justify-end backdrop-blur-[2px]"
              style={{ background: 'rgba(0, 0, 0, 0.45)' }}
            >
              <div
                className="uppercase leading-none mb-2"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '3.5rem', color: 'var(--gep-accent)' }}
              >
                {s.n}
              </div>
              <div className="text-xs tracking-widest uppercase text-white/65" style={{ fontFamily: FONT_BODY }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 scroll-mt-24" style={{ background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-8 max-w-3xl"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
        >
          About GEP Network
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-base leading-relaxed" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
            GEP Network is a full-service live event production company built on four decades of arena tours, festivals, and broadcast-ready experiences. Our teams integrate with yours — from production management and staffing to storage and logistics — so every show hits on time and on standard.
          </p>
          <p className="text-base leading-relaxed" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
            Headquartered in Conyers, Georgia, we deploy coordinators, managers, and crew nationwide. When the industry needs a partner who understands the pace of the road, GEP is the call.
          </p>
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
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
          >
            What We Do
          </h2>
          <p className="text-sm max-w-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
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
                      style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.06em', color: 'var(--gep-text)' }}
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
                    style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.06em', color: 'var(--gep-accent-text)' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: FONT_BODY, color: 'var(--gep-accent-text)', opacity: 0.85 }}
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
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: '1.75rem', color: 'var(--gep-text)' }}
            >
              Inquiry Received
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
              Thank you for your interest in GEP tour storage. Our team will review your request and respond within one business day.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 text-xs tracking-widest uppercase font-semibold"
              style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <GoldRule />
            <h3
              className="uppercase mb-2"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: '1.75rem', color: 'var(--gep-text)' }}
            >
              Storage Inquiry
            </h3>
            <p className="text-sm mb-8" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
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
                  style={{ fontFamily: FONT_BODY, background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: FONT_BODY, background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company / Tour"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: FONT_BODY, background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  style={{ fontFamily: FONT_BODY, background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Describe your storage needs — gear type, duration, estimated volume... *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                style={{ fontFamily: FONT_BODY, background: 'var(--gep-bg)', color: 'var(--gep-text)', border: '1px solid var(--gep-divider)' }}
              />
              <button
                type="submit"
                className="mt-2 px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-opacity hover:opacity-90"
                style={{ background: 'var(--gep-accent)', color: 'var(--gep-accent-text)', fontFamily: FONT_BODY }}
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
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
          >
            Tour Storage
          </h2>
          <p className="text-sm max-w-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
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
                style={{ background: 'var(--gep-storage-overlay)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'var(--gep-accent)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="text-white uppercase mb-2 leading-tight"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.03em' }}
                >
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: FONT_BODY }}>{f.desc}</p>
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
              fontFamily: FONT_BODY,
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
          style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
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

function StaffingTriangle() {
  return (
    <span
      className="inline-block flex-shrink-0 w-0 h-0"
      style={{
        borderTop: '6px solid transparent',
        borderBottom: '6px solid transparent',
        borderLeft: '10px solid var(--gep-accent)',
      }}
      aria-hidden="true"
    />
  )
}

function ProductionStaffing() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden min-h-[28rem]">
      <img
        src={STAGE_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'var(--gep-staffing-overlay)' }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <h2
          className="uppercase leading-tight mb-6"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 800,
            fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)',
            letterSpacing: '0.04em',
            color: '#ffffff',
          }}
        >
          Production Staffing
        </h2>
        <p
          className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16"
          style={{ fontFamily: FONT_BODY, fontWeight: 500 }}
        >
          Let our skilled professionals handle the intricacies of your event.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 sm:gap-16 md:gap-24 mb-14 md:mb-16">
          {STAFFING_COLUMNS.map((column, colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-4 w-full max-w-[340px] sm:w-auto sm:min-w-[280px] text-left mx-auto sm:mx-0">
              {column.map((role, rowIdx) => (
                <li key={`${colIdx}-${rowIdx}`} className="flex items-center gap-3.5">
                  <StaffingTriangle />
                  <span
                    className="text-white text-lg md:text-xl font-medium"
                    style={{ fontFamily: FONT_BODY }}
                  >
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block px-12 py-5 text-sm md:text-base tracking-[0.2em] uppercase font-bold transition-opacity hover:opacity-90"
          style={{
            fontFamily: FONT_BODY,
            background: 'var(--gep-accent)',
            color: 'var(--gep-accent-text)',
          }}
        >
          Find Out More
        </a>
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
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
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
              style={{ fontFamily: FONT_DISPLAY, fontSize: '6rem', opacity: 0.15, lineHeight: 0.7, color: 'var(--gep-accent)' }}
            >
              "
            </div>
            <blockquote key={active} className="relative z-10 animate-fade-up">
              <p
                className="text-lg lg:text-2xl leading-relaxed mb-8 max-w-3xl"
                style={{ fontFamily: FONT_BODY, fontWeight: 300, color: 'var(--gep-text)' }}
              >
                "{TESTIMONIALS[active].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px" style={{ background: 'var(--gep-accent)' }} />
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>{TESTIMONIALS[active].author}</p>
                  <p className="text-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>{TESTIMONIALS[active].title}</p>
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

function Footer({ colorScheme, logoLockup }: { colorScheme: string; logoLockup: LogoLockupId }) {
  return (
    <footer id="contact" className="pt-20 pb-10 scroll-mt-24" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'var(--gep-footer)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <GEPLogoLockup
              globeSize={48}
              colorSchemeKey={colorScheme}
              lockupId={logoLockup}
              className="mb-4"
            />
            <p className="text-white/35 text-sm leading-relaxed mb-6" style={{ fontFamily: FONT_BODY }}>
              Full-service live event production. 40+ years of experience. Global reach.
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { name: 'YouTube', href: 'https://www.youtube.com/@gepnetwork' },
                { name: 'Instagram', href: 'https://www.instagram.com/gep.network/' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/gepnetwork/posts/?feedView=all' },
                { name: 'Facebook', href: 'https://www.facebook.com/p/GEP-Network-61558628911648/' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-[color:var(--gep-accent)] text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ fontFamily: FONT_BODY }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY }}>Navigate</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200" style={{ fontFamily: FONT_BODY }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY }}>Contact</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: FONT_BODY }}>General</p>
                <a href="mailto:admin@gepnetwork.com" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: FONT_BODY }}>
                  admin@gepnetwork.com
                </a>
              </div>
              <div>
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: FONT_BODY }}>Bookings</p>
                <a href="mailto:bookings@gepnetwork.com" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: FONT_BODY }}>
                  bookings@gepnetwork.com
                </a>
              </div>
            </div>
          </div>

          {/* Address + Phone */}
          <div>
            <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY }}>Location</p>
            <address className="not-italic text-white/50 text-sm leading-loose mb-6" style={{ fontFamily: FONT_BODY }}>
              1390 Business Ctr Dr. SW<br />
              Ste 200 - 300<br />
              Conyers, GA 30094
            </address>
            <a href="tel:8774376381" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: FONT_BODY }}>
              877-437-6381
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-white/20 text-xs" style={{ fontFamily: FONT_BODY }}>
            © {new Date().getFullYear()} GEP Network, Inc. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-hero-kicker, #F8F5F0)' }}>
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
  const [colorScheme, setColorScheme] = useState('bone-light')
  const [logoLockup, setLogoLockup] = useState<LogoLockupId>('century-globe')
  const [siteLayout, setSiteLayout] = useState<SiteLayoutId>('centered-logo-hero')
  const scheme = COLOR_SCHEMES.find((s) => s.id === colorScheme) ?? COLOR_SCHEMES[0]

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ ...scheme.vars, background: 'var(--gep-bg)', color: 'var(--gep-text)' } as CSSProperties}
    >
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colorScheme={colorScheme}
        logoLockup={logoLockup}
        siteLayout={siteLayout}
      />
      <Hero siteLayout={siteLayout} colorScheme={colorScheme} logoLockup={logoLockup} />
      <ClientLogoWall colorScheme={colorScheme} />
      <RecentProjectsCarousel />
      <WhyGEP />
      <AboutSection />
      <ServicesGrid />
      <StorageSection />
      <ProductionStaffing />
      <Testimonials />
      <Footer colorScheme={colorScheme} logoLockup={logoLockup} />
      <ThemePicker
        colorScheme={colorScheme}
        onColorSchemeChange={setColorScheme}
        logoLockup={logoLockup}
        onLogoLockupChange={setLogoLockup}
        siteLayout={siteLayout}
        onSiteLayoutChange={setSiteLayout}
      />
    </div>
  )
}
