import { STAGES } from '@/data/stages'
import stage1Img from '@/assets/journey/stage1.png'
import stage2Img from '@/assets/journey/stage2.png'
import stage3Img from '@/assets/journey/stage3.png'
import stage4Img from '@/assets/journey/stage4.png'
import stage5Img from '@/assets/journey/stage5.png'
import stage6Img from '@/assets/journey/stage6.png'
import stage7Img from '@/assets/journey/stage7.png'
import heroVisual from '@/assets/images/project-journey/hero-visual.png'

const STAGE_IMAGES = {
  1: stage1Img,
  2: stage2Img,
  3: stage3Img,
  4: stage4Img,
  5: stage5Img,
  6: stage6Img,
  7: stage7Img,
}

const STAGE_WORDS = [
  'ONE',
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
]

const STAGE_CONTENT = {
  1: {
    titleLead: 'Vision',
    titleAccent: 'Discovery',
    intro:
      'We start by understanding the big picture—exploring possibilities, identifying opportunities, and defining what success looks like.',
    cardTitle: { lead: 'Discover. Understand.', accent: 'Define the Right Direction.' },
    cardBody: [
      'Vision Discovery is where ideas begin to take shape. At this stage, AGES-TECH explores markets, trends, and user needs to uncover real opportunities.',
      'It\u2019s about clarity\u2014seeing what\u2019s possible, where value can be created, and what barriers must be overcome.',
      'Through insight and exploration, curiosity turns into direction and direction into a foundation for future growth.',
    ],
    points: [
      { icon: 'compass', text: 'Explore market trends and emerging technologies' },
      { icon: 'users', text: 'Understand user needs and pain points' },
      { icon: 'chart', text: 'Identify opportunities and areas of impact' },
      { icon: 'target', text: 'Define success and align on a shared vision' },
    ],
    badge: null,
  },
  2: {
    titleLead: 'Feasibility',
    titleAccent: 'Analysis',
    intro:
      'We evaluate every idea\u2019s potential through testing, validation, and alignment with real-world opportunities.',
    cardTitle: { lead: 'Validate. Test. Confirm', accent: 'the Opportunity.' },
    cardBody: [
      'Feasibility Analysis transforms promising ideas into validated opportunities. At this stage, AGES-TECH evaluates technical feasibility, market demand, operational readiness, and business viability to determine whether an idea can realistically become a scalable product or business line.',
    ],
    points: [
      { icon: 'check', text: 'Validate technical feasibility' },
      { icon: 'search', text: 'Assess market demand & competition' },
      { icon: 'layers', text: 'Evaluate operational readiness' },
      { icon: 'shield', text: 'Confirm business & investment viability' },
    ],
    badge: {
      title: 'Validation Complete',
      subtitle: 'Strong Potential Identified',
      position: 'top-right',
    },
  },
  3: {
    titleLead: 'Blueprint',
    titleAccent: 'Development',
    intro:
      'Turning vision into structure\u2014designing the core MVP, mapping user journeys, and building test-ready prototypes.',
    cardTitle: { lead: 'Design. Plan. Build', accent: 'With Purpose.' },
    cardBody: [
      'Blueprint Development turns ideas into a clear, actionable plan. AGES-TECH designs the core MVP, defines user experiences, and creates prototypes that validate functionality and usability before full-scale development.',
    ],
    points: [
      { icon: 'users', text: 'Define MVP scope and core features' },
      { icon: 'map', text: 'Map user journeys and experience flows' },
      { icon: 'layers', text: 'Create wireframes and interface models' },
      { icon: 'code', text: 'Develop interactive prototypes' },
      { icon: 'check', text: 'Validate concepts and refine for scalability' },
    ],
    badge: {
      title: 'Outcome',
      subtitle: 'Validated Blueprint',
      position: 'bottom-left',
    },
  },
  4: {
    titleLead: 'Product-',
    titleAccent: 'Market Fit',
    intro:
      'Turning validation into measurable growth through real-world insights, traction, and market alignment.',
    cardTitle: { lead: 'Validate. Measure. Align', accent: 'for Real Impact.' },
    cardBody: [
      'Product-Market Fit is where innovation meets the market. AGES-TECH tracks real user behavior, evaluates traction, and measures what matters most. Through data-driven feedback and continuous iteration, we ensure the solution delivers real value and scales with confidence.',
    ],
    points: [
      { icon: 'chart', text: 'Track user traction and adoption metrics' },
      { icon: 'users', text: 'Collect customer feedback and validate value' },
      { icon: 'search', text: 'Analyze market response and competitive positioning' },
      { icon: 'trending', text: 'Measure retention, engagement, and growth signals' },
      { icon: 'refresh', text: 'Iterate and optimize for sustainable scalability' },
    ],
    badge: {
      title: 'Market Validation',
      subtitle: 'Strong Product-Market Fit',
      position: 'bottom-right',
    },
  },
  5: {
    titleLead: 'Iteration &',
    titleAccent: 'Scaling',
    intro:
      'Evolve continuously, scale strategically, and create sustainable impact that grows with your business.',
    cardTitle: { lead: 'Improve. Expand. Scale', accent: 'With Purpose.' },
    cardBody: [
      'Iteration and Scaling is the evolution phase where AGES-TECH improves what works, expands value, and grows with purpose. Teams refine proven systems, optimize performance, and introduce enhancements guided by data and results. Each iteration strengthens the foundation while scaling operations sustainably \u2014 preparing solutions for broader impact.',
    ],
    points: [
      {
        icon: 'refresh',
        title: 'Continuous Improvement',
        description: 'Refine features and processes based on real insights',
      },
      {
        icon: 'settings',
        title: 'Performance Optimization',
        description: 'Enhance speed, reliability, and user experience',
      },
      {
        icon: 'message',
        title: 'User Feedback Integration',
        description: 'Turn feedback into meaningful, high-impact updates',
      },
      {
        icon: 'sparkles',
        title: 'Feature Expansion',
        description: 'Introduce enhancements that drive more value',
      },
      {
        icon: 'trending',
        title: 'Sustainable Growth',
        description: 'Scale operations and architecture for long-term success',
      },
    ],
    badge: null,
  },
  6: {
    titleLead: 'Go-To-',
    titleAccent: 'Market',
    intro:
      'Turn strategy into action and deliver your solution to the right audience at the right time with maximum impact.',
    cardTitle: { lead: 'Launch. Reach. Grow.', accent: 'Make an Impact.' },
    cardBody: [
      'Go-To-Market is where strategy becomes execution. AGES-TECH prepares a precise launch plan, identifies the right audience, and activates channels that drive real results. Through coordinated messaging, targeted outreach, and strategic positioning, your product enters the market with clarity and momentum.',
    ],
    points: [
      { icon: 'target', text: 'Define target audience and value proposition' },
      { icon: 'megaphone', text: 'Develop go-to-market strategy and launch plan' },
      { icon: 'briefcase', text: 'Activate marketing and sales channels' },
      { icon: 'chart', text: 'Track performance and optimize campaigns' },
      { icon: 'users', text: 'Build customer traction and market momentum' },
    ],
    footerIcons: [
      { icon: 'rocket', label: 'Precise Launch Plan' },
      { icon: 'target', label: 'Right Audience Targeting' },
      { icon: 'megaphone', label: 'Multi-Channel Activation' },
      { icon: 'chart', label: 'Data-Driven Optimization' },
      { icon: 'trending', label: 'Market Impact & Growth' },
    ],
    footerUnder: 'media',
    badge: null,
  },
  7: {
    titleLead: 'Growth &',
    titleAccent: 'Expansion',
    subtitle: 'Scale Beyond Success.',
    intro:
      'Strengthen your foundation, expand your reach, and build a legacy of impact.',
    cardTitle: {
      lead: 'Expand. Lead. Sustain.',
      accent: 'Build a business that continues to grow.',
    },
    cardBody: [
      'Growth & Expansion is the phase where innovation becomes an enduring business. AGES-TECH helps organizations scale operations, strengthen infrastructure, expand into new markets, and build resilient systems prepared for long-term success. The objective is not simply growth\u2014but sustainable growth supported by strategy, technology, and continuous improvement.',
    ],
    points: [
      {
        icon: 'globe',
        title: 'Market Expansion',
        description: 'Enter new regions and customer segments.',
      },
      {
        icon: 'layers',
        title: 'Operational Scale',
        description: 'Strengthen infrastructure for larger demand.',
      },
      {
        icon: 'handshake',
        title: 'Strategic Partnerships',
        description: 'Build alliances that accelerate growth.',
      },
      {
        icon: 'leaf',
        title: 'Long-Term Sustainability',
        description: 'Create resilient systems and recurring value.',
      },
      {
        icon: 'rocket',
        title: 'Global Impact',
        description: 'Transform successful products into industry leaders.',
      },
    ],
    footerIcons: [
      { icon: 'globe', label: 'Global Market Expansion' },
      { icon: 'trending', label: 'Sustainable Revenue Growth' },
      { icon: 'handshake', label: 'Enterprise Partnerships' },
      { icon: 'settings', label: 'Scalable Infrastructure' },
      { icon: 'rocket', label: 'Long-Term Business Success' },
    ],
    footerUnder: 'card',
    badge: null,
  },
}

