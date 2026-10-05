export const FONT_BODY = "'Inter', sans-serif"
export const FONT_DISPLAY = "'Barlow Condensed', sans-serif"
/** Section / page titles — 500 reads fuller than ultra-thin 300 */
export const DISPLAY_TITLE_WEIGHT = 500
export const DISPLAY_STAT_WEIGHT = 700

export const GEP_FULL_NAME = 'Global Events Production (GEP) Network'

export { NAV_LINKS } from './content/nav'

export const FOOTER_POSTS = [
  { title: 'Press Release for Juneteenth Celebration', date: 'May 17, 2024', to: '/articles/press-release-for-juneteenth-celebration' },
  { title: 'The Future of Event Production', date: 'March 5, 2024', to: '/articles/the-future-of-event-production' },
  { title: 'The Art of Event Management', date: 'March 5, 2024', to: '/articles/the-art-of-event-management' },
]

export const FOOTER_SOCIAL = [
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@gepnetwork' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/gep.network/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/gepnetwork/posts/?feedView=all' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/p/GEP-Network-61558628911648/' },
] as const

export type FooterSocialId = (typeof FOOTER_SOCIAL)[number]['id']
