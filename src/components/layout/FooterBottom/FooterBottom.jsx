import { Link } from 'react-router-dom'
import footer from '@/data/footer'

const FooterBottom = () => {
  return (
    <div className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-2 px-5 py-4 text-center text-xs text-white/55 sm:flex-row sm:flex-wrap sm:gap-x-2 sm:px-6 sm:py-5 sm:text-sm md:px-8 lg:px-10">
        <p>
          {footer.copyright.before}{' '}
          <a
            href={footer.copyright.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/70 transition hover:text-white"
          >
            {footer.copyright.company}
          </a>
          . {footer.copyright.after}
        </p>
        {footer.links.legal.map((link) => (
          <span key={link.path + link.label} className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="text-white/35">
              |
            </span>
            <Link to={link.path} className="transition hover:text-white">
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}

export default FooterBottom
