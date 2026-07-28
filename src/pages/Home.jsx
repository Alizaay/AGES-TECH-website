import Hero from '@/components/sections/home/Hero'
import Framework from '@/components/sections/home/Framework'
import Services from '@/components/sections/home/Services'
import About from '@/components/sections/home/About'

/**
 * Home page section order matches Figma Final Design → Home:
 * Landing → Video (Framework) → Service Overview → Who are We
 * Footer is provided by Layout.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <Framework />
      <Services />
      <About />
    </>
  )
}

export default Home
