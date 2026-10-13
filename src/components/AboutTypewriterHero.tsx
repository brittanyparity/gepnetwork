import { TypewriterHero } from './TypewriterHero'

const ABOUT_PHRASES = [
  { lead: 'This is ', accent: 'Our Story' },
  { lead: 'This is ', accent: 'Who We Are' },
] as const

export function AboutTypewriterHero({ image }: { image: string }) {
  return <TypewriterHero image={image} phrases={ABOUT_PHRASES} />
}
