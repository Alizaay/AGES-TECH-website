import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navigation/Navbar'
import Footer from './Footer'
import ScrollToTop from '@/components/feedback/ScrollToTop'
import useScrollToHash from '@/hooks/useScrollToHash'

const Layout = () => {
  useScrollToHash()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout