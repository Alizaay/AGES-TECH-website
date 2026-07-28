import { company } from './company'

export const seo = {
  defaultTitle: company.name,
  titleTemplate: `%s | ${company.name}`,
  defaultDescription: company.tagline,
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  twitterHandle: '',
  locale: 'en_US',
}

export default seo