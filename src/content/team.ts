export type TeamMember = {
  slug: string
  name: string
  role: string
  experience: string
  specialization: string
  email: string
  phone: string
  img: string
  summary: string
  aboutTitle: string
  sections: { heading: string; body: string }[]
  stats?: { label: string; value: string }[]
}

export const TEAM: TeamMember[] = [
  {
    slug: 'victor-reed-sr',
    name: 'Victor Reed, Sr.',
    role: 'CEO / Production Manager',
    experience: '45 years',
    specialization:
      'Production Management, Negotiating, Budgeting, Routing, Logistics, Vendor Procurement, Stage Management, Staffing, Venue Conceptualization',
    email: 'vreedsr@gepnetwork.com',
    phone: '877-437-6381',
    img: '/team/victor-reed-sr.jpg',
    summary:
      'Victor Reed brings creative visions to life, a calling for over 40 years. As CEO of GEP Network, he’s respected in Concert Touring, with a roster spanning decades.',
    aboutTitle: 'The Architect of Live Event Experiences',
    stats: [
      { label: 'Production Leadership', value: '43 Years' },
      { label: 'Tour Production', value: '45 Years' },
    ],
    sections: [
      {
        heading: 'A Career Defined by Versatility and Vision',
        body: 'Victor’s professional journey is marked by a diverse and impressive roster of collaborations with legendary artists, showcasing his adaptability and foresight. His expertise ranges from staging and event design to administrative planning and artist relations, reflecting a career built on the foundation of hands-on experience.',
      },
      {
        heading: 'Leadership Through Experience',
        body: 'From his early days as a tech and stage hand to his ascent to the role of Production Manager, Victor has always led by example. His comprehensive understanding of the production world equips him with the insight to resolve challenges with precision and creativity.',
      },
      {
        heading: 'Mentorship and Industry Growth',
        body: 'Committed to the progression of the live event industry, Victor dedicates himself to mentoring emerging professionals, many of whom have gone on to forge successful careers. His dedication to nurturing new talent is a testament to his belief in giving back and shaping the future of live productions.',
      },
    ],
  },
  {
    slug: 'belinda-pervall',
    name: 'Belinda Pervall',
    role: 'Chief Operating Officer',
    experience: '25+ years',
    specialization: 'Teambuilding, Strategy, Management',
    email: 'belindapervall@gmail.com',
    phone: '877-437-6381',
    img: '/team/belinda-pervall.jpg',
    summary:
      'Artist manager, talent advisor, and hospitality consultant. Her sharp vision delivers bold ideas, connecting clients to new audiences.',
    aboutTitle: 'Artist Manager, Advisor & Hospitality Consultant',
    sections: [
      {
        heading: 'Bold Ideas, Important Connections',
        body: 'Belinda has a sharp point of view and delivers bold, differentiating ideas and introduces important connections that help clients reach new audiences. She started her career as an owner of In Touch Studios, a 25,000 sq.ft. rehearsal facility that catered to Atlanta-based rising stars of the early 1990s.',
      },
      {
        heading: 'Touring & Hospitality Leadership',
        body: 'She honed her skills on tour as a wardrobe stylist, then joined Southpaw Entertainment as in-house Road Manager for female artists including Janet Jackson. After earning her CMP certification with Hilton Hotel Corporation, she joined The Tyler Perry Company and later helped establish and grow GEP Network alongside Victor Reed, Sr.',
      },
    ],
  },
  {
    slug: 'chico-chapman',
    name: 'Chico Chapman',
    role: 'CIO / Chief Marketing Officer',
    experience: '25+ years',
    specialization:
      'Production Coordination, Marketing Technology, New Media, Computer Technology, Project Management',
    email: 'cchapman@gepnetwork.com',
    phone: '877-437-6381',
    img: '/team/chico-chapman.jpg',
    summary:
      'With a diverse skill set spanning two decades, Chico Chapman serves as Chief Marketing Officer at GEP Network, bridging entertainment, technology, and marketing.',
    aboutTitle: 'Marketing, Technology & Production Coordination',
    stats: [
      { label: 'Production Coordination', value: '15+ Years' },
      { label: 'Tour & Event Management', value: '20+ Years' },
    ],
    sections: [
      {
        heading: 'From Labels to Live Events',
        body: 'Beginning his music career as the founder of Indica Records/LBE Entertainment in the mid-90s, Chico worked with or managed numerous regional and national recording artists and organized famed Atlanta events. His path later expanded into national marketing and technology leadership before returning to entertainment full-time with GEP Network.',
      },
      {
        heading: 'Technology Meets Production',
        body: 'As CIO and CMO, Chico brings production coordination, marketing technology, and project management together — helping GEP Network operate with the precision of a modern touring company and the reach of a media-savvy brand.',
      },
    ],
  },
  {
    slug: 'vic-reed-jr',
    name: 'Victor Reed, Jr (Vic2.0)',
    role: 'Production Mgr. / Stage Mgr',
    experience: '13+ years',
    specialization: 'Production Management, Stage Management, Technical Direction',
    email: 'admin@gepnetwork.com',
    phone: '877-437-6381',
    img: '/team/victor-reed-jr.jpg',
    summary:
      'Victor L. Reed Jr. is a seasoned production professional with over 13 years of experience, whose creative leadership and technical acumen have elevated live events nationwide.',
    aboutTitle: 'Creative Leadership On the Road',
    sections: [
      {
        heading: 'Next-Generation Production Leadership',
        body: 'Vic2.0 carries forward the Reed family legacy with modern production management and stage management expertise. He brings creative leadership and technical acumen to arena tours, festivals, and complex multi-day events.',
      },
      {
        heading: 'Hands-On Execution',
        body: 'From cue-to-cue stage management to production oversight, Victor Jr. keeps shows moving with calm under pressure — coordinating crew, vendors, and timing so every load-in through load-out hits the mark.',
      },
    ],
  },
  {
    slug: 'zach-reed',
    name: 'Zach Reed',
    role: 'Sound & Audio Team Lead',
    experience: '10 years',
    specialization: 'Audio Engineer, Backline',
    email: 'zachreed@gepnetwork.com',
    phone: '877-437-6381',
    img: '/team/zach-reed.jpg',
    summary:
      'Master of sound and production, with nearly a decade of expertise. Leading audio solutions at GEP Network.',
    aboutTitle: 'The Sonic Craftsman of Live Productions',
    sections: [
      {
        heading: 'A Symphony of Technical Expertise',
        body: 'From CEO of 4 Sound Productions LLC to hands-on roles as Production Manager and FOH Engineer for the renowned band Brick, Zach has orchestrated the audio landscape for countless memorable events.',
      },
      {
        heading: 'Versatile Roles, Unified Vision',
        body: 'As a Stage Manager for Summer Walker and a Backline Tech for artists like Roddy Ricch and Lil Durk — plus Guitar/Keyboard Tech for Jill Scott and Tour Carpenter for Kid Cudi — Zach’s multifaceted skills ensure every aspect of the live experience is executed flawlessly.',
      },
    ],
  },
  {
    slug: 'ron-valines',
    name: 'Ron Valines',
    role: 'Stage Manager / Carpenter',
    experience: '10 years',
    specialization: 'Stage Management, Carpentry, Lighting, Sound, Video',
    email: 'r.valines@yahoo.com',
    phone: '877-437-6381',
    img: '/team/ron-valines.jpg',
    summary:
      'Versatile stage manager and technical expert. Crafting seamless live event experiences for over a decade.',
    aboutTitle: 'Versatile Artisan of Live Event Staging',
    sections: [
      {
        heading: 'Technical Mastery Across Venues',
        body: 'With a background as a stagehand and AV tech for esteemed acts and festivals, Ron has built an impressive portfolio across lighting, sound, and video — including work with Production People Inc and Backbone Production.',
      },
      {
        heading: 'A Record of Prestigious Productions',
        body: 'His history includes notable events such as the Grammy Festival At Sea and carpentry for the Steve Harvey Hoodie Awards. Endorsed by industry peers for reliability and craftsmanship, Ron’s reputation is one of quality under pressure.',
      },
    ],
  },
  {
    slug: 'donna-burns',
    name: 'Donna Burns',
    role: 'Administrator / Bookkeeper',
    experience: '20+ years',
    specialization: 'Administration, Bookkeeping, Business Management',
    email: 'donnalburns1@gmail.com',
    phone: '877-437-6381',
    img: '/team/donna-burns.jpg',
    summary:
      'Donna L. Burns’ distinguished career is marked by a resolute commitment to excellence in project and program management, consulting, and customer service.',
    aboutTitle: 'Strategist in Project Management and Customer Service Excellence',
    sections: [
      {
        heading: 'Dedicated Consultant and Analytical Thinker',
        body: 'Donna’s tenure as an independent contractor showcases her versatility across quality assurance, public relations, and organizational efficiency — including developing and implementing standard operating procedures nationwide.',
      },
      {
        heading: 'Empowering Leader and Educator',
        body: 'Her motivational management style is balanced by a detail-oriented approach. With academic credentials including a BA in Political Science & Communications and advanced studies in Public Administration, Donna brings strategic rigor to GEP Network’s administration and bookkeeping.',
      },
    ],
  },
]

export function getTeamMember(slug: string) {
  return TEAM.find((m) => m.slug === slug)
}
