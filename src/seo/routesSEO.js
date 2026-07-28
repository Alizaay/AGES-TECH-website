import { ROUTES } from '@/constants/routes'
import { company } from '@/config/company'

export const routesSEO = {
  [ROUTES.HOME]: {
    title: company.name,
    description: company.tagline,
    path: ROUTES.HOME,
  },
  [ROUTES.ABOUT]: {
    title: 'About',
    description: `Learn about ${company.name} — mission, vision, and leadership.`,
    path: ROUTES.ABOUT,
  },
  [ROUTES.SERVICES]: {
    title: 'Services',
    description: `Explore technology services from ${company.name}.`,
    path: ROUTES.SERVICES,
  },
  [ROUTES.PROJECT_JOURNEY]: {
    title: 'Project Journey',
    description: 'From discovery to growth — how we deliver products.',
    path: ROUTES.PROJECT_JOURNEY,
  },
  [ROUTES.CONTACT]: {
    title: 'Contact',
    description: `Get in touch with ${company.name}.`,
    path: ROUTES.CONTACT,
  },
  [ROUTES.PRIVACY_POLICY]: {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your information.',
    path: ROUTES.PRIVACY_POLICY,
    noIndex: false,
  },
  [ROUTES.NOT_FOUND]: {
    title: 'Page Not Found',
    description: 'The page you requested could not be found.',
    path: '/404',
    noIndex: true,
  },
}

export const getRouteSEO = (path) => routesSEO[path] || routesSEO[ROUTES.HOME]

export default routesSEO