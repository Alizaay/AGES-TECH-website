export const approachSteps = [
  {
    id: 1,
    title: 'Strategy',
    description: 'We align business goals with the right opportunities.',
    icon: 'pieChart',
  },
  {
    id: 2,
    title: 'Architect',
    description: 'We design robust frameworks and scalable systems.',
    icon: 'layers',
  },
  {
    id: 3,
    title: 'Build',
    description: 'We engineer with precision, quality, and agility.',
    icon: 'code',
  },
  {
    id: 4,
    title: 'Launch',
    description: 'We deliver and deploy solutions that perform.',
    icon: 'rocket',
  },
  {
    id: 5,
    title: 'Optimize',
    description: 'We iterate, enhance, and scale for sustainable growth.',
    icon: 'barChart',
  },
]

export const whyCards = [
  {
    id: 1,
    title: 'Engineering First',
    description:
      'Every solution is built on strong technical foundations designed for reliability and performance.',
    accent: 'brand',
    icon: 'target',
  },
  {
    id: 2,
    title: 'Built for Scale',
    description:
      'We design systems that grow with your business — from early ventures to enterprise platforms.',
    accent: 'secondary',
    icon: 'boxes',
  },
  {
    id: 3,
    title: 'Industry Agnostic',
    description:
      'Our frameworks adapt across industries while staying grounded in real operational needs.',
    accent: 'accent',
    icon: 'globe',
  },
  {
    id: 4,
    title: 'End-to-End Partner',
    description:
      'From strategy to deployment and optimization, we stay with you through the full journey.',
    accent: 'brand',
    icon: 'monitor',
  },
  {
    id: 5,
    title: 'Innovation Culture',
    description:
      'We continuously explore better ways to solve problems through research, labs, and experimentation.',
    accent: 'secondary',
    icon: 'lightbulb',
  },
  {
    id: 6,
    title: 'Long-Term Focus',
    description:
      'We build partnerships and systems meant to create lasting value — not short-term wins.',
    accent: 'accent',
    icon: 'handshake',
  },
]

export const trustPoints = [
  {
    id: 1,
    title: 'Quick Response',
    description: 'We respond within 24 business hours.',
    icon: 'zap',
  },
  {
    id: 2,
    title: 'Tailored Solutions',
    description: 'Every engagement is custom to your goals.',
    icon: 'sliders',
  },
  {
    id: 3,
    title: 'Proven Expertise',
    description: 'Industry experience that drives real results.',
    icon: 'shield',
  },
  {
    id: 4,
    title: 'Long-Term Partner',
    description: 'We grow with you, for the long run.',
    icon: 'users',
  },
]

export const whyUs = {
  approach: {
    title: 'Our Approach',
    description:
      'We combine strategy, technology, and innovation to deliver integrated solutions that build ventures, engineer intelligent systems, and transform operations into scalable, future-ready business lines.',
    steps: approachSteps,
  },
  why: {
    badge: 'WHY AGES-TECH',
    title: {
      lead: 'Engineering Purpose.',
      accent: 'Delivering Impact.',
    },
    description:
      "We don't just deliver solutions — we engineer long-term value through purposeful design, scalable systems, and continuous innovation.",
    cards: whyCards,
  },
  cta: {
    title: "Ready to build what's next?",
    description: "Let's create lasting impact together.",
    buttonLabel: 'Start a Project',
    to: '/contactus', // Contact Us page
  },
  trustPoints,
}

export default whyUs
