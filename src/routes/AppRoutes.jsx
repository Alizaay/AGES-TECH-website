import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import ServiceDetails from '@/pages/ServiceDetails'
import ProjectJourney from '@/pages/ProjectJourney'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import { ROUTES } from '@/constants/routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT.slice(1)} element={<About />} />
        <Route path={ROUTES.SERVICES.slice(1)} element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetails />} />
        <Route path={ROUTES.PROJECT_JOURNEY.slice(1)} element={<ProjectJourney />} />
        <Route path={ROUTES.CONTACT.slice(1)} element={<Contact />} />
        <Route path="contactus" element={<Contact />} />
        <Route path={ROUTES.PRIVACY_POLICY.slice(1)} element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
