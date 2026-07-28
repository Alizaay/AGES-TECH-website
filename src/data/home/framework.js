import videoSrc from '@/assets/videos/road-ages-tech.mp4'
import { STAGES } from '@/data/stages'

const STAGE_HIGHLIGHTS = {
  1: [
    {
      icon: 'compass',
      title: 'Clarify the Vision.',
      description: 'Define goals, opportunities, and the outcomes that matter most.',
    },
    {
      icon: 'map',
      title: 'Understand the Landscape.',
      description: 'Map stakeholders, constraints, and market dynamics early.',
    },
    {
      icon: 'target',
      title: 'Align on Direction.',
      description: 'Establish a shared north star before building begins.',
    },
  ],
  2: [
    {
      icon: 'layers',
      title: 'Assess Feasibility.',
      description: 'Pressure-test technical and operational assumptions.',
    },
    {
      icon: 'check',
      title: 'Map Constraints.',
      description: 'Surface risks, dependencies, and resource requirements early.',
    },
    {
      icon: 'shield',
      title: 'Reduce Risk Early.',
      description: 'Identify blockers before they become expensive surprises.',
    },
  ],
  3: [
    {
      icon: 'layers',
      title: 'Design the Blueprint.',
      description: 'Shape scalable architecture aligned to business priorities.',
    },
    {
      icon: 'code',
      title: 'Define the System.',
      description: 'Translate strategy into clear technical and product plans.',
    },
    {
      icon: 'check',
      title: 'Align Stakeholders.',
      description: 'Create a shared build plan before engineering begins.',
    },
  ],
  4: [
    {
      icon: 'users',
      title: 'Prove Product-Market Fit.',
      description: 'Validate with real users and measurable success criteria.',
    },
    {
      icon: 'shield',
      title: 'Stress-Test Systems.',
      description: 'Ensure reliability under real-world operating conditions.',
    },
    {
      icon: 'chart',
      title: 'Refine Before Scale.',
      description: 'Close gaps that would limit growth later.',
    },
  ],
  5: [
    {
      icon: 'chart',
      title: 'Improve What Works.',
      description:
        'Analyze results, gather feedback, and continuously optimize for performance.',
    },
    {
      icon: 'diamond',
      title: 'Add Real Value.',
      description:
        'Enhance features, expand capabilities, and deliver greater customer impact.',
    },
    {
      icon: 'users',
      title: 'Grow with Purpose.',
      description:
        'Scale strategically with systems, partners, and processes built for long-term success.',
    },
  ],
  6: [
    {
      icon: 'rocket',
      title: 'Launch with Confidence.',
      description: 'Deploy production-ready systems with clear ownership.',
    },
    {
      icon: 'users',
      title: 'Enable Adoption.',
      description: 'Support teams with the tools and training they need.',
    },
    {
      icon: 'chart',
      title: 'Monitor Performance.',
      description: 'Track health, usage, and outcomes from day one.',
    },
  ],
  7: [
    {
      icon: 'cycle',
      title: 'Optimize Continuously.',
      description: 'Improve efficiency, experience, and operating leverage.',
    },
    {
      icon: 'layers',
      title: 'Expand Capabilities.',
      description: 'Extend platforms into new markets and use cases.',
    },
    {
      icon: 'chart',
      title: 'Sustain Momentum.',
      description: 'Build compounding growth through durable systems.',
    },
  ],
}

const STAGE_START_AT = {
  1: 0,
  2: 13,
  3: 26,
  4: 39,
  5: 52,
  6: 65,
  7: 78,
}

/**
 * 7-stage framework — left video chapters + right flow list.
 * Names/icons come from the shared STAGES source of truth.
 */
export const frameworkStages = STAGES.map((stage) => ({
  id: stage.id,
  number: stage.number,
  title: stage.title,
  icon: stage.icon,
  startAt: STAGE_START_AT[stage.id],
  highlights: STAGE_HIGHLIGHTS[stage.id],
}))

export const framework = {
  badge: 'THE 7-STAGE FRAMEWORK',
  title: 'From Idea to Impact. Built to Scale.',
  description:
    'Our proven 7-stage framework transforms opportunities into scalable systems that create real value and drive sustainable growth.',
  caption: 'Watch how we turn ideas into lasting impact through our 7-stage framework.',
  videoSrc,
  duration: 90,
  defaultStageId: 1,
  stages: frameworkStages,
}

export default framework
