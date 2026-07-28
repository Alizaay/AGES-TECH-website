import { api } from './api'

export const newsletterService = {
  subscribe: (payload) => api.post('/newsletter/subscribe', payload),
  unsubscribe: (payload) => api.post('/newsletter/unsubscribe', payload),
}

export default newsletterService