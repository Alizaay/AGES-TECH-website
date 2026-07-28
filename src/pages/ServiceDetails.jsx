import { Navigate, useParams } from 'react-router-dom'

/**
 * Legacy /services/:slug routes redirect into the Services page
 * Service Details section via hash (no separate details page).
 */
const ServiceDetails = () => {
  const { slug } = useParams()
  const target = slug ? `/services#${slug}` : '/services'
  return <Navigate to={target} replace />
}

export default ServiceDetails
