import { socialLinks } from '@/config/social'

const SocialLinks = ({ className = '' }) => {
  return (
    <ul className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks