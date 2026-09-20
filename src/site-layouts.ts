export type SiteLayoutId = 'headline-hero' | 'centered-logo-hero'

export const SITE_LAYOUTS: { id: SiteLayoutId; name: string }[] = [
  { id: 'headline-hero', name: 'Headline Hero (Default)' },
  { id: 'centered-logo-hero', name: 'Centered Logo Hero' },
]
