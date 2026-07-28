export const isRequired = (value) =>
  value !== undefined && value !== null && String(value).trim() !== ''

export const isEmail = (value = '') =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase())

export const isPhone = (value = '') =>
  /^[+]?[\d\s()-]{7,}$/.test(String(value).trim())

export const minLength = (value = '', min = 2) => String(value).trim().length >= min

export const validateContactForm = (values) => {
  const errors = {}

  // Support both legacy `{ name }` and new `{ firstName, lastName }` shapes
  if (values.firstName !== undefined || values.lastName !== undefined) {
    if (!isRequired(values.firstName)) errors.firstName = 'First name is required'
    if (!isRequired(values.lastName)) errors.lastName = 'Last name is required'
  } else if (!isRequired(values.name)) {
    errors.name = 'Name is required'
  }

  if (!isRequired(values.email)) errors.email = 'Email is required'
  else if (!isEmail(values.email)) errors.email = 'Enter a valid email'

  if (values.phone && !isPhone(values.phone)) errors.phone = 'Enter a valid phone number'

  if (values.subject !== undefined && !isRequired(values.subject)) {
    errors.subject = 'Please select a subject'
  }

  if (!isRequired(values.message)) errors.message = 'Message is required'
  else if (!minLength(values.message, 10)) errors.message = 'Message is too short'

  return errors
}

export default {
  isRequired,
  isEmail,
  isPhone,
  minLength,
  validateContactForm,
}
