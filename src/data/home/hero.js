import { STAGES } from '@/data/stages'
import client1 from '@/assets/images/home/avatars/client-1.jpg'
import client2 from '@/assets/images/home/avatars/client-2.jpg'
import client3 from '@/assets/images/home/avatars/client-3.jpg'
import client4 from '@/assets/images/home/avatars/client-4.jpg'

/** Figma / Project Journey — 7 stages evenly spaced (360° / 7) */
export const frameworkOrbitItems = STAGES.map((stage) => ({
  id: stage.slug,
  number: stage.number,
  title: stage.title,
  icon: stage.icon,
}))

export const heroOrbitCategories = [
  {
    id: 'framework',
    title: 'Our Framework',
    items: frameworkOrbitItems,
  },
]

/** @deprecated Prefer hero.categories */
export const heroStages = frameworkOrbitItems.map((item, index) => ({
  ...item,
  id: index + 1,
}))

export const hero = {
  eyebrow: ['DESIGN', 'BUILD', 'SCALE'],
  title: {
    lead: 'Engineering Intillegent',
    accent: 'Business Systems',
  },
  description:
    'We design intelligent systems, scalable ventures, and operational frameworks that transform ideas into sustainable business engines',
  primaryCt: {
    label: 'Begin Your Journey',
    to: '/contact',
  },
  secondaryCta: {
    label: 'Explore Our Framework',
    to: '/project-journey',
  },
  trust: {
    text: 'Trusted by educators, enterprises, and mission-driven teams.',
    rating: 5,
    avatars: [
      { src: client1, alt: 'Client' },
      { src: client2, alt: 'Client' },
      { src: client3, alt: 'Client' },
      { src: client4, alt: 'Client' },
    ],
  },
  frameworkBanner: {
    title: 'Our Framework',
    description:
      'A structured end-to-end approach that turns ideas into high-performance business engines.',
    linkLabel: 'See How It Works',
    to: '/project-journey',
  },
  categories: heroOrbitCategories,
  stages: heroStages,
}

export default hero
