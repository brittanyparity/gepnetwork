export type SiteLayoutId = 'headline-hero' | 'centered-logo-hero'

export const SITE_LAYOUTS: { id: SiteLayoutId; name: string }[] = [
  { id: 'centered-logo-hero', name: 'Centered Logo Hero' },
  { id: 'headline-hero', name: 'Headline Hero' },
]
