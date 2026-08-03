import { useCallback, useEffect, useRef, useState } from 'react'
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

function stageStartAt(stage, stageIndex, stages, totalDuration) {
  if (typeof stage?.startAt === 'number') return stage.startAt
  if (!totalDuration || stages.length <= 0) return 0
  return (totalDuration / stages.length) * stageIndex
}

function stageFromTime(time, stages, totalDuration) {
  let current = stages[0]
  for (let i = 0; i < stages.length; i += 1) {
    const start = stageStartAt(stages[i], i, stages, totalDuration)
    if (time >= start) current = stages[i]
  }
  return current
}

const CONTROLS_HIDE_MS = 2500

const Framework = () => {
  const videoRef = useRef(null)
  const hideControlsTimer = useRef(null)
  const hasVideo = Boolean(framework.videoSrc)

  const [activeId, setActiveId] = useState(framework.defaultStageId)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(framework.duration)
  const [muted, setMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)

  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0

  const clearHideTimer = useCallback(() => {
    if (hideControlsTimer.current) {
      window.clearTimeout(hideControlsTimer.current)
      hideControlsTimer.current = null
    }
  }, [])

  const scheduleHideControls = useCallback(() => {
    clearHideTimer()
    hideControlsTimer.current = window.setTimeout(() => {
      setShowControls(false)
    }, CONTROLS_HIDE_MS)
  }, [clearHideTimer])

  const revealControls = useCallback(() => {
    setShowControls(true)
    if (playing) scheduleHideControls()
    else clearHideTimer()
  }, [playing, scheduleHideControls, clearHideTimer])

  useEffect(() => {
    if (playing) {
      setShowControls(true)
      scheduleHideControls()
    } else {
      clearHideTimer()
      setShowControls(true)
    }
    return clearHideTimer
  }, [playing, scheduleHideControls, clearHideTimer])

  const seekToStage = useCallback(
    (stage) => {
      const index = framework.stages.findIndex((s) => s.id === stage.id)
      const start = stageStartAt(stage, Math.max(0, index), framework.stages, duration)
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

  // Poster-only chapter playback fallback
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
    revealControls()
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

  const toggleMute = () => {
    revealControls()
    setMuted((m) => !m)
    if (videoRef.current) videoRef.current.muted = !muted
  }

  const toggleFullscreen = () => {
    revealControls()
    const wrap = videoRef.current?.parentElement
    if (!wrap) return
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else {
      wrap.requestFullscreen?.()
    }
  }

  const onVideoSurfaceClick = () => {
    if (!playing) return
    if (showControls) setShowControls(false)
    else revealControls()
  }

  const controlsVisible = !playing || showControls

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

          <FadeIn
            as="h2"
            delay={0.12}
            y={22}
            className="mt-5 font-primary text-3xl font-bold tracking-tight text-[#0A1B3D] sm:text-4xl lg:text-[2.75rem]"
          >
            {framework.title}
          </FadeIn>
          <FadeIn as="p" delay={0.2} className="mt-4 text-base leading-relaxed text-[#5A6A7A] sm:text-lg">
            {framework.description}
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:items-center">
          {/* LEFT — video only (stage copy is baked into the footage) */}
          <FadeIn
            y={24}
            amount={0.2}
            className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_24px_60px_rgba(16,42,67,0.18)] sm:rounded-[28px]"
          >
            <div
              className="relative aspect-video w-full min-h-[220px] sm:min-h-[360px] lg:min-h-[420px]"
              onClick={onVideoSurfaceClick}
              onMouseMove={revealControls}
            >
              {hasVideo ? (
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-contain"
                  src={framework.videoSrc}
                  muted={muted}
                  playsInline
                  preload="metadata"
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

              {!playing && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/25">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlay()
                    }}
                    className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-white/90 text-[#0A1B3D] shadow-lg transition hover:scale-105 hover:bg-white sm:size-[72px]"
                    aria-label="Play framework video"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.14v13.72L19 12 8 5.14z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Mobile — compact top-right controls */}
              <div
                className={clsx(
                  'absolute right-2.5 top-2.5 z-20 flex items-center gap-1.5 rounded-full bg-black/60 p-1 text-white backdrop-blur transition-opacity duration-300 sm:hidden',
                  controlsVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10"
                  aria-label={playing ? 'Pause' : 'Play'}
                >
                  {playing ? (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M2 1h3v10H2V1zm5 0h3v10H7V1z" />
                    </svg>
                  ) : (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M3 1.5v9L10 6 3 1.5z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10"
                  aria-label={muted ? 'Unmute' : 'Mute'}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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
                  className="flex size-9 items-center justify-center rounded-full bg-white/10"
                  aria-label="Fullscreen"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                </button>
              </div>

              {/* Desktop — bottom control bar */}
              <div
                className={clsx(
                  'absolute inset-x-0 bottom-0 z-20 hidden p-3 transition-opacity duration-300 sm:block sm:p-4',
                  controlsVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 rounded-full bg-black/55 px-4 py-2.5 text-xs text-white/85 backdrop-blur">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
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
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <button
                    type="button"
                    className="mx-1 h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white/20"
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
                    onClick={toggleMute}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
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
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                    aria-label="Fullscreen"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — stage list synced to video chapters */}
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
                          isActive ? 'bg-[#0A1B3D] text-white' : 'bg-[#EEF3F8] text-[#7B8794]'
                        )}
                      >
                        {stage.number}
                      </span>
                      <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F0F6FC] sm:size-12">
                        <img src={stage.icon} alt="" className="size-7 object-contain sm:size-8" />
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

        <FadeIn
          as="p"
          delay={0.1}
          className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-[#7B8794]"
        >
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
