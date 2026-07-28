import service1 from '@/assets/icons/Service1.png'
import service2 from '@/assets/icons/Service2.png'
import service3 from '@/assets/icons/Service3.png'
import service4 from '@/assets/icons/Service4.png'
import illustration1 from '@/assets/illustrations/1.png'
import illustration2 from '@/assets/illustrations/2.png'
import illustration3 from '@/assets/illustrations/3.png'
import illustration4 from '@/assets/illustrations/4.png'

export const servicesHero = {
  badge: 'OUR SERVICES',
  title: {
    line1: 'Comprehensive Solutions.',
    line2: 'Measurable',
    accent: 'Impact.',
  },
  description:
    'AGES-TECH combines strategy, technology, and innovation to deliver integrated services that power scalable business lines and create lasting value.',
  primaryCta: { label: 'Start a Project', to: '/contactus' },
  secondaryCta: { label: 'How It Works', to: '/project-journey' },
  exploreLabel: 'Explore All Services',
  exploreTo: '#service-details',
  orbit: [
    {
      id: 'strategy',
      slug: 'strategic-consulting',
      title: 'Strategy & Consulting',
      description:
        'Define the right strategy, optimize operations, and build roadmaps for growth and efficiency.',
      iconSrc: service2,
      accent: 'purple',
      position: 'top-left',
    },
    {
      id: 'systems',
      slug: 'intelligent-saas',
      title: 'Systems & Technology',
      description:
        'Design and engineer intelligent systems and digital solutions that solve complex challenges.',
      iconSrc: service1,
      accent: 'blue',
      position: 'top-right',
    },
    {
      id: 'saas',
      slug: 'intelligent-saas',
      title: 'SaaS Platform Development',
      description:
        'Build secure, scalable SaaS platforms that transform ideas into powerful digital products.',
      iconSrc: service3,
      accent: 'teal',
      position: 'bottom-left',
    },
    {
      id: 'innovation',
      slug: 'innovation-lab',
      title: 'Innovation Lab & Educational Initiatives',
      description:
        'Invest in research, labs, and education to empower the next generation and drive meaningful innovation.',
      iconSrc: service4,
      accent: 'violet',
      position: 'bottom-right',
    },
  ],
  stats: [
    {
      id: 'industries',
      value: '25+',
      label: 'Industries Served',
      description: 'Across multiple domains and geographies',
      icon: 'building',
    },
    {
      id: 'projects',
      value: '120+',
      label: 'Projects Delivered',
      description: 'Successful engagements with measurable impact',
      icon: 'users',
    },
    {
      id: 'partners',
      value: '30+',
      label: 'Global Partners',
      description: 'Strong network of technology and business partners',
      icon: 'globe',
    },
    {
      id: 'satisfaction',
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Long-term relationships built on trust and results',
      icon: 'heart',
    },
  ],
}

export const servicesOverview = {
  badge: 'OUR SERVICES',
  title: {
    lead: 'Solutions Designed to Scale.',
    accent: 'Impact That Lasts.',
  },
  description:
    'AGES-TECH delivers integrated services across strategy, technology, and innovation to solve complex challenges and accelerate growth.',
}

