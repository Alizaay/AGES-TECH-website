import { company } from '@/config/company'
import { contact } from '@/config/contact'
import { social } from '@/config/social'
import { seo } from '@/config/seo'

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  description: company.description,
  url: seo.siteUrl || undefined,
  email: contact.email || undefined,
  sameAs: Object.values(social).filter((url) => url && url !== '#'),
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: company.name,
  url: seo.siteUrl || undefined,
  description: company.tagline,
})

export const breadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export default { organizationSchema, websiteSchema, breadcrumbSchema }