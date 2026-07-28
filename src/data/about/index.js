import ceoPortrait from '@/assets/images/about/CEO Image.png'
import character360Diagram from '@/assets/images/about/character360-diagram.png'
import highlightCharacter360 from '@/assets/images/about/highlights/character360.jpg'
import highlightMedInsight from '@/assets/images/about/highlights/medinsight.jpg'
import highlightInfraConnect from '@/assets/images/about/highlights/infraconnect.jpg'
import highlightIndustrial from '@/assets/images/about/highlights/industrial.jpg'

export const aboutHero = {
  badge: 'WHO WE ARE',
  title: {
    line1: 'Engineering Purpose.',
    line2: 'Delivering',
    accent: 'Impact.',
  },
  description:
    'AGES-TECH is an engineering and innovation company that partners with organizations to design, build, and scale intelligent systems and digital solutions that drive real business transformation.',
  features: [
    {
      id: 'trusted',
      title: 'Trusted Partner',
      description: 'We build lasting partnerships based on trust and transparency.',
      icon: 'shield',
    },
    {
      id: 'innovation',
      title: 'Innovation Driven',
      description: 'We challenge the status quo to create what\'s next.',
      icon: 'lightbulb',
    },
    {
      id: 'results',
      title: 'Results Focused',
      description: 'We measure success by the impact we create for our clients.',
      icon: 'chart',
    },
  ],
  primaryCta: { label: 'Start a Project', to: '/contactus' },
  secondaryCta: { label: 'How it Works', to: '/project-journey' },
}

export const ceoVision = {
  badge: 'CEO VISION',
  title: {
    lead: 'Building the Future with',
    accent: 'Purpose.',
  },
  quote: [
    'My journey began with deep research in France and the United States, where I learned that lasting innovation is built on scientific discipline and engineering rigor—not guesswork.',
    'That foundation now guides how we lead AGES-TECH: applying research thinking, systems engineering, and entrepreneurial clarity to real-world business challenges.',
    'We exist to engineer purpose into every platform, partnership, and product we build—so decisions are designed, not improvised.',
  ],
  values: [
    {
      id: 'leadership',
      title: 'Leadership through Vulnerability',
      description: 'Leading with empathy, building trust, and bringing out the best in people.',
      icon: 'users',
    },
    {
      id: 'global',
      title: 'Global Perspective',
      description: 'Experience across borders that shapes better solutions.',
      icon: 'globe',
    },
    {
      id: 'scientific',
      title: 'Scientific Discipline',
      description: 'Data-driven thinking and rigorous methods in everything we build.',
      icon: 'flask',
    },
    {
      id: 'thinking',
      title: 'Heterogeneous Thinking',
      description: 'Connecting diverse ideas and technologies to solve complex problems.',
      icon: 'target',
    },
  ],
  primaryCta: { label: 'Start a Project', to: '/contactus' },
  secondaryCta: { label: 'How it Works', to: '/project-journey' },
  portrait: ceoPortrait,
  name: 'Dr. Ali Ammar',
  role: 'Founder & CEO',
}

export const domainColors = {
  ai: '#F97316',
  data: '#DC2626',
  cloud: '#0EA5E9',
  cyber: '#8B5CF6',
  electronics: '#64748B',
  bio: '#0F172A',
  iot: '#EAB308',
}

export const domainsIntro = {
  badge: 'TECHNOLOGY & INDUSTRY DOMAINS',
  title: 'Where Technology Meets Real-World Impact',
  description:
    'We combine advanced engineering capabilities with deep industry understanding to design platforms and systems that scale with modern business needs.',
}

