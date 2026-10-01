import { BodyText, CtaBand, GoldRule, PageHero, SectionWrap } from '../components/PageChrome'
import { DISPLAY_TITLE_WEIGHT, FONT_BODY, FONT_DISPLAY } from '../site'

const recentProjectImg = (file: string) => `${import.meta.env.BASE_URL}recent-projects/${file}`

const EVENTS = [
  { name: 'Lollapalooza India', tour: 'India · 2026', img: recentProjectImg('lollapalooza-india-2026.png') },
  { name: 'Ballad Beast', tour: 'Saudi Arabia · 2026', img: recentProjectImg('ballad-beast-saudi-arabia-2026.png') },
  { name: 'The Word Up Story', tour: 'Funk Wars Tour', img: recentProjectImg('the-word-up-story-funk-wars-tour.jpg') },
  { name: 'Lyrical Lemonade', tour: 'Summer Smash Festival · 2026', img: recentProjectImg('lyrical-lemonade-summer-smash-2026.png') },
  {
    name: 'ESSENCE Festival — George Clinton',
    tour: '50th Anniversary of The Mothership Landing · 2026',
    img: recentProjectImg('essence-festival-george-clinton-2026.jpg'),
  },
  { name: 'Les Ardentes Festival', tour: 'Liège, Belgium · 2026', img: recentProjectImg('les-ardentes-festival-2026.jpg') },
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

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title="Events & Projects"
        subtitle="A look at the tours, festivals, and live experiences GEP Network has helped bring to the stage."
        image={EVENTS[0].img}
      />

      <SectionWrap>
        <GoldRule />
        <h2
          className="uppercase leading-tight mb-4"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: DISPLAY_TITLE_WEIGHT,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'var(--gep-text)',
          }}
        >
          Recent Projects
        </h2>
        <BodyText className="max-w-2xl mb-12">
          From arena world tours to international festivals, our productions span the full spectrum of live entertainment.
        </BodyText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {EVENTS.map((event) => (
            <article key={`${event.name}-${event.tour}`} className="relative overflow-hidden group" style={{ height: 320, background: 'var(--gep-card)' }}>
              <img
                src={event.img}
                alt={event.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="text-white uppercase leading-tight mb-1"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: DISPLAY_TITLE_WEIGHT, fontSize: '1.15rem' }}
                >
                  {event.name}
                </h3>
                <p className="text-[11px] tracking-widest uppercase text-white/70" style={{ fontFamily: FONT_BODY }}>
                  {event.tour}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrap>

      <CtaBand title="Planning your next event?" body="Tell us about the tour, festival, or production — we’ll help you execute at the highest level." />
    </>
  )
}
