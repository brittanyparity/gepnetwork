export const FONT_CENTURY_GOTHIC =
  "'Century Gothic', 'CenturyGothic', 'AppleGothic', 'Didact Gothic', sans-serif"

export const FONT_BRUNO_ACE = "'Bruno Ace', sans-serif"

export type LogoLockupId = 'century-bruno' | 'bruno-bruno'

export const LOGO_LOCKUPS: {
  id: LogoLockupId
  name: string
  gepFont: string
  networkFont: string
}[] = [
  {
    id: 'century-bruno',
    name: 'Century Gothic + Bruno Ace',
    gepFont: FONT_CENTURY_GOTHIC,
    networkFont: FONT_BRUNO_ACE,
  },
  {
    id: 'bruno-bruno',
    name: 'Bruno Ace (Full Wordmark)',
    gepFont: FONT_BRUNO_ACE,
    networkFont: FONT_BRUNO_ACE,
  },
]
