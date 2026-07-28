export { company } from './company'
export { contact } from './contact'
export { navigation } from './navigation'
export { social, socialLinks } from './social'
export { seo } from './seo'

import { company } from './company'
import { contact } from './contact'
import { social } from './social'

/** Aggregated app config (backward-compatible shape) */
export const config = {
  appName: company.name,
  apiUrl: import.meta.env.VITE_API_URL || '',
  contactEmail: contact.email,
  social,
}

export default config