import { motion } from 'framer-motion'
import clsx from 'clsx'
import logoMark from '@/assets/icons/logo.png'
import { useOrbitAnimation } from './useOrbitAnimation'
import type { OrbitProps } from './types'

function OrbitNode({
  number,
  title,
  icon,
}: {
  number: string
  title: string
  icon: string
}) {
  return (
    <div className="flex w-[78px] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-[88px] md:w-[96px] xl:w-[112px]">
      <span className="mb-1 flex size-[17px] items-center justify-center rounded-full bg-[#2F80ED] text-[8px] font-bold leading-none text-white sm:size-[20px] sm:text-[9px] md:size-[22px] md:text-[10px] xl:mb-1.5 xl:size-[24px] xl:text-[11px]">
        {number}
      </span>

      <span className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-[#D7E7F8] bg-white shadow-[0_8px_22px_rgba(16,42,67,0.12)] sm:size-11 md:size-12 xl:size-[64px]">
        <img
          src={icon}
          alt=""
          className="size-[72%] object-contain"
          width={44}
          height={44}
          draggable={false}
        />
      </span>

      <span className="mt-1.5 max-w-[78px] text-center text-[9px] font-semibold leading-snug text-[#0A1B3D] sm:mt-2 sm:max-w-[88px] sm:text-[10px] md:max-w-[96px] md:text-[11px] xl:max-w-[110px] xl:text-[12px]">
        {title}
      </span>
    </div>
  )
}

/**
 * Orbit sizes:
 * - Mobile: ~280px
 * - Tablet: ~340–380px
 * - Desktop xl: ~460px
 */
export function Orbit({
  categories,
  rotationSpeed = 40,
  centerLogo = logoMark,
  centerLogoClassName,
  className,
}: OrbitProps) {
  const items = categories[0]?.items ?? []

  const { containerRef, nodes, dots } = useOrbitAnimation({
    items,
    rotationSpeed,
    enabled: true,
    direction: 'clockwise',
  })

  return (
    <div
      className={clsx(
        'hero-orbit-root relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[460px]',
        className
      )}
      ref={containerRef}
      role="img"
      aria-label={`AGES-TECH framework: ${items.map((i) => i.title).join(', ')}`}
    >
      <div
        className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(100,170,255,0.28)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-[4%] rounded-full border border-[#D6E8F8]/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-[#C5DCF3]/65"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B8D4F0]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {dots.map((dot) => (
          <motion.span
            key={dot.key}
            className="absolute left-1/2 top-1/2 size-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80ED] sm:size-[5px]"
            style={{ x: dot.x, y: dot.y }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 z-30 flex size-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0A1B3D] shadow-[0_0_0_6px_rgba(47,128,237,0.1),0_0_0_12px_rgba(47,128,237,0.05),0_12px_28px_rgba(10,27,61,0.3)] sm:size-[76px] md:size-[88px] xl:size-[118px] xl:shadow-[0_0_0_8px_rgba(47,128,237,0.1),0_0_0_18px_rgba(47,128,237,0.05),0_18px_40px_rgba(10,27,61,0.3)]">
        <img
          src={centerLogo}
          alt="AGES-TECH"
          className={clsx('size-[52%] object-contain', centerLogoClassName)}
          width={60}
          height={60}
          draggable={false}
        />
      </div>

      <div className="absolute inset-0 z-20">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ x: node.x, y: node.y }}
          >
            <OrbitNode
              number={node.number}
              title={node.title}
              icon={node.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Orbit