export const engineeringDomains = [
  {
    id: 'ai',
    title: 'AI & ML',
    description:
      'Artificial Intelligence (AI) & Machine Learning (ML) — Building intelligent systems that learn, adapt, and make an impact.',
    color: domainColors.ai,
    icon: 'brain',
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description:
      'Data Engineering & Advanced Analytics — Turning data into insights that drive smarter decisions.',
    color: domainColors.data,
    icon: 'barChart',
  },
  {
    id: 'cloud',
    title: 'Cloud & SaaS',
    description:
      'Cloud Computing & SaaS Architecture — Designing scalable, secure, and high-performance cloud solutions.',
    color: domainColors.cloud,
    icon: 'cloud',
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    description:
      'Cybersecurity & Digital Trust — Protecting systems, data, and users in an ever-evolving digital world.',
    color: domainColors.cyber,
    icon: 'shield',
  },
  {
    id: 'electronics',
    title: 'Electronics & Embedded',
    description:
      'Advanced Electronics & Embedded Systems — Engineering smart, reliable, and high-performance embedded solutions.',
    color: domainColors.electronics,
    icon: 'cpu',
  },
  {
    id: 'bio',
    title: 'Bioinformatics',
    description:
      'Bioinformatics & Computational Science — Solving complex biological problems through computation and data.',
    color: domainColors.bio,
    icon: 'dna',
  },
  {
    id: 'iot',
    title: 'IoT & Smart Systems',
    description:
      'Internet of Things & Smart Systems — Connecting devices and systems to create intelligent, real-time experiences.',
    color: domainColors.iot,
    icon: 'radio',
  },
]

export const industriesIntro =
  'AGES-TECH applies its engineering expertise across diverse sectors, designing scalable digital solutions that enable organizations to innovate, operate efficiently, and grow in an increasingly digital world.'

export const industries = [
  {
    id: 'edtech',
    title: 'Educational Technology (EdTech)',
    shortTitle: 'Educational Technology (EdTech)',
    description:
      'Empowering learning with intelligent platforms, data-driven insights, and seamless digital experiences.',
    modalDescription:
      'AGES-TECH builds intelligent education platforms that connect academics, operations, and student outcomes—helping institutions deliver clearer learning experiences at scale.',
    domains: ['ai', 'cloud', 'data'],
    icon: 'edtech',
  },
  {
    id: 'medtech',
    title: 'Healthcare and MedTech',
    shortTitle: 'Healthcare and MedTech',
    description:
      'Advancing patient care through smart systems, data intelligence, and secure digital infrastructure.',
    modalDescription:
      'AGES-TECH engineers advanced digital systems for healthcare innovation, enabling secure data infrastructure, intelligent medical platforms, and analytics-driven healthcare solutions.',
    domains: ['ai', 'bio'],
    icon: 'medtech',
  },
  {
    id: 'fintech',
    title: 'Financial Technology (FinTech)',
    shortTitle: 'Financial Technology (FinTech)',
    description:
      'Building secure, intelligent, and compliant solutions for the future of financial services.',
    modalDescription:
      'AGES-TECH designs secure FinTech platforms that strengthen digital finance operations, risk intelligence, and customer experience across modern banking and payment ecosystems.',
    domains: ['ai', 'cyber', 'data'],
    icon: 'fintech',
  },
  {
    id: 'mobility',
    title: 'Mobility and Automotive',
    shortTitle: 'Mobility and Automotive',
    description:
      'Driving innovation with connected vehicles, smart systems, and next-generation mobility solutions.',
    modalDescription:
      'AGES-TECH develops connected mobility systems that link vehicles, infrastructure, and operations—supporting smarter transportation and automotive innovation.',
    domains: ['iot', 'cloud'],
    icon: 'mobility',
  },
  {
    id: 'infrastructure',
    title: 'Smart Infrastructure and Real Estate',
    shortTitle: 'Smart Infrastructure and Real Estate',
    description:
      'Designing intelligent, sustainable, and connected environments for smarter communities.',
    modalDescription:
      'AGES-TECH creates smart infrastructure platforms that transform buildings, campuses, and cities into connected, efficient, and data-informed environments.',
    domains: ['iot', 'data'],
    icon: 'infrastructure',
  },
  {
    id: 'industrial',
    title: 'Industrial Systems and SupplyChainTech',
    shortTitle: 'Industrial Systems and SupplyChainTech',
    description:
      'Optimizing operations with smart automation, IoT, and resilient supply chain solutions.',
    modalDescription:
      'AGES-TECH builds industrial and supply-chain platforms that optimize production, logistics, and network visibility for more resilient operations.',
    domains: ['iot', 'ai', 'cyber'],
    icon: 'industrial',
  },
]

