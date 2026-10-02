import type { CSSProperties, ReactNode } from 'react'

type SocialId = 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'linkedin'

export type SocialLink = { id: SocialId; label: string; href: string }

export function SocialIcon({ id, className = '' }: { id: SocialId; className?: string }) {
  const shared = { className, fill: 'currentColor', 'aria-hidden': true as const, viewBox: '0 0 24 24' }
  switch (id) {
    case 'youtube':
      return (
        <svg {...shared}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...shared}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...shared}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.555V9h3.559v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg {...shared}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg {...shared}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.792l7.719-8.912L1.24 2.25h7.08l4.261 5.669L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      )
  }
}

export const DEFAULT_TEAM_SOCIAL: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/p/GEP-Network-61558628911648/' },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@gepnetwork' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gep.network/' },
]

export function TeamSocialOverlay({
  links = DEFAULT_TEAM_SOCIAL,
}: {
  links?: SocialLink[]
}) {
  return (
    <div className="team-social-overlay absolute inset-0 z-20 flex items-center justify-center gap-2.5" aria-hidden="true">
      <div className="absolute inset-0 bg-black/55" />
      {links.map((s, i) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 inline-flex items-center justify-center w-10 h-10 text-white border border-white/40 bg-black/30 backdrop-blur-sm hover:bg-[color:var(--gep-accent)] hover:border-[color:var(--gep-accent)]"
          style={{ transitionDelay: `${80 + i * 45}ms` }}
        >
          <SocialIcon id={s.id} className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}

export function SocialRow({ links, className = '' }: { links: SocialLink[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:text-[color:var(--gep-accent)]"
          style={{ color: 'var(--gep-text-muted)', border: '1px solid var(--gep-divider)' }}
        >
          <SocialIcon id={s.id} className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}

export function AnimatedTitle({
  text,
  className = '',
  style,
}: {
  text: string
  className?: string
  style?: CSSProperties
}) {
  const words = text.split(' ')
  return (
    <span className={`anim-title ${className}`} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="anim-title-word" style={{ animationDelay: `${120 + i * 70}ms` }}>
          <span className="anim-title-inner" style={{ animationDelay: `${120 + i * 70}ms` }}>
            {word}
          </span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </span>
  )
}

export type { SocialId, ReactNode }
