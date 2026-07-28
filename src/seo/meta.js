import { seo as seoConfig } from '@/config/seo'
import { company } from '@/config/company'

export const buildTitle = (title) => {
  if (!title || title === seoConfig.defaultTitle) return seoConfig.defaultTitle
  return seoConfig.titleTemplate.replace('%s', title)
}

export const buildMeta = ({
  title,
  description = seoConfig.defaultDescription,
  path = '/',
  image,
  noIndex = false,
} = {}) => {
  const fullTitle = buildTitle(title)
  const url = seoConfig.siteUrl ? `${seoConfig.siteUrl}${path}` : path

  return {
    title: fullTitle,
    description,
    canonical: url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      images: image ? [{ url: image }] : [],
      locale: seoConfig.locale,
      type: 'website',
    },
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
  }
}

export default { buildTitle, buildMeta }