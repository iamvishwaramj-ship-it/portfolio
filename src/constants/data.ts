// ─── Project & Personal Data ─────────────────────────────────
// Update this file with your real information

export const PERSONAL_INFO = {
  name: 'Vishwaram J',
  firstName: 'Vishwaram',
  lastName: 'J',
  title: 'Full Stack Developer',
  tagline: 'Building elegant digital experiences with modern technology',
  email: 'iamvishwaramj@gmail.com', // TODO: replace with your email
  phone: '+91 8489551445',      // TODO: replace with your phone
  location: 'Coimbatore, Tamil Nadu, India',
  pronouns: 'He/Him',
  github: 'iamvishwaramj-ship-it',
  githubUrl: 'https://github.com/iamvishwaramj-ship-it',
  linkedin: 'https://www.linkedin.com/in/vishwaram-j-794b1b34b/',
  twitter: '',    // TODO: add if available
  website: '',    // TODO: add if available
  resumeUrl: '/resume.pdf', // Place resume.pdf in /public folder
  bio: `Passionate Full Stack Developer with expertise in building scalable web applications. 
  I specialize in React,Angular and Node.js, and modern web technologies. 
  I thrive on turning complex problems into elegant, user-friendly solutions 
  that make a real impact.`,
  about: `I'm a dedicated Full Stack Developer based in Coimbatore, India, with a strong 
  foundation in both frontend and backend development. My journey in software development 
  has been driven by a passion for creating seamless user experiences and robust, 
  scalable architectures.
  
  When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
  projects, and continuously improving my craft. I believe in writing clean, maintainable 
  code and following best practices to deliver high-quality software solutions.`,
  yearsOfExperience: 1,
  // projectsCompleted: 15,
  // clientsSatisfied: 10,
  // coffeeConsumed: 250, // Just for fun!
  whatsapp: 'https://wa.me/+918489551445',
} as const;

// ─── Services ───────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Modern, responsive websites for small businesses, shops, startups, and local businesses to build trust and attract customers.',
    features: [
      'Modern responsive design',
      'Mobile-friendly layout',
      'Contact / WhatsApp integration',
      'Basic SEO-friendly structure',
    ],
    icon: 'FaGlobe',
    color: '#6366f1',
  },
  {
    id: 'portfolio-websites',
    title: 'Personal Portfolio Websites',
    description: 'Professional portfolio websites for developers, designers, students, freelancers, and working professionals to highlight work.',
    features: [
      'Responsive design across devices',
      'Projects & skills showcase',
      'About me & experience sections',
      'Direct contact integration',
    ],
    icon: 'FaUserTie',
    color: '#8b5cf6',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages for products, services, businesses, and personal brands designed to drive results.',
    features: [
      'Responsive & fast loading',
      'Clear call-to-action sections',
      'Modern UI aesthetics',
      'Lead capture form integration',
    ],
    icon: 'FaRocket',
    color: '#06b6d4',
  },
  {
    id: 'fixes-improvements',
    title: 'Website Fixes & Improvements',
    description: 'Quick bug fixes, responsiveness repair, layout enhancements, and performance optimizations for your existing website.',
    features: [
      'Fix UI bugs & layout shifts',
      'Fix JavaScript & React issues',
      'Improve responsive layouts',
      'Performance & UX enhancements',
    ],
    icon: 'FaTools',
    color: '#f59e0b',
  },
  {
    id: 'frontend-dev',
    title: 'React / Frontend Development',
    description: 'Custom frontend interface development using React, JavaScript/TypeScript, HTML5, CSS3, and modern framework toolkits.',
    features: [
      'React & TypeScript solutions',
      'Clean component architecture',
      'Smooth state & API handling',
      'Interactive UI animations',
    ],
    icon: 'FaCode',
    color: '#3b82f6',
  },
];

