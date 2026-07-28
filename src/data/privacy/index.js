import contactConfig from '@/config/contact'
import { company } from '@/config/company'

export const privacyHero = {
  badge: 'LEGAL',
  title: {
    lead: 'Privacy',
    accent: 'Policy',
  },
  description:
    'We respect your privacy and are committed to protecting the personal information you share with AGES-TECH. This page explains what we collect, how we use it, and the choices available to you.',
  lastUpdated: 'July 26, 2026',
  effectiveDate: 'July 26, 2026',
}

export const privacySections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    companyCard: {
      title: 'About AGES-TECH',
      description: `${company.name} — ${company.tagline} We build scalable business lines through strategy, technology, and innovation.`,
    },
    paragraphs: [
      `This Privacy Policy describes how ${company.name} (“AGES-TECH,” “we,” “us,” or “our”) collects, uses, stores, and shares information when you visit our website, contact us, or use our services.`,
      'By using our website or submitting information through our forms, you agree to the practices described in this policy. If you do not agree, please do not provide personal information or discontinue use of the site.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    companyCard: {
      title: 'What AGES-TECH collects',
      description:
        'We only gather details needed to respond to your inquiry — typically name, email, phone, and project context — plus standard technical data that helps us improve the site.',
    },
    paragraphs: [
      'We collect information in the following categories:',
    ],
    bullets: [
      'Contact details you submit — such as name, email address, phone number, company name, and message content — through our contact forms or email.',
      'Project and inquiry details you choose to share when exploring a partnership, service, or engagement.',
      'Technical and usage data — such as browser type, device information, pages visited, referring URLs, and approximate location — collected automatically through standard web technologies.',
      'Cookies and similar technologies used to improve site performance, remember preferences, and understand how visitors interact with our pages.',
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Information',
    companyCard: {
      title: 'How we put data to work',
      description:
        'AGES-TECH uses your information to answer requests, schedule discovery conversations, and deliver better service — never for unrelated marketing without your permission.',
    },
    paragraphs: [
      'We use the information we collect to:',
    ],
    bullets: [
      'Respond to inquiries, schedule discovery calls, and provide requested information about our services.',
      'Deliver, improve, and personalize our website experience and communications.',
      'Evaluate project opportunities and support business operations related to client engagement.',
      'Maintain security, prevent fraud or misuse, and comply with applicable legal obligations.',
      'Send relevant updates when you have requested them or where permitted by law.',
    ],
  },
  {
    id: 'sharing',
    title: '4. How We Share Information',
    companyCard: {
      title: 'We do not sell your data',
      description:
        'AGES-TECH does not sell personal information. Sharing is limited to trusted providers who help us operate, or when required by law.',
    },
    paragraphs: [
      'We do not sell your personal information. We may share information only in these limited cases:',
    ],
    bullets: [
      'With trusted service providers who help us operate our website, host infrastructure, or process communications — under confidentiality obligations.',
      'When required by law, regulation, legal process, or to protect the rights, safety, and property of AGES-TECH, our clients, or others.',
      'In connection with a business transaction such as a merger, acquisition, or asset transfer, subject to appropriate safeguards.',
    ],
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    companyCard: {
      title: 'Protecting your trust',
      description:
        'We apply practical security controls across our systems and processes to safeguard the information you share with AGES-TECH.',
    },
    paragraphs: [
      'We implement reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction.',
      'No method of transmission or storage is completely secure. While we work to protect your information, we cannot guarantee absolute security of data transmitted over the internet.',
    ],
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    companyCard: {
      title: 'Kept only as long as needed',
      description:
        'AGES-TECH retains personal information for operational, legal, and service purposes — then deletes or anonymizes it when it is no longer required.',
    },
    paragraphs: [
      'We retain personal information only for as long as needed to fulfill the purposes described in this policy, meet legal or contractual requirements, resolve disputes, and enforce our agreements.',
      'When information is no longer required, we take steps to delete, anonymize, or securely archive it in accordance with our retention practices.',
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights & Choices',
    companyCard: {
      title: 'Your control matters',
      description: `You can request access, updates, or deletion of your information. Reach our team at ${contactConfig.email} and we will help you promptly.`,
    },
    paragraphs: [
      'Depending on your location, you may have rights regarding your personal information, which can include:',
    ],
    bullets: [
      'Requesting access to the personal information we hold about you.',
      'Requesting correction or updating of inaccurate information.',
      'Requesting deletion of your information, subject to legal or operational exceptions.',
      'Objecting to or restricting certain processing activities.',
      'Withdrawing consent where processing is based on consent.',
    ],
    closing:
      `To exercise these rights, contact us at ${contactConfig.email}. We may need to verify your identity before completing certain requests.`,
  },
  {
    id: 'cookies',
    title: '8. Cookies & Tracking',
    companyCard: {
      title: 'Cookies for a better experience',
      description:
        'AGES-TECH uses cookies mainly for site performance and analytics. You can manage them anytime in your browser settings.',
    },
    paragraphs: [
      'Our website may use cookies and similar technologies to support core functionality, analytics, and performance. You can control cookies through your browser settings. Disabling certain cookies may affect how the site functions.',
    ],
  },
  {
    id: 'third-party',
    title: '9. Third-Party Links',
    companyCard: {
      title: 'External sites',
      description:
        'Links on our site may lead to partners or resources outside AGES-TECH. Their privacy practices are independent of ours.',
    },
    paragraphs: [
      'Our website may contain links to third-party sites or services. We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before providing personal information.',
    ],
  },
  {
    id: 'children',
    title: '10. Children’s Privacy',
    companyCard: {
      title: 'Business-focused services',
      description:
        'AGES-TECH serves businesses and professionals. We do not knowingly collect personal information from children under 16.',
    },
    paragraphs: [
      'Our services are directed to businesses and professionals. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.',
    ],
  },
  {
    id: 'updates',
    title: '11. Updates to This Policy',
    companyCard: {
      title: 'Policy updates',
      description:
        'When our practices change, AGES-TECH will update this page and revise the “Last updated” date so you always have current information.',
    },
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The “Last updated” date at the top of this page indicates when the policy was most recently revised.',
      'Continued use of our website after an update constitutes acceptance of the revised policy, where permitted by law.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    companyCard: {
      title: 'Talk with AGES-TECH',
      description: `Based in ${contactConfig.address}. Email ${contactConfig.email} or call ${contactConfig.phone} for privacy questions.`,
    },
    paragraphs: [
      'If you have questions about this Privacy Policy or how we handle personal information, please reach out:',
    ],
    bullets: [
      `Email: ${contactConfig.email}`,
      `Phone: ${contactConfig.phone}`,
      `Address: ${contactConfig.address}`,
    ],
  },
]

