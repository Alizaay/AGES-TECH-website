import { api } from './api'

export const projectsService = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  getBySlug: (slug) => api.get(`/projects/slug/${slug}`),
}

export default projectsService