// ─── Pricing Packages ────────────────────────────────────────────
export const PRICING_PACKAGES = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹1,000',
    description: 'Ideal for simple personal presence or single landing page needs.',
    features: [
      'Single-page website',
      'Responsive design',
      'Basic sections',
      'Contact / WhatsApp button',
      'Basic deployment assistance',
    ],
    cta: 'Get Started',
    color: '#06b6d4',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: '₹3,500',
    popular: true,
    description: 'Perfect for small businesses, local shops, and growing startups.',
    features: [
      'Multi-section business website',
      'Responsive design',
      'Contact form / WhatsApp integration',
      'Modern UI design',
      'Basic SEO-friendly structure',
      'Deployment assistance',
    ],
    cta: 'Get Started',
    color: '#6366f1',
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '₹7,000',
    description: 'For businesses needing custom UI, interactive features, or multi-page sites.',
    features: [
      'More advanced website',
      'Multiple pages',
      'Custom UI implementation',
      'React-based implementation when appropriate',
      'Animations / interactions',
      'Contact integration',
      'Deployment assistance',
    ],
    cta: 'Get Started',
    color: '#8b5cf6',
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    price: "Let's discuss",
    description: 'Tailored development for unique requirements, web apps, or website upgrades.',
    features: [
      'Custom requirements',
      'Web applications',
      'Existing website improvements',
      'React / frontend development',
      'Bug fixes & troubleshooting',
      'Performance improvements',
    ],
    cta: 'Contact Me',
    color: '#f59e0b',
  },
];

export const TYPEWRITER_STRINGS = [
  'Full Stack Developer',
  'React Developer',
  'Angular Developer',
  'Node.js Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
];

// ─── Skills ─────────────────────────────────────────────────────
export const SKILLS = {
  Frontend: [
    { name: 'React', icon: 'SiReact', color: '#61DAFB', level: 90 },
    { name: 'Angular', icon: 'SiAngular', color: '#DD0031', level: 75 },
    { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6', level: 85 },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E', level: 90 },
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: 'SiCss3', color: '#1572B6', level: 88 },
    { name: 'Bootstrap', icon: 'SiBootstrap', color: '#563D7C', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933', level: 80 },
    { name: 'Express.js', icon: 'SiExpress', color: '#000000', level: 78 },
    { name: 'REST APIs', icon: 'SiPostman', color: '#FF6C37', level: 85 },
  ],
  Database: [
    { name: 'MSSQL', icon: 'SiMicrosoftsqlserver', color: '#CC2927', level: 75 },
    { name: 'MySQL', icon: 'SiMysql', color: '#4479A1', level: 70 },
  ],
  Tools: [
    { name: 'Git', icon: 'SiGit', color: '#F05032', level: 85 },
    { name: 'GitHub', icon: 'SiGithub', color: '#181717', level: 88 },
    { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#007ACC', level: 95 },
    { name: 'Postman', icon: 'SiPostman', color: '#FF6C37', level: 80 },
    { name: 'Vite', icon: 'SiVite', color: '#646CFF', level: 85 },
    { name: 'npm', icon: 'SiNpm', color: '#CB3837', level: 88 },
  ],
};

// ─── Experience ──────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id: 1,
    company: 'Techconz Nexora Pvt Ltd',
    position: 'Software Engineer, Web & App Developer',
    duration: '2025 – Present',
    location: 'Coimbatore, India',
    type: 'Full-time',
    description: [
      'Developed and maintained enterprise-level web applications using React and Angular',
      'Built RESTful APIs with Node.js and Express.js, integrating with MSSQL databases',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive UI designs with Bootstrap and modern CSS techniques',
      'Optimized application performance resulting in 40% faster load times',
    ],
    technologies: ['React', 'Angular', 'Node.js', 'TypeScript', 'MSSQL', 'Git'],
    color: '#6366f1',
  },
  // {
  //   id: 2,
  //   company: 'Freelance',
  //   position: 'Web Developer, App Developer',
  //   duration: '2025 – 2026',
  //   location: 'Remote',
  //   type: 'Freelance',
  //   description: [
  //     'Designed and developed custom websites for small businesses and startups',
  //     'Built interactive web applications using React and vanilla JavaScript',
  //     'Created responsive layouts with HTML5, CSS3, and modern frameworks',
  //     'Delivered 10+ projects on time and within budget',
  //   ],
  //   technologies: ['React','React Native','JavaScript', 'HTML5', 'CSS3', 'Node.js'],
  //   color: '#8b5cf6',
  // },
];