export const services = [
  {
    id: 1,
    slug: 'intelligent-saas',
    number: '01',
    title: 'Intelligent Systems & SaaS Development',
    shortTitle: 'Intelligent Systems & SaaS Development',
    tabLabel: 'Intelligent SaaS',
    description:
      'We engineer intelligent digital platforms that connect people, processes, and performance. From tailored SaaS solutions to automated systems, AGES-TECH builds scalable technologies that simplify operations and drive data-informed growth.',
    cardDescription:
      'Intelligent platforms and SaaS that connect people, processes, and performance.',
    accent: 'blue',
    icon: service1,
    illustration: illustration1,
    iconKey: 'target',
    features: ['Scalable platforms', 'Secure architecture', 'Intelligent automation'],
    detailsHeading: 'Intelligent Solutions. Scalable Impact.',
    detailsDescription:
      'We design and build intelligent systems and SaaS platforms that streamline operations, automate processes, and deliver real-time insights—empowering businesses to scale with confidence.',
    capabilities: [
      {
        id: 'saas-consulting',
        title: 'SaaS Consulting',
        description: 'Plan and define your SaaS product strategy and roadmap.',
        icon: 'settings',
      },
      {
        id: 'prototyping',
        title: 'SaaS Prototyping & Design',
        description: 'Create intuitive UI/UX prototypes and validate ideas quickly.',
        icon: 'penTool',
      },
      {
        id: 'development',
        title: 'Application Development',
        description: 'Build secure, scalable, and high-performance SaaS platforms.',
        icon: 'cpu',
      },
      {
        id: 'migration',
        title: 'SaaS Migration',
        description: 'Modernize and migrate your systems with zero disruption.',
        icon: 'refresh',
      },
      {
        id: 'integrations',
        title: 'Integrations',
        description: 'Connect APIs, third-party tools, and enterprise systems seamlessly.',
        icon: 'link',
      },
      {
        id: 'support',
        title: 'Support & Maintenance',
        description: 'Provide continuous support, updates, and system improvements.',
        icon: 'wrench',
      },
      {
        id: 'security',
        title: 'Security',
        description: 'Ensure data protection, compliance, and robust security at every layer.',
        icon: 'shield',
      },
      {
        id: 'performance',
        title: 'Performance Optimization',
        description: 'Optimize architecture and performance to boost speed and efficiency.',
        icon: 'gauge',
      },
    ],
    values: [
      {
        id: 'client',
        title: 'Client-Centric Approach',
        description: 'Solutions tailored to your business goals and user needs.',
        icon: 'users',
      },
      {
        id: 'scalable',
        title: 'Scalable by Design',
        description: 'Built to grow with your business and adapt to change.',
        icon: 'barChart',
      },
      {
        id: 'secure',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade solutions with a focus on reliability and security.',
        icon: 'shield',
      },
      {
        id: 'results',
        title: 'Measurable Results',
        description: 'We deliver outcomes that drive efficiency, growth, and value.',
        icon: 'cloud',
      },
    ],
  },
  {
    id: 2,
    slug: 'strategic-consulting',
    number: '02',
    title: 'Strategic & Operational Consulting',
    shortTitle: 'Strategic & Operational Consultant',
    tabLabel: 'Strategic Consulting',
    description:
      'AGES-TECH empowers organizations to transform ideas into actionable strategies. We design clear operational frameworks, enhance efficiency, and align business objectives with long-term vision to ensure measurable, sustainable success.',
    cardDescription:
      'Actionable strategies and operational frameworks that drive measurable growth.',
    accent: 'purple',
    icon: service2,
    illustration: illustration2,
    iconKey: 'handshake',
    features: ['Growth roadmaps', 'Operational clarity', 'Decision frameworks'],
    detailsHeading: 'Strategy That Moves Organizations Forward.',
    detailsDescription:
      'We help leadership teams clarify direction, strengthen operations, and turn complex challenges into practical roadmaps with measurable outcomes.',
    capabilities: [
      {
        id: 'assessment',
        title: 'Strategy Assessment',
        description: 'Evaluate current state and define priorities for growth.',
        icon: 'search',
      },
      {
        id: 'excellence',
        title: 'Operational Excellence',
        description: 'Improve processes, workflows, and execution quality.',
        icon: 'workflow',
      },
      {
        id: 'process',
        title: 'Business Process Design',
        description: 'Design clear frameworks that align teams and outcomes.',
        icon: 'gitBranch',
      },
      {
        id: 'intelligence',
        title: 'Market Intelligence',
        description: 'Analyze markets, competitors, and opportunity spaces.',
        icon: 'radar',
      },
      {
        id: 'performance',
        title: 'Performance Management',
        description: 'Install metrics and systems that sustain progress.',
        icon: 'barChart',
      },
      {
        id: 'change',
        title: 'Change Management',
        description: 'Guide teams through transformation with clarity.',
        icon: 'refresh',
      },
      {
        id: 'risk',
        title: 'Risk & Impact Management',
        description: 'Identify risks early and protect strategic outcomes.',
        icon: 'shield',
      },
      {
        id: 'comms',
        title: 'Communication Support',
        description: 'Align stakeholders with clear messaging and cadence.',
        icon: 'message',
      },
    ],
    values: [
      {
        id: 'outcome',
        title: 'Outcome Focused',
        description: 'Every engagement is measured by real business results.',
        icon: 'target',
      },
      {
        id: 'value',
        title: 'Value-Driven Decisions',
        description: 'Prioritize initiatives that create lasting value.',
        icon: 'sparkles',
      },
      {
        id: 'frameworks',
        title: 'Scalable Frameworks',
        description: 'Build operating models that grow with your organization.',
        icon: 'layers',
      },
      {
        id: 'growth',
        title: 'Sustainable Growth',
        description: 'Create momentum that compounds over time.',
        icon: 'trending',
      },
    ],
  },
  {
    id: 3,
    slug: 'venture-partnership',
    number: '03',
    title: 'Venture Partnership & Business Integration',
    shortTitle: 'Venture Partnership & Business Integration',
    tabLabel: 'Venture Partnership',
    description:
      'AGES-TECH partners with existing businesses to embed innovative frameworks and digital capabilities within their core operations. Through collaboration, we optimize efficiency, enhance scalability, and position ventures for future expansion.',
    cardDescription:
      'Embed digital capabilities and partnership models that scale with your venture.',
    accent: 'teal',
    icon: service3,
    illustration: illustration3,
    iconKey: 'shield',
    features: ['System integration', 'Venture support', 'Long-term partnership'],
    detailsHeading: 'Partnership Built for Long-Term Scale.',
    detailsDescription:
      'We work alongside ventures and enterprises to integrate technology, process, and strategy—so growth is durable, not temporary.',
    capabilities: [
      {
        id: 'partnership',
        title: 'Strategic Partnership',
        description: 'Align shared goals and build collaborative growth models.',
        icon: 'handshake',
      },
      {
        id: 'adaptation',
        title: 'Business Adaptation',
        description: 'Evolve operating models for new markets and products.',
        icon: 'refresh',
      },
      {
        id: 'digital',
        title: 'Digital Capability Integration',
        description: 'Embed modern systems into core business operations.',
        icon: 'cpu',
      },
      {
        id: 'venture',
        title: 'Investment & Venture Planning',
        description: 'Support venture planning with clear technical roadmaps.',
        icon: 'briefcase',
      },
      {
        id: 'coevolution',
        title: 'Co-Evolution Framework',
        description: 'Grow products and organizations together over time.',
        icon: 'gitBranch',
      },
      {
        id: 'ops',
        title: 'Operational Excellence',
        description: 'Strengthen delivery, quality, and execution rhythms.',
        icon: 'workflow',
      },
      {
        id: 'scale',
        title: 'Scalability & Growth',
        description: 'Prepare systems and teams for the next stage of growth.',
        icon: 'trending',
      },
      {
        id: 'integration',
        title: 'Post-Acquisition Integration',
        description: 'Unify people, process, and platforms after acquisition.',
        icon: 'link',
      },
    ],
    values: [
      {
        id: 'cycle',
        title: 'Venture-Ready Focus',
        description: 'Built for founders, operators, and growth partners.',
        icon: 'rocket',
      },
      {
        id: 'efficiency',
        title: 'Efficiency Driven',
        description: 'Reduce friction while increasing delivery capacity.',
        icon: 'zap',
      },
      {
        id: 'global',
        title: 'Global Reach',
        description: 'Support cross-border collaboration and expansion.',
        icon: 'globe',
      },
      {
        id: 'seamless',
        title: 'Seamless Integration',
        description: 'Connect systems and teams without disrupting momentum.',
        icon: 'link',
      },
    ],
  },
  {
    id: 4,
    slug: 'innovation-lab',
    number: '04',
    title: 'Innovation Lab & Educational Initiatives',
    shortTitle: 'Innovation Lab & Educational Initiatives',
    tabLabel: 'Innovation Lab',
    description:
      'Our Innovation Lab cultivates creativity, learning, and technological advancement. By merging research with real-world application, AGES-TECH develops programs that inspire teams, accelerate innovation, and build the foundations for tomorrow\'s success.',
    cardDescription:
      'Research, education, and innovation programs that build future-ready capability.',
    accent: 'violet',
    icon: service4,
    illustration: illustration4,
    iconKey: 'lightbulb',
    features: ['Research labs', 'Education programs', 'Future-ready talent'],
    detailsHeading: 'Innovation That Builds Tomorrow’s Talent.',
    detailsDescription:
      'We combine research, prototyping, and education to create products and programs that advance technology and empower people.',
    capabilities: [
      {
        id: 'rd',
        title: 'Research & Development',
        description: 'Explore emerging ideas and validate technical possibilities.',
        icon: 'flask',
      },
      {
        id: 'product',
        title: 'Product Innovation',
        description: 'Turn concepts into prototypes and market-ready products.',
        icon: 'sparkles',
      },
      {
        id: 'education',
        title: 'Educational Programs',
        description: 'Design learning experiences that build real capability.',
        icon: 'graduation',
      },
      {
        id: 'ecosystem',
        title: 'Industry Expertise Ecosystem',
        description: 'Connect practitioners, mentors, and domain experts.',
        icon: 'network',
      },
      {
        id: 'labs',
        title: 'Labs & Prototyping',
        description: 'Rapidly test solutions in controlled innovation environments.',
        icon: 'beaker',
      },
      {
        id: 'incubation',
        title: 'Startup Incubation Support',
        description: 'Help early ventures refine product, process, and go-to-market.',
        icon: 'rocket',
      },
      {
        id: 'community',
        title: 'Community Engagement',
        description: 'Build communities that learn, share, and create together.',
        icon: 'users',
      },
      {
        id: 'thought',
        title: 'Thought Leadership',
        description: 'Share insights that shape industry conversation and practice.',
        icon: 'book',
      },
    ],
    values: [
      {
        id: 'expert',
        title: 'Expert Facilitated',
        description: 'Guided by practitioners with deep domain experience.',
        icon: 'award',
      },
      {
        id: 'learning',
        title: 'Learning Focus',
        description: 'Every initiative strengthens skills and capability.',
        icon: 'graduation',
      },
      {
        id: 'innovation',
        title: 'Innovation-First Culture',
        description: 'Encourage experimentation with disciplined follow-through.',
        icon: 'lightbulb',
      },
      {
        id: 'social',
        title: 'Social Responsibility',
        description: 'Create impact that extends beyond commercial outcomes.',
        icon: 'heart',
      },
    ],
  },
]

export const servicesSummary = {
  title: 'Our Services',
  description:
    'AGES-TECH delivers integrated solutions that build ventures, engineer intelligent systems, and transform operations. We combine strategy, technology, and innovation to turn ideas into scalable, future-ready business lines.',
}

export const serviceDetailsIntro = {
  badge: 'SERVICE DETAILS',
  title: 'Explore What We Deliver',
  description:
    'Each service is built with a clear set of capabilities to help you solve real problems and achieve measurable outcomes.',
}

export default services