export const character360 = {
  badge: 'FLAGSHIP INNOVATION',
  title: {
    lead: "Engineering Tomorrow's Schools,",
    accent: 'Today.',
  },
  description:
    'Character360 is our flagship platform redefining how educational institutions operate, make decisions, and create impact.',
  ecosystem: {
    title: 'Our Product Ecosystem',
    subtitle: "Solving today's challenges. Building tomorrow's solutions.",
  },
  /** Data-driven project showcase — add an object here to introduce a new product. */
  projects: [
    {
      id: 'character360',
      title: 'Character360',
      subtitle: 'School Operational System',
      category: 'Education',
      status: 'In Development',
      icon: 'graduation',
      productBadge: 'AGES-TECH PRODUCT',
      body: [
        'Character360 unifies academics, behavior, attendance, scheduling, and institutional data into one operational system.',
        'It gives students, educators, administrators, and district leaders a shared, real-time view of performance and outcomes.',
        'Built as a scalable school operating system, Character360 is engineered for clarity, security, and long-term impact.',
      ],
      statusItems: [
        {
          id: 'engineering',
          title: 'Product Engineering',
          description: 'Core modules in development.',
          icon: 'code',
        },
        {
          id: 'pilot',
          title: 'Pilot Preparation',
          description: 'Pilot programs planned for 2026.',
          icon: 'rocket',
        },
        {
          id: 'roadmap',
          title: 'Release Roadmap',
          description: 'Full launch targeted for 2027.',
          icon: 'calendar',
        },
      ],
      primaryCta: { label: 'Explore Vision', to: '/contactus' },
      secondaryCta: { label: 'View Architecture', to: '/project-journey' },
      diagram: character360Diagram,
      diagramAlt: 'Character360 school operating system diagram',
    },
    {
      id: 'health',
      title: 'Health Platform',
      subtitle: 'MedTech Systems',
      category: 'Healthcare',
      status: 'Coming Soon',
      icon: 'heart',
      productBadge: 'AGES-TECH PRODUCT',
      body: [
        'The Health Platform is designed to unify clinical operations, patient insights, and care coordination in one intelligent environment.',
        'It will help providers, clinics, and health networks act on real-time data while protecting sensitive information.',
        'Built for security and scale, this MedTech system will support analytics-driven healthcare innovation across care settings.',
      ],
      statusItems: [
        {
          id: 'research',
          title: 'Domain Research',
          description: 'Clinical workflows mapped.',
          icon: 'code',
        },
        {
          id: 'design',
          title: 'Platform Design',
          description: 'Architecture in progress.',
          icon: 'rocket',
        },
        {
          id: 'roadmap',
          title: 'Release Roadmap',
          description: 'Pilot planning underway.',
          icon: 'calendar',
        },
      ],
      primaryCta: { label: 'Request Briefing', to: '/contactus' },
      secondaryCta: { label: 'Our Approach', to: '/project-journey' },
      diagram: null,
      diagramAlt: 'Health Platform preview',
    },
    {
      id: 'infra',
      title: 'Infrastructure Platform',
      subtitle: 'Smart City Systems',
      category: 'Smart Infrastructure',
      status: 'Coming Soon',
      icon: 'building',
      productBadge: 'AGES-TECH PRODUCT',
      body: [
        'The Infrastructure Platform connects buildings, sensors, and operations into a unified smart-city operating layer.',
        'It will give facility leaders real-time visibility into efficiency, safety, and sustainability metrics.',
        'Engineered for scale, it supports campuses and urban systems that need reliable, data-informed infrastructure.',
      ],
      statusItems: [
        {
          id: 'sensing',
          title: 'Systems Mapping',
          description: 'Infrastructure use cases defined.',
          icon: 'code',
        },
        {
          id: 'prototype',
          title: 'Prototype Phase',
          description: 'Smart-city modules scoped.',
          icon: 'rocket',
        },
        {
          id: 'roadmap',
          title: 'Release Roadmap',
          description: 'Coming soon to partners.',
          icon: 'calendar',
        },
      ],
      primaryCta: { label: 'Talk to Us', to: '/contactus' },
      secondaryCta: { label: 'View Journey', to: '/project-journey' },
      diagram: null,
      diagramAlt: 'Infrastructure Platform preview',
    },
    {
      id: 'industrial',
      title: 'Industrial Platform',
      subtitle: 'Operations Systems',
      category: 'Industrial',
      status: 'Coming Soon',
      icon: 'gear',
      productBadge: 'AGES-TECH PRODUCT',
      body: [
        'The Industrial Platform is built to optimize production, logistics, and operational visibility across complex networks.',
        'It will help industrial teams monitor performance, reduce friction, and respond faster to supply-chain change.',
        'Designed for resilience, it connects machines, data, and workflows into one operations system.',
      ],
      statusItems: [
        {
          id: 'ops',
          title: 'Operations Design',
          description: 'Use cases and flows defined.',
          icon: 'code',
        },
        {
          id: 'integration',
          title: 'Integration Prep',
          description: 'IoT and data layers planned.',
          icon: 'rocket',
        },
        {
          id: 'roadmap',
          title: 'Release Roadmap',
          description: 'Partner pilots upcoming.',
          icon: 'calendar',
        },
      ],
      primaryCta: { label: 'Get Updates', to: '/contactus' },
      secondaryCta: { label: 'How We Build', to: '/project-journey' },
      diagram: null,
      diagramAlt: 'Industrial Platform preview',
    },
  ],
}

