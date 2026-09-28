import { useState, useEffect, useRef, type CSSProperties, type FormEvent, type MouseEvent, type ReactNode } from 'react'
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
import GEPLogoLockup from './components/GepGlobeMark'

const LOGO_LOCKUP = 'century-globe' as const

const HERO_VIDEO = '/gep-hero-video.mp4'

const LIGHT_COLOR_SCHEMES = new Set([
  'palette-silver',
  'palette-clay',
  'palette-dusk',
  'palette-sage',
  'palette-amber',
  'palette-soul',
])

const PALETTE = {
  ember: '#E2622C',
  brass: '#C9982F',
  clay: '#A8503C',
  dusk: '#43627F',
  sage: '#6E8467',
  silver: '#6B7280',
  silverLight: '#9CA3AF',
  /** Earth-toned purple (scheme name: Amber) */
  amber: '#6E4F6B',
  amberLight: '#8A6B7D',
  /** Earth-toned brown */
  soul: '#6F5344',
  soulLight: '#8B6A55',
} as const

type ColorScheme = {
  id: string
  name: string
  vars: Record<string, string>
}

function accentTextOn(accent: string): string {
  return accent.toUpperCase() === PALETTE.brass.toUpperCase() ? '#17140F' : '#FFFFFF'
}

const FOOTER_DARK = '#17140F'

const FOOTER_VARS: Record<string, string> = {
  '--gep-footer': FOOTER_DARK,
  '--gep-footer-text': '#F3EFE8',
  '--gep-footer-text-muted': 'rgba(243, 239, 232, 0.72)',
  '--gep-footer-divider': 'rgba(255, 255, 255, 0.12)',
}

const STAFFING_OVERLAY_DARK = `linear-gradient(to bottom, rgba(23, 20, 15, 0.42) 0%, rgba(23, 20, 15, 0.78) 62%, ${FOOTER_DARK} 100%)`

/** Scrolled header glass — grey-washed theme hue at ~68% opacity (see Silver) */
const HEADER_BAR = {
  silver: 'rgba(58, 58, 62, 0.68)',
  dusk: 'rgba(84, 98, 112, 0.68)',
  sage: 'rgba(96, 108, 96, 0.68)',
  amber: 'rgba(98, 88, 96, 0.68)',
  soul: 'rgba(98, 90, 82, 0.68)',
} as const

function lightBoneScheme(
  id: string,
  name: string,
  accent: string,
  heroWord: string,
  extras: Record<string, string> = {},
): ColorScheme {
  return {
    id,
    name,
    vars: {
      '--gep-bg': '#F8F5F0',
      '--gep-bg-alt': '#F3EFE8',
      '--gep-card': '#ECE6DC',
      ...FOOTER_VARS,
      ...(extras['--gep-footer'] ? { '--gep-footer': extras['--gep-footer'] } : {}),
      '--gep-accent': accent,
      '--gep-accent-text': accentTextOn(accent),
      '--gep-header-bar': 'rgba(107, 99, 88, 0.68)',
      '--gep-header-scrolled': 'rgba(107, 99, 88, 0.68)',
      '--gep-overlay-top': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-mid': 'rgba(0, 0, 0, 0.10)',
      '--gep-overlay-bottom': 'rgba(0, 0, 0, 0.10)',
      '--gep-card-overlay': 'rgba(67, 98, 127, 0.72)',
      '--gep-staffing-overlay': STAFFING_OVERLAY_DARK,
      '--gep-staffing-text': '#F3EFE8',
      '--gep-staffing-text-muted': 'rgba(243, 239, 232, 0.82)',
      '--gep-text': '#17140F',
      '--gep-text-muted': '#6B6358',
      '--gep-logo-filter': 'none',
      '--gep-client-logo-filter': 'brightness(0)',
      '--gep-divider': 'rgba(23, 20, 15, 0.12)',
      '--gep-hero-word': heroWord,
      '--gep-hero-kicker': '#F8F5F0',
      '--gep-why-gep-overlay':
        'linear-gradient(105deg, rgba(23, 20, 15, 0.78) 0%, rgba(23, 20, 15, 0.42) 50%, rgba(23, 20, 15, 0.32) 100%)',
      '--gep-storage-overlay':
        'linear-gradient(to top, rgba(67, 98, 127, 0.78) 0%, rgba(110, 132, 103, 0.4) 55%, rgba(67, 98, 127, 0.16) 100%)',
      ...extras,
    },
  }
}

