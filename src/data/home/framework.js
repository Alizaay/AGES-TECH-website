import videoSrc from '@/assets/videos/Ages-tech.mp4'
import { STAGES } from '@/data/stages'

/**
 * 7-stage timestamps (seconds) — evenly paced across the ~56s video.
 * Adjust these if chapter markers in the new footage differ.
 */
const STAGE_START_AT = {
  1: 0,
  2: 8,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
}

/**
 * 7-stage framework — video on the left, stage list on the right.
 * On-video copy lives in the footage; UI no longer overlays stage text.
 */
export const frameworkStages = STAGES.map((stage) => ({
  id: stage.id,
  number: stage.number,
  title: stage.title,
  icon: stage.icon,
  startAt: STAGE_START_AT[stage.id],
}))

export const framework = {
  badge: 'THE 7-STAGE FRAMEWORK',
  title: 'From Idea to Impact. Built to Scale.',
  description:
    'Our proven 7-stage framework transforms opportunities into scalable systems that create real value and drive sustainable growth.',
  caption: 'Watch how we turn ideas into lasting impact through our 7-stage framework.',
  videoSrc,
  duration: 56,
  defaultStageId: 1,
  stages: frameworkStages,
}

export default framework
