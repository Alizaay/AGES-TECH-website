import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Container from '@/components/common/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/common/FadeIn'
import { framework } from '@/data/home/framework'

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds || 0))
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function HighlightIcon({ name }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15l3-4 3 2 5-7" />
        </svg>
      )
    case 'diamond':
      return (
        <svg {...common}>
          <path d="M12 3l8 8-8 10L4 11l8-8z" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19" />
          <path d="M14 14.5c1.2 0 2.8.6 4 2.5" />
        </svg>
      )
    case 'target':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'map':
      return (
        <svg {...common}>
          <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      )
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9.5L10 14l4.5-1.5L16 9.5 14.5 9.5z" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <path d="M8 8L4 12l4 4M16 8l4 4-4 4M14 6l-4 12" />
        </svg>
      )
    case 'cycle':
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0113.5-5.8M20 12a8 8 0 01-13.5 5.8" />
          <path d="M17 3v4h4M7 21v-4H3" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M12 3c3 2 5 5.5 5 9.5 0 2-1 4-3 5.5L12 21l-2-3C8 16.5 7 14.5 7 12.5 7 8.5 9 5 12 3z" />
          <circle cx="12" cy="11" r="1.5" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
  }
}

function stageStartAt(stageIndex, count, totalDuration) {
  if (!totalDuration || count <= 0) return 0
  return (totalDuration / count) * stageIndex
}

function stageFromTime(time, stages, totalDuration) {
  let current = stages[0]
  for (let i = 0; i < stages.length; i += 1) {
    const start = stageStartAt(i, stages.length, totalDuration)
    if (time >= start) current = stages[i]
  }
  return current
}