// ─── Projects ────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'SHOE E-COMMERCE',
    description: 'A modern shoe e-commerce website that allows users to browse, search, filter, and purchase footwear through a responsive and user-friendly shopping experience.',
    image: '../assets/shoe.png',
    technologies: ['React', 'Node.js', 'Express', 'MSSQL', 'TypeScript'],
    category: ['React', 'Node.js'],
    github: 'https://github.com/iamvishwaramj-ship-it',
    live: 'https://idyllic-tanuki-c27369.netlify.app/',
    featured: true,
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'E-Commerce Admin Dashboard',
    description: 'Full-featured admin dashboard with real-time analytics, product management, order processing, user management, and store configuration tools.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Angular', 'Node.js', 'Express', 'MSSQL', 'TypeScript'],
    category: ['Angular', 'Node.js'],
    github: 'https://github.com/iamvishwaramj-ship-it',
    live: '',
    featured: true,
    color: '#8b5cf6',
  },
  // {
  //   id: 3,
  //   title: 'Expense Tracker',
  //   description: 'Smart personal finance manager with expense categorization, budget planning, visual analytics with charts, and monthly reports. Features dark mode and PWA support.',
  //   image: '/projects/expense-tracker.jpg',
  //   technologies: ['React', 'TypeScript', 'Node.js', 'CSS3'],
  //   category: ['React', 'Node.js'],
  //   github: 'https://github.com/iamvishwaramj-ship-it',
  //   live: '',
  //   featured: false,
  //   color: '#06b6d4',
  // },
  // {
  //   id: 4,
  //   title: 'Weather Dashboard',
  //   description: 'Beautiful weather application with real-time data, 7-day forecasts, interactive maps, and location-based weather alerts. Integrated with OpenWeatherMap API.',
  //   image: '/projects/weather.jpg',
  //   technologies: ['React', 'TypeScript', 'CSS3', 'REST API'],
  //   category: ['React'],
  //   github: 'https://github.com/iamvishwaramj-ship-it',
  //   live: '',
  //   featured: false,
  //   color: '#3b82f6',
  // },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'This very portfolio! A premium developer portfolio built with React, TypeScript, and Framer Motion. Features dark/light mode, animations, and GitHub API integration.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: ['React'],
    github: 'https://github.com/iamvishwaramj-ship-it',
    live: '',
    featured: false,
    color: '#f59e0b',
  },
];

// ─── Certifications ──────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'React - The Complete Guide',
    issuer: 'Udemy / Maximilian Schwarzmüller',
    date: '2024',
    credentialId: 'UC-XXXXXXXXX',
    url: 'https://www.udemy.com',
    color: '#6366f1',
    icon: 'SiReact',
  },
  {
    id: 2,
    title: 'Node.js Developer Course',
    issuer: 'Udemy / Andrew Mead',
    date: '2024',
    credentialId: 'UC-XXXXXXXXX',
    url: 'https://www.udemy.com',
    color: '#339933',
    icon: 'SiNodedotjs',
  },
  {
    id: 3,
    title: 'TypeScript Masterclass',
    issuer: 'Udemy',
    date: '2023',
    credentialId: 'UC-XXXXXXXXX',
    url: 'https://www.udemy.com',
    color: '#3178C6',
    icon: 'SiTypescript',
  },
  {
    id: 4,
    title: 'Angular - The Complete Guide',
    issuer: 'Udemy / Maximilian Schwarzmüller',
    date: '2023',
    credentialId: 'UC-XXXXXXXXX',
    url: 'https://www.udemy.com',
    color: '#DD0031',
    icon: 'SiAngular',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Project Manager',
    company: 'TechCorp Solutions',
    avatar: '',
    quote: 'Vishwaram is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him a valuable team member.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    avatar: '',
    quote: 'Working with Vishwaram has been a pleasure. He perfectly translates design mockups into pixel-perfect, responsive interfaces with excellent animation work.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    role: 'Startup Founder',
    company: 'InnovateTech',
    avatar: '',
    quote: 'Vishwaram built our entire web platform from scratch. His technical expertise and commitment to deadlines helped us launch on time. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Deepika Nair',
    role: 'Senior Developer',
    company: 'Digital Agency',
    avatar: '',
    quote: 'Vishwaram has excellent knowledge of React and TypeScript. His code is clean, well-documented, and follows best practices. A true professional.',
    rating: 5,
  },
];

// ─── Navigation ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

// ─── Social Links ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/iamvishwaramj-ship-it',
    icon: 'FaGithub',
    color: '#181717',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishwaram-j-794b1b34b/',
    icon: 'FaLinkedin',
    color: '#0A66C2',
  },
];
