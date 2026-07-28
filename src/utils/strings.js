export const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

export const truncate = (text = '', length = 100) =>
  text.length <= length ? text : `${text.slice(0, length).trim()}...`

export const capitalize = (text = '') =>
  text.charAt(0).toUpperCase() + text.slice(1)

export default { slugify, truncate, capitalize }