const Framework = () => {
  const videoRef = useRef(null)
  const hasVideo = Boolean(framework.videoSrc)

  const [activeId, setActiveId] = useState(framework.defaultStageId)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(framework.duration)
  const [muted, setMuted] = useState(true)

  const activeStage =
    framework.stages.find((stage) => stage.id === activeId) || framework.stages[0]

  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0

  const seekToStage = useCallback(
    (stage) => {
      const index = framework.stages.findIndex((s) => s.id === stage.id)
      const start = stageStartAt(Math.max(0, index), framework.stages.length, duration)
      setActiveId(stage.id)
      setCurrentTime(start)

      const el = videoRef.current
      if (el && hasVideo) {
        el.currentTime = start
      }
    },
    [hasVideo, duration]
  )

  const togglePlay = useCallback(async () => {
    if (hasVideo) {
      const el = videoRef.current
      if (!el) return
      if (el.paused) {
        try {
          await el.play()
          setPlaying(true)
        } catch {
          setPlaying(false)
        }
      } else {
        el.pause()
        setPlaying(false)
      }
      return
    }

    setPlaying((prev) => !prev)
  }, [hasVideo])

  // Poster-only chapter playback: advance time + sync active stage
  useEffect(() => {
    if (hasVideo || !playing) return undefined

    const id = window.setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.25
        if (next >= duration) {
          setPlaying(false)
          return duration
        }
        const stage = stageFromTime(next, framework.stages, duration)
        setActiveId(stage.id)
        return next
      })
    }, 250)

    return () => window.clearInterval(id)
  }, [playing, hasVideo, duration])

  const onTimeUpdate = () => {
    const el = videoRef.current
    if (!el) return
    setCurrentTime(el.currentTime)
    const stage = stageFromTime(el.currentTime, framework.stages, el.duration || duration)
    if (stage.id !== activeId) setActiveId(stage.id)
  }

  const onSeekBar = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    const next = ratio * duration
    setCurrentTime(next)
    const stage = stageFromTime(next, framework.stages, duration)
    setActiveId(stage.id)

    if (videoRef.current && hasVideo) {
      videoRef.current.currentTime = next
    }
  }

  const toggleFullscreen = () => {
    const wrap = videoRef.current?.parentElement
    if (!wrap) return
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else {
      wrap.requestFullscreen?.()
    }
  }

  return (
    <section id="framework" className="section bg-[#F8FBFE]">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#BFD9F6] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2F80ED]">
              <span className="flex size-4 items-center justify-center rounded-full bg-[#2F80ED] text-white">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6.8 0L2 7h3.2L4.8 12 10 5H6.8L6.8 0z" />
                </svg>
              </span>
              {framework.badge}
            </span>
          </FadeIn>

          <FadeIn as="h2" delay={0.12} y={22} className="mt-5 font-primary text-3xl font-bold tracking-tight text-[#0A1B3D] sm:text-4xl lg:text-[2.75rem]">
            {framework.title}
          </FadeIn>
          <FadeIn as="p" delay={0.2} className="mt-4 text-base leading-relaxed text-[#5A6A7A] sm:text-lg">
            {framework.description}
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:items-center">
          {/* LEFT — video + stage content overlay */}
          <FadeIn y={24} amount={0.2} className="relative overflow-hidden rounded-[20px] bg-neutral-900 shadow-[0_24px_60px_rgba(16,42,67,0.18)] sm:rounded-[28px]">
            {hasVideo ? (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={framework.videoSrc}
                muted={muted}
                playsInline
                preload="auto"
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current?.duration) {
                    setDuration(videoRef.current.duration)
                  }
                }}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#132847] to-[#1E4A8C]"
                aria-hidden="true"
              />
            )}

            {/* Keep overlay readable over the road footage */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

            <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-4 sm:min-h-[480px] sm:p-8 lg:min-h-[560px] lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="max-w-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                    Stage
                  </p>
                  <p className="mt-1 font-primary text-4xl font-bold text-[#5BA8FF]/90 sm:text-6xl lg:text-7xl">
                    {activeStage.number}
                  </p>
                  <h3 className="mt-2 font-primary text-xl font-bold text-white sm:text-3xl">
                    {activeStage.title}
                  </h3>

                  <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-5">
                    {activeStage.highlights.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-[#4BA3FF]/80 bg-[#2F80ED]/20 text-[#9DC9FF] sm:size-8">
                          <HighlightIcon name={item.icon} />
                        </span>
                        <p className="min-w-0 text-sm leading-relaxed text-white/90 sm:text-[15px]">
                          <span className="font-semibold text-white">{item.title}</span>{' '}
                          <span className="text-white/80">{item.description}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {!playing && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-white/90 text-[#0A1B3D] shadow-lg transition hover:scale-105 hover:bg-white sm:size-[72px]"
                    aria-label="Play framework video"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.14v13.72L19 12 8 5.14z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Custom control bar */}
              <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl bg-black/50 px-3 py-2.5 text-xs text-white/85 backdrop-blur sm:mt-8 sm:flex-nowrap sm:gap-3 sm:rounded-full sm:px-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:size-10"
                  aria-label={playing ? 'Pause' : 'Play'}
                >
                  {playing ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M2 1h3v10H2V1zm5 0h3v10H7V1z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M3 1.5v9L10 6 3 1.5z" />
                    </svg>
                  )}
                </button>

                <span className="shrink-0 tabular-nums">
                  <span className="sm:hidden">{formatTime(currentTime)}</span>
                  <span className="hidden sm:inline">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </span>

                <button
                  type="button"
                  className="mx-0 h-3 min-w-0 flex-1 basis-full overflow-hidden rounded-full bg-white/20 sm:mx-1 sm:h-2 sm:basis-auto"
                  aria-label="Seek"
                  onClick={onSeekBar}
                >
                  <span
                    className="relative block h-full rounded-full bg-[#2F80ED]"
                    style={{ width: `${progress * 100}%` }}
                  >
                    <span className="absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-white shadow" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMuted((m) => !m)
                    if (videoRef.current) videoRef.current.muted = !muted
                  }}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:size-10"
                  aria-label={muted ? 'Unmute' : 'Mute'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    {muted ? (
                      <>
                        <path d="M11 5L6 9H3v6h3l5 4V5z" />
                        <path d="M16 9l5 5M21 9l-5 5" />
                      </>
                    ) : (
                      <>
                        <path d="M11 5L6 9H3v6h3l5 4V5z" />
                        <path d="M15.5 8.5a5 5 0 010 7M18.5 6a9 9 0 010 12" />
                      </>
                    )}
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 sm:size-10"
                  aria-label="Fullscreen"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — flow structure for the video stages */}
          <div className="relative flex flex-col justify-center lg:pl-2">
            <div
              className="pointer-events-none absolute bottom-7 left-[27px] top-7 w-px border-l border-dashed border-[#C9D7E8]"
              aria-hidden="true"
            />

            <FadeInStagger as="ul" className="relative space-y-3" stagger={0.05}>
              {framework.stages.map((stage) => {
                const isActive = stage.id === activeId

                return (
                  <FadeInItem key={stage.id} as="li">
                    <button
                      type="button"
                      onClick={() => {
                        seekToStage(stage)
                        if (playing && hasVideo && videoRef.current) {
                          videoRef.current.play?.()
                        }
                      }}
                      className={clsx(
                        'flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition sm:items-center',
                        isActive
                          ? 'border-[#2F80ED] bg-white shadow-[0_10px_28px_rgba(47,128,237,0.12)]'
                          : 'border-[#E6EEF7] bg-white/80 hover:border-[#BFD9F6] hover:bg-white'
                      )}
                    >
                      <span
                        className={clsx(
                          'flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                          isActive
                            ? 'bg-[#0A1B3D] text-white'
                            : 'bg-[#EEF3F8] text-[#7B8794]'
                        )}
                      >
                        {stage.number}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F0F6FC] sm:size-12">
                        <img
                          src={stage.icon}
                          alt=""
                          className="size-7 object-contain sm:size-8"
                        />
                      </span>
                      <span
                        className={clsx(
                          'min-w-0 flex-1 text-sm font-semibold leading-snug',
                          isActive ? 'text-[#0A1B3D]' : 'text-[#5A6A7A]'
                        )}
                      >
                        {stage.title}
                      </span>
                    </button>
                  </FadeInItem>
                )
              })}
            </FadeInStagger>
          </div>
        </div>

        <FadeIn as="p" delay={0.1} className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-[#7B8794]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#A0ADB8]">
            <rect x="6" y="2" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 6v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {framework.caption}
        </FadeIn>
      </Container>
    </section>
  )
}

export default Framework
