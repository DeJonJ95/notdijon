export interface Job {
  dates: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  tech: string[];
}

export const EXPERIENCE: Job[] = [
  {
    dates: '2025 — Present',
    role: 'Web Developer & Technical Strategist',
    company: 'City of Detroit',
    companyUrl: 'https://detroitmi.gov',
    description:
      'Lead technical strategy and cross-departmental projects, setting standards for web development, accessibility, security, and performance. Designed and shipped an in-house inventory application tracking 23,000+ items across 20 locations — replacing a fragmented manual process with QR-coded check-in/out, role-based access, and PDF reporting. Author RFP specifications and lead technical vetting for vendor selection, then run onboarding and oversight as the primary liaison. Drive automation, workflow modernization, and technology adoption through curriculum design and hands-on training.',
    tech: [
      'Next.js',
      'Firebase',
      'RFP & Procurement',
      'Vendor Management',
      'Accessibility',
      'Automation',
      'Analytics',
    ],
  },
  {
    dates: '2021 — 2025',
    role: 'Email Developer',
    company: 'City of Detroit',
    companyUrl: 'https://detroitmi.gov',
    description:
      "Architected my department's first dedicated email marketing program from the ground up, building processes for campaign development, scheduling, and performance analysis. Shipped responsive HTML campaigns through GovDelivery with A/B testing, automated seasonal-staff comms (including Election Day logistics), and authored the SOPs the team still runs on.",
    tech: ['GovDelivery', 'HTML Email', 'MJML', 'A/B Testing', 'CRM'],
  },
  {
    dates: '2018 — 2025',
    role: 'Developer',
    company: 'Webdroid',
    companyUrl: '#',
    description:
      'Built responsive web apps and email templates for retail and SMB clients. Engineered custom storefronts on WordPress/WooCommerce and Shopify (Liquid), integrated Stripe, and stood up analytics dashboards via GA4 and Google Tag Manager. Established CI/CD pipelines with GitHub Actions deploying to Vercel.',
    tech: [
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'WordPress',
      'Shopify',
      'Firebase',
      'Stripe',
    ],
  },
  {
    dates: '2021 — 2023',
    role: 'Web Development Advocate',
    company: 'Journi',
    companyUrl: '#',
    description:
      'Designed and delivered technical curriculum covering HTML, CSS, and responsive design. Organized community engagement events to promote tech career awareness and led workshops that translated abstract concepts into hands-on practice for new learners.',
    tech: ['HTML', 'CSS', 'Curriculum Design', 'Workshops'],
  },
];
