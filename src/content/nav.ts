import { SERVICE_NAV } from './services'
import { TEAM } from './team'

export type NavLinkItem = {
  label: string
  to: string
  description?: string
}

export type NavGroup = {
  heading?: string
  items: NavLinkItem[]
}

export type NavItem = {
  label: string
  to: string
  groups?: NavGroup[]
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    groups: [
      {
        items: [
          { label: 'Overview', to: '/about' },
          { label: 'Our Team', to: '/about#ourteam' },
        ],
      },
      {
        heading: 'Team',
        items: TEAM.map((member) => ({
          label: member.name,
          to: `/team/${member.slug}`,
          description: member.role,
        })),
      },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    groups: [
      {
        items: [{ label: 'All Services', to: '/services' }],
      },
      {
        heading: 'Expertise',
        items: SERVICE_NAV.map((service) => ({
          label: service.title,
          to: `/services/${service.slug}`,
        })),
      },
    ],
  },
  { label: 'Storage', to: '/storage' },
  { label: 'Events', to: '/events' },
  { label: 'Contact Us', to: '/contact' },
]

/** Flat links for simple menus (footer, etc.) */
export const NAV_LINKS = PRIMARY_NAV.map(({ label, to }) => ({ label, to }))
