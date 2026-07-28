/**
 * Lightweight analytics facade — wire to GA / Plausible later.
 */
export const analytics = {
  track(event, payload = {}) {
    if (import.meta.env.DEV) {
      console.debug('[analytics]', event, payload)
    }
  },
  page(path) {
    this.track('page_view', { path })
  },
}

export default analytics