const COLOR_SCHEMES: ColorScheme[] = [
  lightBoneScheme('palette-soul', 'Soul', PALETTE.soul, PALETTE.soulLight, {
    '--gep-bg': '#F6F1EB',
    '--gep-bg-alt': '#EDE4D8',
    '--gep-card': '#E5DACE',
    '--gep-header-bar': HEADER_BAR.soul,
    '--gep-header-scrolled': HEADER_BAR.soul,
    '--gep-card-overlay': 'rgba(68, 48, 36, 0.76)',
    '--gep-storage-overlay':
      'linear-gradient(to top, rgba(68, 48, 36, 0.86) 0%, rgba(111, 83, 68, 0.46) 55%, rgba(68, 48, 36, 0.2) 100%)',
  }),
  lightBoneScheme('palette-silver', 'Silver', PALETTE.silver, PALETTE.silverLight, {
    '--gep-bg': '#FFFFFF',
    '--gep-bg-alt': '#F5F5F7',
    '--gep-card': '#EFEFF2',
    '--gep-text': '#1D1D1F',
    '--gep-text-muted': '#6E6E73',
    '--gep-divider': 'rgba(0, 0, 0, 0.08)',
    '--gep-header-bar': HEADER_BAR.silver,
    '--gep-header-scrolled': HEADER_BAR.silver,
    '--gep-hero-kicker': '#F5F5F7',
    '--gep-card-overlay': 'rgba(45, 45, 50, 0.72)',
    '--gep-why-gep-overlay':
      'linear-gradient(105deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.48) 50%, rgba(0, 0, 0, 0.36) 100%)',
    '--gep-storage-overlay':
      'linear-gradient(to top, rgba(45, 45, 50, 0.86) 0%, rgba(107, 114, 128, 0.44) 55%, rgba(45, 45, 50, 0.18) 100%)',
  }),
  lightBoneScheme('palette-clay', 'Clay', PALETTE.clay, PALETTE.clay),
  lightBoneScheme('palette-dusk', 'Dusk', PALETTE.dusk, PALETTE.dusk, {
    '--gep-header-bar': HEADER_BAR.dusk,
    '--gep-header-scrolled': HEADER_BAR.dusk,
  }),
  lightBoneScheme('palette-sage', 'Sage', PALETTE.sage, PALETTE.sage, {
    '--gep-header-bar': HEADER_BAR.sage,
    '--gep-header-scrolled': HEADER_BAR.sage,
  }),
  lightBoneScheme('palette-amber', 'Amber', PALETTE.amber, PALETTE.amberLight, {
    '--gep-bg': '#F7F3F5',
    '--gep-bg-alt': '#EFE8EE',
    '--gep-card': '#E8DFE6',
    '--gep-header-bar': HEADER_BAR.amber,
    '--gep-header-scrolled': HEADER_BAR.amber,
    '--gep-card-overlay': 'rgba(62, 45, 58, 0.72)',
    '--gep-storage-overlay':
      'linear-gradient(to top, rgba(62, 45, 58, 0.82) 0%, rgba(110, 79, 107, 0.42) 55%, rgba(62, 45, 58, 0.16) 100%)',
  }),
]

const HERO_INTRO =
  'GEP Network executes concerts, tours, festivals, and corporate events at the highest level — backed by 40+ years of industry expertise.'

const FOOTER_POSTS = [
  { title: 'Press Release for Juneteenth Celebration', date: 'May 17, 2024', href: '#' },
  { title: 'The Future of Event Production', date: 'March 5, 2024', href: '#' },
  { title: 'The Art of Event Management', date: 'March 5, 2024', href: '#' },
]

