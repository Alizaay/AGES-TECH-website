import contactConfig from '@/config/contact'

export const contactHero = {
  badge: 'CONTACT US',
  title: {
    lead: "Let's Build Something",
    accent: 'Exceptional',
    end: 'Together.',
  },
  description:
    'Whether you are exploring a new idea, scaling an existing product, or looking for a strategic engineering partner—AGES-TECH is ready to help you move from vision to impact.',
  primaryCta: { label: 'Start a Project', href: '#contact-form' },
  secondaryCta: { label: 'Schedule a Discovery Call', href: '#contact-form' },
  trust: [
    { id: 'response', label: 'Response within 24 Hours', icon: 'clock' },
    { id: 'worldwide', label: 'Serving Clients Worldwide', icon: 'globe' },
    { id: 'confidential', label: 'Confidential Consultation', icon: 'shield' },
  ],
  connectCard: {
    title: "Let's Connect",
    description:
      "Tell us about your vision. We'll connect you with the right engineering and strategy experts.",
    details: [
      {
        id: 'email',
        label: contactConfig.email,
        icon: 'mail',
        href: `mailto:${contactConfig.email}`,
      },
      {
        id: 'phone',
        label: contactConfig.phone,
        icon: 'phone',
        href: `tel:${contactConfig.phoneE164}`,
      },
      { id: 'location', label: contactConfig.address, icon: 'map' },
      { id: 'remote', label: 'Global Remote Collaboration', icon: 'globe' },
    ],
    perks: [
      'Free Discovery Session',
      'Business & Technical Consultation',
      'Average Response < 24 Hours',
    ],
    cta: { label: 'Start the Conversation', href: '#contact-form' },
  },
}

export const contactFormSection = {
  badge: 'GET IN TOUCH',
  title: {
    lead: 'Send Us a',
    accent: 'Message',
  },
  description: 'Fill out the form below and our team will get back to you as soon as possible.',
  subjects: [
    { id: 'general', label: 'General Inquiry', icon: 'message' },
    { id: 'project', label: 'Start a Project', icon: 'briefcase' },
    { id: 'partnership', label: 'Partnership', icon: 'users' },
    { id: 'careers', label: 'Careers & Innovation', icon: 'rocket' },
  ],
  privacyNote: 'Your information is secure and will never be shared.',
  help: {
    title: "We're Here to Help",
    description:
      "Have a question, project idea, or business challenge? We'd love to hear from you.",
    items: [
      {
        id: 'quick',
        title: 'Quick Response',
        description: 'We typically respond within 24 business hours.',
        icon: 'zap',
      },
      {
        id: 'secure',
        title: 'Confidential & Secure',
        description: 'Your information is safe and protected.',
        icon: 'shield',
      },
      {
        id: 'expert',
        title: 'Expert Guidance',
        description: 'Our experts are ready to help you find the right solution.',
        icon: 'users',
      },
      {
        id: 'global',
        title: 'Global Collaboration',
        description: 'We work with clients worldwide across industries.',
        icon: 'globe',
      },
    ],
  },
}

export default {
  contactHero,
  contactFormSection,
}
