export const formatNumber = (value, options = {}) =>
  new Intl.NumberFormat('en-US', options).format(value)

export const formatDate = (
  date,
  options = { year: 'numeric', month: 'long', day: 'numeric' }
) => new Intl.DateTimeFormat('en-US', options).format(new Date(date))

export { capitalize } from './strings'

export default { formatNumber, formatDate }