const FOOTER_SOCIAL = [
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@gepnetwork' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gep.network/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/gepnetwork/posts/?feedView=all' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/p/GEP-Network-61558628911648/' },
] as const

type FooterSocialId = (typeof FOOTER_SOCIAL)[number]['id']

function FooterSocialIcon({ id, className = '' }: { id: FooterSocialId; className?: string }) {
  const shared = { className, fill: 'currentColor', 'aria-hidden': true as const }
  switch (id) {
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" {...shared}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" {...shared}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" {...shared}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.555V9h3.559v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" {...shared}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
  }
}

// ─── Images ────────────────────────────────────────────────────────────────
const TOUR_STORAGE_MULTI_DOCK_IMG = '/gep-tour-storage-multi-dock.png'
const TOUR_STORAGE_COURTEOUS_SERVICE_IMG = '/gep-tour-storage-courteous-service.png'
/** Tour bus — Travel Logistics service tile */
const SERVICE_TRAVEL_LOGISTICS_BUS_IMG =
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=500&fit=crop&auto=format'
const STAGE_BG = `${import.meta.env.BASE_URL}gep-production-staffing.jpg`
const TEAM_COLLAB_IMG = '/gep-why-gep-team.jpg'
const SERVICE_STAGE_MANAGEMENT_IMG = '/gep-service-stage-management.png'
const SERVICE_PRODUCTION_MANAGEMENT_IMG = '/gep-service-production-management.png'
const SERVICE_PRODUCTION_COORDINATION_IMG = '/gep-service-production-coordination.png'
const SERVICE_TRAVEL_LOGISTICS_IMG = '/gep-service-travel-logistics.png'
const SERVICE_EVENT_MANAGEMENT_IMG = '/gep-service-event-management.png'
const SERVICE_DESIGN_SERVICES_IMG = '/gep-service-design-services.png'

/** Tour art lives in `public/recent-projects/` (served as static URLs for preview). */
const recentProjectImg = (file: string) => `${import.meta.env.BASE_URL}recent-projects/${file}`

const FONT_BODY = "'Inter', sans-serif"
const FONT_DISPLAY = "'Barlow Condensed', sans-serif"
/** Thin Barlow Condensed for section and card titles (matches hero tagline) */
const DISPLAY_TITLE_WEIGHT = 300
/** Bold Barlow Condensed for prominent figures (Why GEP stats) */
const DISPLAY_STAT_WEIGHT = 700

const ACCENT_BUTTON_BASE =
  'inline-flex items-center justify-center px-8 py-4 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 cursor-pointer'

const OUTLINE_ACCENT_BUTTON_CLASS = `${ACCENT_BUTTON_BASE} hover:opacity-90`

const outlineAccentButtonStyle: CSSProperties = {
  fontFamily: FONT_BODY,
  borderColor: 'var(--gep-accent)',
  color: 'var(--gep-accent)',
  background: 'transparent',
}

function onOutlineAccentEnter(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.background = 'var(--gep-accent)'
  e.currentTarget.style.color = 'var(--gep-accent-text)'
}

function onOutlineAccentLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.background = 'transparent'
  e.currentTarget.style.color = 'var(--gep-accent)'
}

function AccentOutlineButton({
  href,
  onClick,
  type = 'button',
  className = '',
  children,
}: {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
}) {
  const classNames = `${OUTLINE_ACCENT_BUTTON_CLASS} ${className}`.trim()
  const shared = {
    className: classNames,
    style: outlineAccentButtonStyle,
    onMouseEnter: onOutlineAccentEnter,
    onMouseLeave: onOutlineAccentLeave,
  }

  if (href) {
    return (
      <a href={href} {...shared} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} {...shared} onClick={onClick}>
      {children}
    </button>
  )
}

const filledInverseButtonStyle: CSSProperties = {
  fontFamily: FONT_BODY,
  borderColor: 'var(--gep-accent)',
  color: 'var(--gep-accent-text)',
  background: 'var(--gep-accent)',
}

