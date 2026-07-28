import http from './axios'

/**
 * Generic API surface (backward compatible with previous api.js).
 */
export const api = {
  get: (endpoint, options) => http.get(endpoint, options),
  post: (endpoint, body, options) => http.post(endpoint, body, options),
  put: (endpoint, body, options) => http.put(endpoint, body, options),
  delete: (endpoint, options) => http.delete(endpoint, options),
}

export default api