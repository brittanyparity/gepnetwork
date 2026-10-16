export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }

export type BlogPost = {
  slug: string
  title: string
  date: string
  thumbnail: string
  heroImage: string
  excerpt: string
  blocks: BlogBlock[]
  callout: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-event-production',
    title: 'The Future of Event Production',
    date: 'March 5, 2024',
    thumbnail: '/blog-img-1.jpg',
    heroImage: '/blog-img-1.jpg',
    excerpt:
      'Technology, sustainability, and hybrid formats are reshaping how live events connect with audiences worldwide.',
    blocks: [
      {
        type: 'paragraph',
        text: 'The landscape of concert and event production is undergoing a seismic shift, heralding a future where technology and sustainability become the cornerstones of unforgettable live experiences. As we venture deeper into the 21st century, the pulse of the music industry beats in tandem with innovative trends that promise to redefine what it means to be part of a live audience.',
      },
      { type: 'heading', text: 'The Digital Renaissance' },
      {
        type: 'paragraph',
        text: 'In the heart of this transformation lies the digital renaissance—a movement propelled by virtual and augmented reality technologies that offer attendees an immersive experience unparalleled by traditional formats. Imagine standing in the crowd, not just as a spectator but as a participant in a concert that transcends physical boundaries, where the lines between reality and digital artistry blur. This integration of VR and AR into event production isn’t just futuristic—it’s revolutionizing the way artists connect with their fans.',
      },
      { type: 'heading', text: 'Sustainability: The New Encore' },
      {
        type: 'paragraph',
        text: 'Parallel to the digital wave is the rise of sustainability, a trend that’s rapidly becoming the industry’s new encore. Event producers are embracing eco-friendly practices, from minimizing waste to utilizing renewable energy sources, crafting experiences that not only thrill but also respect our planet. This shift towards green production is not just an ethical choice but a response to the growing demand for environmental stewardship within the entertainment sphere.',
      },
      { type: 'heading', text: 'Hybrid Events: The Best of Both Worlds' },
      {
        type: 'paragraph',
        text: 'The advent of hybrid events marks a pivotal evolution in concert and event production. Combining live performances with digital platforms, these events offer global accessibility, ensuring that no fan is left behind. Hybrid formats are a testament to the industry’s adaptability, providing a solution that marries the irreplaceable energy of live shows with the inclusivity of online streaming.',
      },
      { type: 'heading', text: 'Conclusion: Harmonizing with the Future' },
      {
        type: 'paragraph',
        text: 'As we look to the future, the path for concert and event production is clear: adapt, innovate, and sustain. Embracing these trends not only enhances the audience’s experience but also sets a new standard for what events can be. For artists and producers alike, the message is to lean into the future, harnessing these innovations to create experiences that resonate on a global scale.',
      },
      {
        type: 'paragraph',
        text: 'The future of concerts and events is a symphony of technology, sustainability, and connectivity. As we tune into the echoes of tomorrow, the industry stands on the brink of an era where live experiences are more immersive, inclusive, and environmentally conscious than ever before.',
      },
    ],
    callout:
      'The advent of hybrid events marks a pivotal evolution in concert and event production. Combining live performances with digital platforms, these events offer global accessibility, ensuring that no fan is left behind.',
  },
  {
    slug: 'art-of-event-management',
    title: 'The Art of Event Management',
    date: 'March 5, 2024',
    thumbnail: '/em-img-1.png',
    heroImage: '/em-img-1.png',
    excerpt:
      'How cohesion, team leadership, and calm problem-solving turn complex events into unified experiences.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Event management is an orchestration of moving parts, a symphony where every player, every instrument, must come together to create a harmonious outcome. It’s an art that demands not just a vision but a rigorous attention to detail and an unwavering calm in the face of chaos. This article takes you through the foundational principles of effective event management, from aligning the minutiae to realizing the grand vision.',
      },
      {
        type: 'paragraph',
        text: 'The essence of event management lies in component cohesion – the seamless integration of diverse elements into a single, unified experience. Imagine an international conference or a music festival; each requires a different set of skills, a different approach to coordination, and a unique method of execution. From the lighting that sets the mood to the sound that carries the message, each element is crucial. The event manager is the one who weaves these disparate threads into a tapestry that tells a story, conveys a message, or sells a brand.',
      },
      {
        type: 'paragraph',
        text: 'The human element is central to this narrative. Managing a team is much like directing a cast in a play. Each member has a role, responsibilities, and a part to play in the grander scheme. A good manager knows their team’s strengths and weaknesses, deploying them in roles where they can shine and provide the most value. This extends to the selection and management of vendors and suppliers, whose contributions can significantly impact the event’s success.',
      },
      {
        type: 'paragraph',
        text: 'Venue maximization is another critical aspect. The choice of venue can set the tone for an event, and utilizing the space effectively can elevate the experience. It’s about understanding the venue’s capacity not just in terms of size but potential. The when of event management is not just about dates on a calendar; it’s about the timing of decisions, announcements, and the execution of various phases of the event lifecycle.',
      },
      {
        type: 'paragraph',
        text: 'At the core of event management is problem-solving – the ability to identify issues before they arise and to react swiftly when they do. This requires a deep understanding of every facet of the event, from the technical specifications of the sound system to the preferences of the keynote speaker.',
      },
      {
        type: 'paragraph',
        text: 'In conclusion, effective event management is a multifaceted discipline that combines strategic planning with dynamic execution. It requires a balance of hard skills like organization and soft skills like communication. To aspiring event managers, our advice is to cultivate not just a keen eye for detail but also an adaptive mindset. The landscape of events is ever-changing, and the ability to navigate this terrain with confidence and competence is what will define your success.',
      },
    ],
    callout:
      "Managing a team is much like directing a cast in a play. Each member has a role, responsibilities, and a part to play in the grander scheme. A good manager knows their team's strengths and weaknesses, deploying them in roles where they can shine and provide the most value.",
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