function onFilledInverseEnter(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.background = 'var(--gep-accent-text)'
  e.currentTarget.style.color = 'var(--gep-accent)'
  e.currentTarget.style.borderColor = 'var(--gep-accent)'
}

function onFilledInverseLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.background = 'var(--gep-accent)'
  e.currentTarget.style.color = 'var(--gep-accent-text)'
  e.currentTarget.style.borderColor = 'var(--gep-accent)'
}

const CALL_BUTTON_CLASS = `${ACCENT_BUTTON_BASE} px-5 py-2.5`
const CALL_ICON_BUTTON_CLASS =
  'inline-flex items-center justify-center w-10 h-10 border transition-all duration-200 cursor-pointer shrink-0'

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/** Header call CTA: solid accent default, inverted fill/text on hover */
function CallButton({
  className = '',
  onClick,
  iconOnly = false,
  children,
}: {
  className?: string
  onClick?: () => void
  iconOnly?: boolean
  children?: ReactNode
}) {
  return (
    <a
      href="tel:8774376381"
      className={`${iconOnly ? CALL_ICON_BUTTON_CLASS : CALL_BUTTON_CLASS} ${className}`.trim()}
      style={filledInverseButtonStyle}
      onMouseEnter={onFilledInverseEnter}
      onMouseLeave={onFilledInverseLeave}
      onClick={onClick}
      aria-label="Call 877-437-6381"
    >
      {iconOnly ? <PhoneIcon className="w-4 h-4" /> : children}
    </a>
  )
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
    img: SERVICE_PRODUCTION_MANAGEMENT_IMG,
  },
  {
    title: 'Production Coordination',
    icon: '◉',
    desc: 'On-the-ground coordination between departments, vendors, and talent. Our coordinators are the connective tissue of any successful production.',
    img: SERVICE_PRODUCTION_COORDINATION_IMG,
  },
  {
    title: 'Event Management',
    icon: '◎',
    desc: 'Full-scale event operations for concerts, festivals, and corporate experiences — from site logistics to day-of execution.',
    img: SERVICE_EVENT_MANAGEMENT_IMG,
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
    img: SERVICE_STAGE_MANAGEMENT_IMG,
  },
  {
    title: 'Travel Logistics',
    icon: '◆',
    desc: 'Ground transportation, hotel blocks, and movement logistics for crew and talent — nationwide and internationally.',
    img: SERVICE_TRAVEL_LOGISTICS_BUS_IMG,
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
    img: SERVICE_DESIGN_SERVICES_IMG,
  },
]

