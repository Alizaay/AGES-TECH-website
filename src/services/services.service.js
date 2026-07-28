import { api } from './api'

export const servicesService = {
  getAll: () => api.get('/services'),
  getBySlug: (slug) => api.get(`/services/${slug}`),
}

export default servicesService