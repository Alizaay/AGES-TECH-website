export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const percentage = (part, whole) =>
  whole === 0 ? 0 : (part / whole) * 100

export default { clamp, percentage }