const STORAGE_FEATURES: {
  title: string
  desc: string
  img: string
  /** Zoom past object-cover to crop empty foreground/sky */
  imgScale: number
  imgPosition: string
}[] = [
  {
    title: 'Multi-Dock Access',
    desc: 'Multiple loading bays for fast, efficient gear movement — in and out without delay.',
    img: TOUR_STORAGE_MULTI_DOCK_IMG,
    imgScale: 1.55,
    imgPosition: '52% 32%',
  },
  {
    title: 'Music Industry Expertise',
    desc: "Our team understands touring equipment. We've stored it, moved it, and protected it for 40+ years.",
    img: SERVICE_TRAVEL_LOGISTICS_IMG,
    imgScale: 1.55,
    imgPosition: '50% 42%',
  },
  {
    title: 'Courteous Service',
    desc: 'Professional, responsive staff who treat your gear with the same care you do.',
    img: TOUR_STORAGE_COURTEOUS_SERVICE_IMG,
    imgScale: 1.65,
    imgPosition: '50% 28%',
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

function useTestimonialCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [paused])

  return { active, setActive, paused, setPaused }
}

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
}: {
  colorScheme: string
  onColorSchemeChange: (id: string) => void
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
    </div>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
  colorScheme,
}: {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  colorScheme: string
}) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`gep-header-root fixed top-0 left-0 right-0 z-50 transition-all duration-300${scrolled ? ' is-scrolled' : ''}`}
      style={{
        background: scrolled ? 'var(--gep-header-bar, rgba(107, 99, 88, 0.68))' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--gep-header-border-scrolled, rgba(128, 128, 128, 0.15))'
          : '1px solid transparent',
      }}
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center w-full">
        <div className="gep-header-logo relative z-10 flex-shrink-0">
          <GEPLogoLockup
            globeSize={48}
            colorSchemeKey={colorScheme}
            lockupId={LOGO_LOCKUP}
          />
        </div>

        <div className="relative z-10 flex items-center gap-5 xl:gap-8 ml-auto">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="gep-header-link text-xs tracking-widest uppercase"
                style={{ fontFamily: FONT_BODY }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <CallButton className="sm:hidden" iconOnly />
          <CallButton className="hidden sm:inline-flex shrink-0">
            877-437-6381
          </CallButton>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`gep-header-menu-bar block w-6 h-px transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`gep-header-menu-bar block w-6 h-px transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`gep-header-menu-bar block w-6 h-px transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
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
            <CallButton className="mt-2 self-start" iconOnly onClick={() => setMenuOpen(false)} />
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
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--gep-overlay-top) 0%, var(--gep-overlay-mid) 50%, var(--gep-overlay-bottom) 100%)',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <h1
          className="text-white uppercase leading-snug max-w-4xl mx-auto"
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
            fontWeight: DISPLAY_TITLE_WEIGHT,
            letterSpacing: '0.14em',
          }}
        >
          Crafting the Extraordinary in Global Entertainment
        </h1>
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
          style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
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
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.5rem', letterSpacing: '0.02em' }}
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
  const sectionRef = useRef<HTMLElement>(null)
  const [bgShift, setBgShift] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const viewH = window.innerHeight
      if (rect.bottom <= 0 || rect.top >= viewH) return
      const progress = (viewH - rect.top) / (viewH + section.offsetHeight)
      setBgShift((progress - 0.5) * 90)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${TEAM_COLLAB_IMG})`,
            backgroundSize: 'cover',
            backgroundPosition: `center calc(50% + ${bgShift * 0.35}px)`,
            backgroundAttachment: 'fixed',
          }}
        />
        <img
          src={TEAM_COLLAB_IMG}
          alt=""
          className="absolute left-0 w-full object-cover object-center sm:hidden"
          style={{
            top: '-8%',
            height: '116%',
            transform: `translate3d(0, ${bgShift}px, 0)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gep-why-gep-overlay)' }} />
      </div>
      <div className="relative z-10 py-28 min-h-[90vh] flex items-center max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <GoldRule />
          <h2
            className="text-white uppercase leading-tight mb-8"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
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
            className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-white hover:text-white/85 hover:gap-5 transition-all duration-200"
            style={{ fontFamily: FONT_BODY }}
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
              style={{ background: 'color-mix(in srgb, var(--gep-accent) 45%, transparent)' }}
            >
              <div
                className="uppercase leading-none mb-2 text-white"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: DISPLAY_STAT_WEIGHT,
                  fontSize: '3.5rem',
                }}
              >
                {s.n}
              </div>
              <div
                className="text-xs tracking-widest uppercase text-white/70"
                style={{ fontFamily: FONT_BODY }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
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
          style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
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
    <section id="services" className="pt-24 pb-0" style={{ background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-14"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
        >
          What We Do
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="flip-card cursor-pointer"
              style={{ height: 280, perspective: '1000px' }}
            >
              <div className="flip-card-inner">

                {/* Front */}
                <div className="flip-card-front relative overflow-hidden">
                  <img
                    src={svc.img}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.52) 50%, rgba(0, 0, 0, 0.62) 100%)',
                    }}
                  />
                  <h3
                    className="absolute inset-0 flex items-center justify-center px-4 uppercase text-center leading-tight text-white"
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: DISPLAY_TITLE_WEIGHT,
                      fontSize: '1.05rem',
                      letterSpacing: '0.08em',
                      textShadow: '0 2px 20px rgba(0, 0, 0, 0.45)',
                    }}
                  >
                    {svc.title}
                  </h3>
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
                    style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.15rem', letterSpacing: '0.06em', color: 'var(--gep-accent-text)' }}
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
              style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.75rem', color: 'var(--gep-text)' }}
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
              style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.75rem', color: 'var(--gep-text)' }}
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
      <section id="storage" className="pt-24 pb-24" style={{ background: 'var(--gep-bg-alt)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-4"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em', color: 'var(--gep-text)' }}
        >
          Tour Storage
        </h2>
        <p className="text-sm max-w-2xl mb-14" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
          Secure, accessible storage built for the music industry — not general warehousing.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {STORAGE_FEATURES.map((f) => (
            <div key={f.title} className="relative group overflow-hidden" style={{ height: 380, background: 'var(--gep-card)' }}>
              <img
                src={f.img}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 [transform:scale(var(--storage-img-scale))] group-hover:[transform:scale(calc(var(--storage-img-scale)*1.04))]"
                style={{
                  objectPosition: f.imgPosition,
                  ['--storage-img-scale' as string]: String(f.imgScale),
                }}
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
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.5rem', letterSpacing: '0.03em' }}
                >
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: FONT_BODY }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <AccentOutlineButton type="button" onClick={() => setShowForm(true)}>
            Inquire About Storage
          </AccentOutlineButton>
        </div>
      </div>
    </section>
    </>
  )
}

function ClientLogoWall({ colorScheme }: { colorScheme: string }) {
  const useColorLogos = LIGHT_COLOR_SCHEMES.has(colorScheme)

  return (
    <section className="pt-20 pb-10" style={{ borderTop: '1px solid var(--gep-divider)', borderBottom: '1px solid var(--gep-divider)', background: 'var(--gep-bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p
          className="text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10"
          style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}
        >
          {HERO_INTRO}
        </p>
        <p
          className="text-xs tracking-[0.3em] uppercase text-center mb-12"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, color: 'var(--gep-text-muted)' }}
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
        <div className="mt-12 pt-8 pb-0" style={{ borderTop: '1px solid var(--gep-divider)' }}>
          <TestimonialsCompact />
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
  const sectionRef = useRef<HTMLElement>(null)
  const [bgShift, setBgShift] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const viewH = window.innerHeight
      if (rect.bottom <= 0 || rect.top >= viewH) return
      const progress = (viewH - rect.top) / (viewH + section.offsetHeight)
      setBgShift((progress - 0.5) * 90)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: `url(${STAGE_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: `center calc(50% + ${bgShift * 0.35}px)`,
            backgroundAttachment: 'fixed',
          }}
        />
        <img
          src={STAGE_BG}
          alt=""
          className="absolute left-0 w-full object-cover object-center sm:hidden"
          style={{
            top: '-8%',
            height: '116%',
            transform: `translate3d(0, ${bgShift}px, 0)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gep-staffing-overlay)' }} />
      </div>

      <div className="relative z-10 py-20 md:py-28 min-h-[110vh] flex flex-col justify-center max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <h2
          className="uppercase leading-tight mb-6"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)',
            letterSpacing: '0.04em',
            color: 'var(--gep-staffing-text, #F3EFE8)',
          }}
        >
          Production Staffing
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16"
          style={{ fontFamily: FONT_BODY, fontWeight: 500, color: 'var(--gep-staffing-text-muted, rgba(243, 239, 232, 0.82))' }}
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
                    className="text-lg md:text-xl font-medium"
                    style={{ fontFamily: FONT_BODY, color: 'var(--gep-staffing-text, #F3EFE8)' }}
                  >
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <AccentOutlineButton href="#contact" className="self-center">
          Find Out More
        </AccentOutlineButton>
      </div>
    </section>
  )
}

function TestimonialNavDots({
  active,
  setActive,
  align = 'center',
}: {
  active: number
  setActive: (i: number) => void
  align?: 'left' | 'center'
}) {
  return (
    <div className={`flex gap-2 ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
      {TESTIMONIALS.map((_, i) => (
        <button
          key={i}
          type="button"
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
  )
}

function TestimonialsCompact() {
  const { active, setActive, setPaused } = useTestimonialCarousel()
  const item = TESTIMONIALS[active]

  return (
    <div
      className="w-full max-w-3xl mx-auto text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p
        className="text-sm tracking-[0.22em] uppercase mb-5"
        style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, color: 'var(--gep-text-muted)' }}
      >
        What They&apos;re Saying
      </p>
      <blockquote key={active} className="animate-fade-up">
        <p
          className="text-lg md:text-xl leading-relaxed mb-4"
          style={{ fontFamily: FONT_BODY, fontWeight: 400, color: 'var(--gep-text)' }}
        >
          &ldquo;{item.quote}&rdquo;
        </p>
        <footer>
          <p className="text-base font-semibold" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text)' }}>
            {item.author}
          </p>
          <p className="text-sm mt-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-text-muted)' }}>
            {item.title}
          </p>
        </footer>
      </blockquote>
      <div className="mt-4">
        <TestimonialNavDots active={active} setActive={setActive} align="left" />
      </div>
    </div>
  )
}

function Footer({ colorScheme }: { colorScheme: string }) {
  return (
    <footer
      id="contact"
      className="pt-20 pb-10 scroll-mt-24"
      style={{
        background: 'var(--gep-footer)',
        color: 'var(--gep-footer-text)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <GEPLogoLockup
              globeSize={48}
              colorSchemeKey={colorScheme}
              lockupId={LOGO_LOCKUP}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>
              Full-service live event production. 40+ years of experience. Global reach.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {FOOTER_SOCIAL.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:text-[color:var(--gep-accent)]"
                  style={{ color: 'var(--gep-footer-text-muted)' }}
                  aria-label={s.label}
                >
                  <FooterSocialIcon id={s.id} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>Latest Posts</p>
            <ul className="flex flex-col gap-5">
              {FOOTER_POSTS.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    className="block text-sm leading-snug transition-colors duration-200 hover:text-[color:var(--gep-accent)]"
                    style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text)' }}
                  >
                    {post.title}
                  </a>
                  <p className="text-xs mt-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>
                    {post.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>Location</p>
            <address className="not-italic text-sm leading-loose" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text)' }}>
              1390 Business Ctr Dr. SW<br />
              Ste 200 - 300<br />
              Conyers, GA 30094
            </address>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>Contact</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>General</p>
                <a href="mailto:admin@gepnetwork.com" className="text-sm transition-colors hover:text-[color:var(--gep-accent)]" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text)' }}>
                  admin@gepnetwork.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>Bookings</p>
                <a href="mailto:bookings@gepnetwork.com" className="text-sm transition-colors hover:text-[color:var(--gep-accent)]" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text)' }}>
                  bookings@gepnetwork.com
                </a>
              </div>
              <a href="tel:8774376381" className="text-sm transition-colors hover:text-[color:var(--gep-accent)]" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text)' }}>
                877-437-6381
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--gep-footer-divider)' }}>
          <p className="text-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>
            © {new Date().getFullYear()} GEP Network, Inc. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: FONT_BODY, color: 'var(--gep-footer-text-muted)' }}>
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
  const [colorScheme, setColorScheme] = useState('palette-soul')
  const scheme = COLOR_SCHEMES.find((s) => s.id === colorScheme) ?? COLOR_SCHEMES[0]

  return (
    <div
      className="min-h-screen w-full max-w-[100vw]"
      style={{ ...scheme.vars, background: 'var(--gep-bg)', color: 'var(--gep-text)' } as CSSProperties}
    >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} colorScheme={colorScheme} />
      <Hero />
      <ClientLogoWall colorScheme={colorScheme} />
      <RecentProjectsCarousel />
      <WhyGEP />
      <AboutSection />
      <ServicesGrid />
      <StorageSection />
      <ProductionStaffing />
      <Footer colorScheme={colorScheme} />
      <ThemePicker colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
    </div>
  )
}