export const termsHero = {
  badge: 'LEGAL',
  title: {
    lead: 'Terms of',
    accent: 'Use',
  },
  description:
    'These Terms of Use govern your access to and use of the AGES-TECH website and related online materials. Please read them carefully before continuing.',
  lastUpdated: 'July 26, 2026',
}

export const termsSections = [
  {
    id: 'terms-acceptance',
    title: '1. Acceptance of Terms',
    companyCard: {
      title: 'Using our website',
      description:
        'By browsing AGES-TECH online, you agree to these Terms of Use and our Privacy Policy.',
    },
    paragraphs: [
      `By accessing or using the ${company.name} website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, do not use the site.`,
    ],
  },
  {
    id: 'terms-use',
    title: '2. Permitted Use',
    companyCard: {
      title: 'Fair use guidelines',
      description:
        'Use this site to learn about AGES-TECH and contact us. Do not misuse, scrape, or disrupt the experience.',
    },
    paragraphs: [
      'You may use this website for lawful purposes related to learning about AGES-TECH, exploring our services, and contacting us. You agree not to:',
    ],
    bullets: [
      'Misuse the site, attempt unauthorized access, or interfere with its operation.',
      'Copy, scrape, or redistribute site content for commercial purposes without permission.',
      'Submit false, misleading, or harmful information through forms or communications.',
      'Use the site in any way that violates applicable laws or third-party rights.',
    ],
  },
  {
    id: 'terms-ip',
    title: '3. Intellectual Property',
    companyCard: {
      title: 'Our brand & content',
      description:
        'AGES-TECH owns the site’s text, visuals, and branding. Please do not reuse materials without written permission.',
    },
    paragraphs: [
      'All content on this website — including text, graphics, logos, icons, images, and design — is owned by AGES-TECH or its licensors and is protected by intellectual property laws. You may not reproduce or exploit site materials without prior written consent, except for personal, non-commercial viewing.',
    ],
  },
  {
    id: 'terms-disclaimer',
    title: '4. Disclaimers',
    companyCard: {
      title: 'Informational only',
      description:
        'Website content shares who we are and what we offer. It is not professional advice or a formal service commitment.',
    },
    paragraphs: [
      'Website content is provided for general informational purposes and does not constitute professional advice, an offer, or a commitment to provide services. We make no warranties that the site will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    id: 'terms-liability',
    title: '5. Limitation of Liability',
    companyCard: {
      title: 'Liability limits',
      description:
        'To the extent allowed by law, AGES-TECH is not liable for indirect or consequential damages from using this website.',
    },
    paragraphs: [
      'To the fullest extent permitted by law, AGES-TECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website or its content.',
    ],
  },
  {
    id: 'terms-changes',
    title: '6. Changes to These Terms',
    companyCard: {
      title: 'Terms may evolve',
      description:
        'AGES-TECH may update these terms as needed. Continued use of the site after updates means you accept the revised terms.',
    },
    paragraphs: [
      'We may revise these Terms of Use at any time. Updates will be posted on this page with a revised “Last updated” date. Your continued use of the site after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    id: 'terms-contact',
    title: '7. Contact',
    companyCard: {
      title: 'Questions about terms',
      description: `Contact AGES-TECH at ${contactConfig.email} for any questions about these Terms of Use.`,
    },
    paragraphs: [
      `Questions about these Terms of Use can be sent to ${contactConfig.email}.`,
    ],
  },
]

export default privacySections