export const journeyHero = {
  badge: 'THE AGES-TECH APPROACH',
  title: {
    before: 'A Clear Journey From',
    accent1: 'Idea',
    middle: 'to',
    accent2: 'Impact.',
  },
  description:
    'Our seven-stage framework turns ambitious ideas into scalable products through clarity, collaboration, and disciplined execution\u2014from first insight to lasting impact.',
  features: [
    {
      id: 'process',
      title: 'Purposeful Process',
      description: 'A proven framework that delivers results.',
      icon: 'target',
    },
    {
      id: 'partnership',
      title: 'Collaborative Partnership',
      description: 'We work with you, not just for you.',
      icon: 'users',
    },
    {
      id: 'impact',
      title: 'Measurable Impact',
      description: 'Turning effort into outcomes that matter.',
      icon: 'chart',
    },
  ],
  cta: { label: 'See Our 7-Stage Framework', to: '#framework' },
  visual: heroVisual,
  visualAlt: 'AGES-TECH seven-stage project journey illustration',
}

export const journeyFrameworkIntro = {
  badge: 'THE SEVEN-STAGE FRAMEWORK',
  title: 'A Structured Path to Success',
  description:
    'Each stage reduces uncertainty, aligns stakeholders, and moves the product forward with clear decisions and measurable outcomes.',
  callout: {
    number: '7',
    textBefore: 'Seven Stages. One Goal:',
    textAccent: 'Delivering Impact That Lasts.',
  },
}

export const journeyStages = STAGES.map((stage) => {
  const content = STAGE_CONTENT[stage.id]
  return {
    ...stage,
    stageWord: STAGE_WORDS[stage.id - 1],
    image: STAGE_IMAGES[stage.id],
    reverse: stage.id % 2 === 0,
    ...content,
  }
})

export default journeyStages
