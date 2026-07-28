import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

const NotFound = () => {
  return (
    <section className="section">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-3 text-display">Page not found</h1>
        <p className="mt-4 max-w-md text-body">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link to="/" className="mt-8">
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </section>
  )
}

export default NotFound
