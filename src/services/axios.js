/**
 * HTTP client adapter.
 * Uses native fetch today; swap implementation for Axios when installed:
 *   npm install axios
 */
const API_URL = import.meta.env.VITE_API_URL || ''

const defaultHeaders = {
  'Content-Type': 'application/json',
}

async function client(endpoint, { method = 'GET', body, headers, ...options } = {}) {
  const url = `${API_URL}${endpoint}`
  const response = await fetch(url, {
    method,
    headers: { ...defaultHeaders, ...headers },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || `Request failed: ${response.status}`)
  }

  if (response.status === 204) return null
  return response.json()
}

export const http = {
  get: (endpoint, options) => client(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options) => client(endpoint, { ...options, method: 'POST', body }),
  put: (endpoint, body, options) => client(endpoint, { ...options, method: 'PUT', body }),
  patch: (endpoint, body, options) => client(endpoint, { ...options, method: 'PATCH', body }),
  delete: (endpoint, options) => client(endpoint, { ...options, method: 'DELETE' }),
}

export default http