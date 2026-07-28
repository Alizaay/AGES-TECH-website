/**
 * Primary site navigation with full-width mega-menu dropdowns.
 */
import { STAGES } from '@/data/stages'
import { services } from '@/data/services'

const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

export const navigation = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    sections: [
      { label: 'Who We Are', hash: 'who-we-are', icon: 'highlights' },
      { label: 'CEO Vision', hash: 'ceo-message', icon: 'ceo' },
      { label: 'Technologies', hash: 'technologies', icon: 'tech' },
      { label: 'Industries', hash: 'industries', icon: 'industries' },
      { label: 'In Progress', hash: 'in-progress', icon: 'progress' },
      { label: 'Highlights', hash: 'highlights', icon: 'highlights' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    sections: [
      {
        label: 'Intelligent SaaS',
        hash: 'intelligent-saas',
        to: '/services#intelligent-saas',
        iconSrc: serviceBySlug['intelligent-saas']?.icon,
      },
      {
        label: 'Strategic Consulting',
        hash: 'strategic-consulting',
        to: '/services#strategic-consulting',
        iconSrc: serviceBySlug['strategic-consulting']?.icon,
      },
      {
        label: 'Venture Partnership',
        hash: 'venture-partnership',
        to: '/services#venture-partnership',
        iconSrc: serviceBySlug['venture-partnership']?.icon,
      },
      {
        label: 'Innovation Lab',
        hash: 'innovation-lab',
        to: '/services#innovation-lab',
        iconSrc: serviceBySlug['innovation-lab']?.icon,
      },
    ],
  },
  {
    label: 'Project Journey',
    path: '/project-journey',
    sections: STAGES.map((stage) => ({
      label: stage.title,
      hash: stage.hash,
      iconSrc: stage.icon,
      iconBg: 'white',
    })),
  },
  { label: 'Contact Us', path: '/contact' },
]

export default navigation
