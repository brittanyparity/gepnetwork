export type ServicePage = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  heroImg: string
  intro: string[]
  processTitle?: string
  process?: { title: string; body: string }[]
  lists?: { title: string; items: string[] }[]
  closing?: string
}

const recent = (file: string) => `${import.meta.env.BASE_URL}recent-projects/${file}`

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'concert-and-tour-production',
    title: 'Concert & Tour Production',
    eyebrow: 'We do concerts and tour production',
    summary:
      'Hit the road with confidence as our concert tour production services ensure each performance is as seamless as it is sensational.',
    heroImg: recent('jcole-fall-off-tour.jpg'),
    intro: [
      'GEP Network is a leading provider of comprehensive tour production services, specializing in producing and executing concert tours of all sizes and complexities. With decades of experience and a dedicated team of industry professionals, we offer a wide range of services to ensure the success of every tour.',
      'With a roster of past and present clients that include iconic artists such as Mary J. Blige, Nicki Minaj, Kendrick Lamar, and Earth, Wind & Fire, as well as ongoing working relationships with top-tier promoters like Live Nation, AEG, and the Black Promoters Collective, GEP Network has a proven track record of success in concert tour production.',
    ],
    processTitle: 'Trust the Process',
    process: [
      {
        title: 'Tour Planning and Objectives',
        body: 'We collaborate closely with tour organizers to understand their vision, goals, and logistical requirements. From technical rider fulfillment to rehearsals, our experienced team ensures timely and budget-friendly execution.',
      },
      {
        title: 'Logistics Planning and Coordination',
        body: 'Meticulous logistics planning covers tour routing, venue technical analysis, travel coordination, transportation, accommodations, and scheduling — plus production vendor selection for trucking, busing, catering, sound, lighting, and more.',
      },
      {
        title: 'Creative Production Orchestration',
        body: 'Stage design, lighting, sound, and special effects are carefully orchestrated to create an immersive concert experience while adhering to budgetary constraints and safety regulations.',
      },
      {
        title: 'Ongoing Tour Production and Coordination',
        body: 'We oversee day-to-day operations, crew, technical troubleshooting, and tour-stop success — including LED video, projection, lighting, audio, lasers, and special effects.',
      },
      {
        title: 'Post-Tour Activities and Evaluation',
        body: 'Settlement, budget reconciliation, and performance evaluation help us assess results, identify improvements, and lay the groundwork for future tours.',
      },
    ],
    lists: [
      {
        title: 'Summary of Production Services',
        items: [
          'Production Management',
          'Stage Management',
          'Audio & Sound Production',
          'Production Coordination',
          'Creative & Show Design',
          'Venue Conceptualization',
          'Video Services',
          'Stage Construction & Rigging',
          'Lighting Design',
          'Expert Budgeting/Settlement',
          'Barricade Setup & Takedown',
          'Permitting & Insurance',
          'Pyro & Special Effects',
          'Hospitality/Back of House Coordination',
        ],
      },
      {
        title: 'Staffing & Vendor Procurement',
        items: [
          'Production Managers',
          'Stage Managers',
          'Production Coordinators',
          'FOH & Monitor Engineers',
          'Audio / Backline Techs',
          'Lighting Directors & Techs',
          'Video Staff',
          'Carpenters & Riggers',
          'Tour Security',
          'Bus & Truck Drivers',
          'Caterers',
          'Pyro & Special Effects Techs',
        ],
      },
    ],
    closing:
      'Ready to take your concert tour to the next level with GEP Network’s tour production services? Contact us today to discuss your tour requirements and discover how we can bring your vision to life.',
  },
  {
    slug: 'festival-production',
    title: 'Festival Production',
    eyebrow: 'We do festival production',
    summary:
      'Craft the perfect festival canvas with our festival production services, creating events that resonate with the spirit of celebration and community.',
    heroImg: recent('roots-picnic-2026.jpg'),
    intro: [
      'GEP Network produces festivals that balance creative ambition with operational discipline — from site builds and stage packages to artist flow, security, and day-of execution.',
      'Whether it’s a city festival, brand activation weekend, or multi-stage annual event, our teams coordinate vendors, talent, and production departments so the audience experience stays seamless from gates open to final load-out.',
    ],
    processTitle: 'Festival Production Approach',
    process: [
      {
        title: 'Site & Infrastructure Planning',
        body: 'We map stages, compounds, power, and audience flow against your creative vision — building a production plan that scales with capacity and programming.',
      },
      {
        title: 'Artist & Stage Coordination',
        body: 'Changeovers, riders, and timing windows are managed with festival-speed precision so each set starts strong and ends clean.',
      },
      {
        title: 'Operations & Safety',
        body: 'From barricade and staffing to contingency planning, we keep the site safe, efficient, and ready for the unexpected.',
      },
    ],
    lists: [
      {
        title: 'Festival Capabilities',
        items: [
          'Multi-stage production management',
          'Site logistics & infrastructure',
          'Artist services & hospitality',
          'Stage management & changeovers',
          'Vendor procurement',
          'Security & crowd-flow coordination',
        ],
      },
    ],
    closing: 'Let’s build a festival that feels effortless for artists and unforgettable for fans.',
  },
  {
    slug: 'corporate-event-production',
    title: 'Corporate Event Production',
    eyebrow: 'We do corporate event production',
    summary:
      'Embark on an event production journey where creativity meets logistical prowess, culminating in events that captivate and inspire.',
    heroImg: '/gep-why-gep-team.jpg',
    intro: [
      'GEP Network brings touring-grade production standards to corporate gatherings — conferences, brand launches, private concerts, and hybrid experiences.',
      'Our teams integrate creative direction with reliable logistics so executives, talent, and guests experience a polished, on-brand event from arrival through wrap.',
    ],
    processTitle: 'Corporate Production Pillars',
    process: [
      {
        title: 'Concept to Run-of-Show',
        body: 'We translate brand goals into a clear production plan — staging, content, cueing, and guest flow aligned to your message.',
      },
      {
        title: 'Technical Excellence',
        body: 'Audio, lighting, LED, and staging are engineered for clarity and impact in ballrooms, campuses, and outdoor corporate venues alike.',
      },
      {
        title: 'White-Glove Coordination',
        body: 'Talent logistics, VIP hospitality, and day-of management keep stakeholders informed and the program on time.',
      },
    ],
    lists: [
      {
        title: 'Corporate Event Services',
        items: [
          'Brand & product launches',
          'Conferences & keynotes',
          'Private concerts & afterparties',
          'Stage & scenic design',
          'AV / LED production',
          'On-site production staffing',
        ],
      },
    ],
    closing: 'Partner with GEP Network to produce corporate events that perform like arena shows — with boardroom polish.',
  },
  {
    slug: 'event-management',
    title: 'Event Management & Promotions',
    eyebrow: 'We do event management',
    summary:
      'Effortlessly navigate the intricacies of event management with our seasoned team, where every challenge is met with a tailored solution.',
    heroImg: '/gep-service-event-management.png',
    intro: [
      'As expert event managers, GEP Network offers a comprehensive process that addresses front-of-house and back-of-house needs — creating a cohesive experience for attendees, talent, and stakeholders.',
    ],
    processTitle: 'Event Management, The Right Way',
    process: [
      { title: 'Theme Development', body: 'Creating and implementing thematic concepts for the event.' },
      { title: 'Logistics Planning', body: 'Developing comprehensive plans for scheduling, venue selection, and resource allocation.' },
      { title: 'Vendor and Supplier Coordination', body: 'Liaising with vendors and suppliers to secure necessary resources.' },
      { title: 'Budget Management', body: 'Creating and managing budgets to keep expenses within specified financial constraints.' },
      { title: 'Risk Assessment and Safety Planning', body: 'Identifying risks and implementing measures to mitigate them.' },
      { title: 'Marketing and Promotion', body: 'Developing strategies to promote the event and grow attendance.' },
      { title: 'Technical and Production Oversight', body: 'Overseeing audiovisual setup, stage management, and production crews.' },
      { title: 'Post-Event Analysis', body: 'Collecting feedback and evaluating success to improve future events.' },
    ],
    closing:
      'Let us handle the details while you focus on creating memorable experiences for your attendees.',
  },
  {
    slug: 'tour-pulls-and-tour-storage',
    title: 'Tour Pulls & Tour Storage',
    eyebrow: 'We do tour pulls and tour storage',
    summary:
      'Entrust your touring essentials to our tour pulls and storage solutions, where they’re stored and managed with the utmost care and precision.',
    heroImg: '/gep-tour-storage-multi-dock.png',
    intro: [
      'At GEP Network, our storage solutions are designed with the unique needs of the entertainment industry in mind. From tour pulls and equipment storage to long-term warehousing needs, we offer flexible, secure, and easily accessible storage services.',
    ],
    processTitle: 'Storage Solutions',
    process: [
      {
        title: 'Convenient Location & Availability',
        body: 'Strategically situated for logistics access, our facilities offer 24/7 availability with appointment-based pickups and deliveries that match the pace of touring.',
      },
      {
        title: 'Warehouse Storage With Loading Dock',
        body: 'Loading docks accommodate tour trucks of any size, making load-in and load-out seamless so your gear stays show-ready.',
      },
      {
        title: 'Commercial Equipment Storage',
        body: 'Secure, spacious storage for lighting, sound, and production gear — protected and organized between legs.',
      },
      {
        title: 'Long-Term & Short-Term Options',
        body: 'Flexible terms for multi-leg tours or quick turnarounds, with space that adapts to your inventory and schedule.',
      },
    ],
    lists: [
      {
        title: 'Included Capabilities',
        items: [
          '24/7 facility access',
          'Advanced security / CCTV',
          'Versatile storage footprints',
          'Forklifts, pallet jacks & dollies',
          'Flexible payment options',
        ],
      },
    ],
    closing:
      'Choose GEP Network for storage solutions that harmonize with the demands of your events.',
  },
  {
    slug: 'creative-design-services',
    title: 'Creative Design Services',
    eyebrow: 'We do creative design',
    summary:
      'Elevate your event with our creative and design expertise — from video content and venue conceptualization to stage configuration and merch design.',
    heroImg: '/gep-service-design-services.png',
    intro: [
      'GEP Network’s creative team helps translate artistic vision into buildable, tourable, and brand-true production design.',
      'We collaborate with artists, directors, and promoters on looks that photograph beautifully and execute cleanly night after night.',
    ],
    lists: [
      {
        title: 'Creative Capabilities',
        items: [
          'Venue conceptualization',
          'Stage configuration & scenic',
          'Video content direction',
          'Show flow & visual planning',
          'Merch design support',
          'Collaborative creative development',
        ],
      },
    ],
    closing: 'Bring us the idea — we’ll help shape it into a production audiences remember.',
  },
]

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}

export const SERVICE_NAV = SERVICE_PAGES.map((s) => ({
  title: s.title,
  summary: s.summary,
  slug: s.slug,
  img: s.heroImg,
}))
