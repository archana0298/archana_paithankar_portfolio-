import { Experience, Project, SkillCategory, Education, Award } from './types';

export const personalInfo = {
  name: 'Archana Paithankar',
  headline: 'React JS Developer | Frontend Engineer | Full Stack Developer',
  shortHeadline: 'React.js & TypeScript Specialist | Performance-Driven Developer',
  yearsOfExperience: '3.5+',
  location: 'Pune, India',
  email: 'ranipaithankar14@gmail.com',
  phone: '8766033019',
  linkedin: 'https://www.linkedin.com/in/archana-paithankar/',
  github: 'https://github.com/archana0298',
};

export const professionalSummary = `Full-stack focused React JS Developer with 3.5+ years of proven expertise architecting scalable, high-performance web applications. Expert in building schema-driven UI systems, reusable component architectures, and complex enterprise workflows using React.js, TypeScript, Redux Toolkit, and REST APIs. Demonstrated ability to optimize frontend performance by 40%+ and deliver mission-critical features in fast-paced product environments. Actively transitioning to Full Stack development with backend expertise. Passionate about clean code, performance optimization, and building products that matter.`;

export const whyHireMe = [
  {
    title: 'React Expertise',
    description: 'Expert in React.js with 3.5+ years building scalable applications for 500+ enterprise users',
  },
  {
    title: 'Performance Optimization',
    description: 'Reduced bundle sizes by 38% and improved rendering by 40% through strategic optimization techniques',
  },
  {
    title: 'TypeScript Mastery',
    description: 'Strong TypeScript skills for building maintainable, type-safe enterprise applications',
  },
  {
    title: 'State Management',
    description: 'Expert with Redux Toolkit, Context API handling 100+ concurrent state updates seamlessly',
  },
  {
    title: 'Schema-Driven Architecture',
    description: 'Designed enterprise-grade form engines supporting 50+ field types with 40% less development effort',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrated 20+ REST APIs with proper error handling and real-time data synchronization',
  },
  {
    title: 'Responsive Design',
    description: '99%+ cross-device compatibility using Tailwind CSS with mobile-first approach',
  },
  {
    title: 'Problem Solver',
    description: 'Resolved critical production bugs, performance bottlenecks through systematic debugging and analysis',
  },
  {
    title: 'Code Reusability',
    description: 'Built 20+ component libraries with 95% code reusability across 15+ feature modules',
  },
  {
    title: 'Immediate Contributor',
    description: 'Ready to make an impact from day one with proven track record of delivering high-quality features',
  },
];
export const experiences: Experience[] = [
  {
    id: 'acc',
    company: 'Applied Cloud Computing',
    designation: 'React JS Developer',
    duration: 'Nov 2025 – Apr 2026',
    location: 'Pune',
    projects: [
      {
        id: 'metricstream',
        name: 'MetricStream GRC Platform',
        responsibilities: [
          'Architected schema-driven dynamic form system reducing development effort by ~40%',
          'Designed reusable component library and scalable React architecture',
          'Engineered complex validation logic handling 40+ business rules and workflow states',
          'Integrated 20+ REST APIs across multiple modules',
        ],
        achievements: [
          'Reduced development effort by 40%',
          'Designed reusable component library serving 15+ modules',
          'Improved UI rendering performance by 35%',
          'Resolved critical production bugs',
        ],
        technologies: [
          'React.js',
          'TypeScript',
          'Redux Toolkit',
          'Tailwind CSS',
          'REST APIs',
          'Axios',
        ],
      },
    ],
  },

  {
    id: 'qodequay',
    company: 'Qodequay Technologies',
    designation: 'React JS Developer',
    duration: 'Sept 2022 – Jul 2025',
    location: 'Pune, India',
    projects: [
      {
        id: 'spare-tag',
        name: 'Spare-Tag – Asset Tracking & Inventory Management System',
        responsibilities: [
          'Built production-ready frontend from scratch serving 500+ enterprise users',
          'Implemented centralized Redux state management',
          'Integrated RESTful APIs',
          'Optimized performance through code splitting',
        ],
        achievements: [
          'Reduced component re-renders by 45%',
          'Reduced bundle size by 38%',
          'Achieved 99%+ cross-device compatibility',
        ],
        technologies: [
          'React.js',
          'TypeScript',
          'Redux Toolkit',
          'Tailwind CSS',
          'REST APIs',
          'Webpack',
        ],
      },

      {
        id: 'inspiroz',
        name: 'INSPIROZ – EdTech Platform',
        responsibilities: [
          'Led frontend development for onboarding and dashboard modules',
          'Built reusable component library',
          'Managed complex state using Redux Toolkit',
          'Optimized application performance',
        ],
        achievements: [
          'Handled 10,000+ daily active users',
          'Built 20+ reusable components',
          'Reduced development time by 30%',
        ],
        technologies: [
          'React.js',
          'TypeScript',
          'Redux Toolkit',
          'Context API',
          'Tailwind CSS',
        ],
      },

      {
        id: 'easy-okr',
        name: 'Easy OKR – Performance & Goal Tracking Application',
        responsibilities: [
          'Developed OKR-based performance tracking system',
          'Implemented scalable Redux state management',
          'Integrated goal tracking APIs',
        ],
        achievements: [
          'Handled 100+ concurrent updates',
          'Built dynamic UI generation system',
          'Ensured responsive design',
        ],
        technologies: [
          'React.js',
          'TypeScript',
          'Redux Toolkit',
          'Tailwind CSS',
          'REST APIs',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'MetricStream GRC Platform',
    category: 'Enterprise',
    problem: 'Manual form development was time-consuming and repetitive across multiple enterprise modules, slowing feature delivery and increasing maintenance overhead.',
    solution: 'Architected a schema-driven dynamic form system that generates forms from configuration, eliminating manual development and enabling rapid feature deployment.',
    features: [
      'Schema-driven dynamic form generation',
      'Support for 50+ field types and validation rules',
      'Complex workflow state management (40+ business rules)',
      '20+ REST API integrations',
      'Real-time data synchronization',
      'Enterprise-grade error handling',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Axios', 'Tailwind CSS'],
    impact: '40% reduction in development effort, 35% UI performance improvement',
    type: 'web',
  },
  {
    id: 'project-2',
    title: 'Spare-Tag – Asset Tracking & Inventory Management',
    category: 'Enterprise',
    problem: 'Asset tracking lacked real-time synchronization, scalable architecture, and performance optimization for 500+ concurrent users.',
    solution: 'Built a production-ready React frontend with Redux state management, REST API integration, and comprehensive performance optimization.',
    features: [
      'Real-time asset tracking and inventory management',
      'Redux-based centralized state management',
      'CRUD operations with API integration',
      'Responsive mobile-first UI',
      'Advanced code splitting and lazy loading',
      'Cross-device compatibility (99%+)',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Tailwind CSS', 'Webpack'],
    impact: 'Served 500+ enterprise users, 45% reduction in re-renders, 38% bundle size reduction',
    type: 'web',
  },
  {
    id: 'project-3',
    title: 'INSPIROZ – EdTech Platform',
    category: 'SaaS',
    problem: 'EdTech platform needed scalable component architecture and performance optimization for high-traffic periods with 10,000+ daily active users.',
    solution: 'Led frontend development with reusable component library and optimized state management for both student and teacher workflows.',
    features: [
      'Student onboarding workflow',
      'Teacher dashboard with analytics',
      'Reusable component library (20+ components)',
      'Theme management with Context API',
      'Optimized page load times (2.5s on 4G)',
      'Complex state management',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'REST APIs'],
    impact: 'Handled 10,000+ daily active users, 30% faster development, 2.5s page load on 4G',
    type: 'web',
  },
  {
    id: 'project-4',
    title: 'Easy OKR – Performance Tracking',
    category: 'Enterprise',
    problem: 'OKR tracking system required dynamic UI generation based on organizational hierarchy and handling of 100+ concurrent state updates.',
    solution: 'Developed scalable Redux state management with dynamic UI generation engine supporting organizational hierarchy changes.',
    features: [
      'Dynamic UI generation based on hierarchy',
      'Scalable state management (100+ concurrent updates)',
      'Goal tracking and progress visualization',
      'Real-time API synchronization',
      'Responsive across desktop and mobile',
      'Performance optimized for scale',
    ],
    technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
    impact: 'Handled 100+ concurrent updates, scalable UI generation, production-ready system',
    type: 'web',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Ant Design'],
  },
  {
    name: 'State Management',
    skills: ['Redux Toolkit', 'Context API', 'React Hooks', 'useState', 'useEffect', 'useMemo', 'useCallback'],
  },
  {
    name: 'APIs & Performance',
    skills: ['REST APIs', 'Axios', 'Async/Await', 'Lazy Loading', 'Code Splitting', 'React.memo', 'Memoization', 'Error Handling'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Jenkins', 'npm', 'Webpack', 'VS Code', 'Vercel', 'Netlify'],
  },
  {
    name: 'Testing',
    skills: ['React Testing Library', 'Unit Testing', 'Component Testing'],
  },
  {
    name: 'Databases & Backend',
    skills: ['SQL Database', 'JSON', 'Fetch API', 'API Design'],
  },
];

export const education: Education[] = [
  {
    degree: 'Master of Computer Science – Software Engineering',
    institution: 'Vishwalata College of Commerce & Science, Yeola, Nashik',
    years: '2019–2021',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Vishwalata College of Commerce & Science, Yeola, Nashik',
    years: '2016–2019',
  },
];

export const awards: Award[] = [
  {
    title: 'Outstanding Team Award',
    organization: 'Qodequay Technologies',
    year: '2023',
  },
  {
    title: 'Phenomenal Efforts Award',
    organization: 'Qodequay Technologies',
    year: '2024',
  },
];

export const achievements = [
  { metric: '3.5+', label: 'Years of Experience' },
  { metric: '500+', label: 'Enterprise Users Served' },
  { metric: '40%', label: 'Performance Improvement' },
  { metric: '38%', label: 'Bundle Size Reduction' },
  { metric: '20+', label: 'REST APIs Integrated' },
  { metric: '50+', label: 'Field Types Supported' },
  { metric: '95%', label: 'Code Reusability Rate' },
  { metric: '10K+', label: 'Daily Active Users' },
];
