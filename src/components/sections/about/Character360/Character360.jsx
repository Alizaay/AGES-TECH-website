import Container from '@/components/common/Container'
import { FadeIn } from '@/components/common/FadeIn'
import { character360 } from '@/data/about'
import ProductShowcase from './ProductShowcase'

const Character360 = () => {
  return (
    <section id="in-progress" className="scroll-mt-28 overflow-x-clip bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F80ED] sm:text-xs">
            <span className="h-px w-7 bg-[#2F80ED]" aria-hidden="true" />
            {character360.badge}
          </p>
          <h2 className="font-primary text-[1.5rem] font-bold leading-tight text-[#0A1B3D] sm:text-[1.75rem] md:text-3xl lg:text-4xl">
            {character360.title.lead}{' '}
            <span className="text-[#2F80ED]">{character360.title.accent}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6B7A8A] sm:mt-4 sm:text-[15px] md:text-base">
            {character360.description}
          </p>
        </FadeIn>

        <ProductShowcase
          projects={character360.projects}
          ecosystem={character360.ecosystem}
        />
      </Container>
    </section>
  )
}

export default Character360