export const projectHighlights = {
  badge: 'PROJECT HIGHLIGHTS',
  title: {
    lead: 'Delivering Solutions. Creating',
    accent: 'Impact.',
  },
  description:
    'Explore a selection of projects where our technology, strategy, and innovation come together to drive real results.',
  primaryCta: { label: 'Start a Project', to: '/contactus' },
  secondaryCta: { label: 'How it Works', to: '/project-journey' },
  projects: [
    {
      id: 'character360',
      category: 'Education',
      title: 'Character360',
      description:
        'An AI-powered platform that unifies academic, behavioral, and operational data to support whole-student development.',
      icon: 'graduation',
      image: highlightCharacter360,
      imageAlt: 'Character360 education analytics dashboard on a laptop',
      href: '/contactus',
    },
    {
      id: 'medinsight',
      category: 'Healthcare',
      title: 'MedInsight',
      description:
        'A secure analytics platform that helps healthcare providers improve patient outcomes through data-driven insights.',
      icon: 'heart',
      image: highlightMedInsight,
      imageAlt: 'MedInsight patient analytics on a tablet',
      href: '/contactus',
    },
    {
      id: 'infraconnect',
      category: 'Smart Infrastructure',
      title: 'InfraConnect',
      description:
        'An IoT-enabled platform that monitors infrastructure in real time, improving efficiency, safety, and sustainability.',
      icon: 'building',
      image: highlightInfraConnect,
      imageAlt: 'InfraConnect smart city infrastructure network',
      href: '/contactus',
    },
    {
      id: 'opsforge',
      category: 'Industrial',
      title: 'OpsForge',
      description:
        'An operations platform that connects production, logistics, and supply-chain data to improve resilience and throughput.',
      icon: 'gear',
      image: highlightIndustrial,
      imageAlt: 'OpsForge industrial operations and automation systems',
      href: '/contactus',
    },
  ],
  quote:
    'We partner with organizations to turn complex challenges into intelligent solutions that create measurable impact.',
  stats: [
    { id: 'projects', value: '50+', label: 'Projects Delivered', icon: 'users' },
    { id: 'clients', value: '25+', label: 'Clients Served', icon: 'building' },
    { id: 'industries', value: '6+', label: 'Industries Impacted', icon: 'globe' },
    { id: 'satisfaction', value: '98%', label: 'Client Satisfaction', icon: 'chart' },
  ],
}

export default {
  aboutHero,
  ceoVision,
  domainsIntro,
  engineeringDomains,
  industriesIntro,
  industries,
  domainColors,
  character360,
  projectHighlights,
}
