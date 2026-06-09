import type { PortfolioData } from '../domain/types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Oksenda Fauzon Putra',
    title: 'Senior Backend & Platform Engineer',
    location: 'Jakarta, Indonesia',
    email: 'oksendafauzonputra20@gmail.com',
    phone: '+62 822-9797-2983',
    linkedin: 'https://linkedin.com/in/oksenda',
    github: 'https://github.com/oksenda',
    summary:
      'Senior Backend and Platform Engineer with 3+ years of experience designing, securing, and operating enterprise-grade distributed systems. Specialized in Java (Spring Boot & Spring Security), Go, and .NET microservices, with proven ownership of system bootstrap, security architecture, data migration, and compliance standards. Track record of delivering national-scale enterprise projects for PLN Indonesia. Strong full-stack background (Laravel, React, Flutter) accelerates end-to-end problem solving. Open to remote opportunities.',
    photo: '/kiki01.jpeg',
  },
  skills: [
    {
      category: 'Backend',
      items: ['Java (Spring Boot, Spring Security)', 'Go', 'C# (.NET)', 'PHP (Laravel)', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['React (TypeScript, JavaScript)', 'Vue.js', 'Angular', 'Alpine.js'],
    },
    {
      category: 'Mobile',
      items: ['Flutter (Dart)', 'Kotlin (Android Native)'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MS SQL Server'],
    },
    {
      category: 'DevOps & QA',
      items: ['Docker', 'CI/CD Pipelines', 'Katalon Studio', 'SonarQube'],
    },
    {
      category: 'Architecture',
      items: ['Microservice Architecture', 'RESTful API Design', 'API Gateway', 'Message Broker', 'SSE'],
    },
  ],
  experience: [
    {
      id: 'indocyber',
      role: 'Backend / Platform Engineer',
      company: 'PT Indocyber Global Teknologi',
      period: 'January 2024 – Present',
      location: 'Jakarta, Indonesia',
      description: 'Enterprise projects delivered for PLN (Perusahaan Listrik Negara – Indonesia)',
      highlights: [
        'Set up and maintained microservices architecture for scalable enterprise applications; designed service boundaries, module structures, and technical standards adopted by cross-functional teams.',
        'Designed and developed secure RESTful APIs with JWT/JWE authentication, role-based access control, and standardized request/response/error handling patterns.',
        'Configured API Gateway for centralized routing, authentication, and load balancing across distributed services.',
        'Integrated Message Broker services for asynchronous inter-service communication and implemented SSE for real-time notifications.',
        'Configured centralized logging and monitoring; integrated SonarQube for code quality, security checks, and maintainability analysis.',
        'Collaborated with frontend and DevOps teams for smooth system integration and deployment.',
      ],
      projects: [
        {
          name: 'BDCT – Business Development Control Tower',
          tech: 'Java Spring Boot',
          points: [
            'Bootstrapped the entire microservice architecture from scratch, establishing service boundaries, security standards, and distributed module structure.',
            'Designed and implemented Spring Security authentication, authorization, and filter-chain security for enterprise-grade access control.',
          ],
        },
        {
          name: 'SMARTER – Sistem Informasi Manajemen Risiko Terintegrasi',
          tech: 'Java Spring Boot',
          points: [
            'Architected and set up the full microservices system from the ground up, including overall system and business process flow design.',
            'Established project structure, coding standards, and integration patterns as the technical lead for the initial setup phase.',
          ],
        },
        {
          name: 'ERBAS – Enterprise Risk Based Audit System',
          tech: 'Java Spring Boot',
          points: [
            'Built and integrated APIs ensuring system performance, security, and reliability for enterprise-scale audit processes.',
          ],
        },
        {
          name: 'DARMON – Daramonita',
          tech: 'Go Microservices',
          points: [
            'Developed and maintained Go microservices for a national-scale platform handling large-scale data migration.',
            'Implemented and validated security controls across distributed services, meeting compliance and audit requirements.',
          ],
        },
        {
          name: 'PMO – Program Management Office',
          tech: '.NET Microservices',
          points: [
            'Led security implementation and governance for a .NET microservices platform, covering access control and enterprise security standards.',
          ],
        },
      ],
    },
    {
      id: 'highskill',
      role: 'Co-founder, CTO & Fullstack Engineer',
      company: 'HIGH SKILL (EdTech Startup)',
      period: '2021 – 2023',
      location: 'Indonesia',
      description: 'Co-founded an EdTech startup and led all technical decision-making, architecture, and delivery.',
      highlights: [
        'Designed and developed a full-stack Laravel-based learning platform featuring class registration, integrated payment, and dashboards for tutors and students.',
        'Optimized platform performance for large-scale concurrent users and applied data security and privacy standards.',
        'Managed system architecture, database design, deployment strategy, and technology selection.',
      ],
    },
    {
      id: 'semenpadang',
      role: 'Web Developer & IT Support',
      company: 'PT Semen Padang',
      period: 'January – March 2022',
      location: 'Padang, Indonesia',
      description: 'Internship',
      highlights: [
        'Designed and developed the Public Relations website and event management system with a user-friendly workflow.',
        'Built Laravel-based applications including core feature implementation and system integration.',
        'Performed hardware troubleshooting and installed/configured GPS Tracking to support company operations.',
      ],
    },
  ],
  projects: [
    {
      id: 'homecahub',
      name: 'HOMECAREKU',
      year: '2023',
      description:
        'Full-stack service-booking platform with informative landing page, employee attendance with geo+photo verification, and admin panel for services, customers, and employees.',
      tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
      url: 'https://homecareku.web.id',
    },
    {
      id: 'evoting',
      name: 'E-Voting IDI',
      year: '2024',
      description:
        'Secure e-voting application for the Indonesian Doctors Association (IDI) – currently active in production.',
      tech: ['React', 'TypeScript', 'Java', 'Spring Boot'],
    },
    {
      id: 'clinic',
      name: 'Clinic Queue System',
      year: '2024',
      description:
        'Clinic queue management system with offline-capable Flutter Android app – currently active in production.',
      tech: ['React', 'TypeScript', 'Java', 'Flutter', 'PostgreSQL'],
    },
    {
      id: 'jaseon',
      name: 'JASEON',
      year: '2022',
      description:
        'Android service-booking app with responsive UI, social media integration, and dynamic e-commerce ecosystem supporting service providers and end-users.',
      tech: ['Kotlin', 'Android', 'REST API'],
    },
    {
      id: 'highskill-proj',
      name: 'HIGH SKILL',
      year: '2022',
      description:
        'Laravel-based online learning platform with class registration, payment integration, and dashboards for tutors and students.',
      tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      url: 'https://highskill.id',
    },
    {
      id: 'pkmkc',
      name: 'PKM-KC GPS Tracker',
      year: '2023',
      description:
        'IoT motorcycle anti-theft system using GPS + Raspberry Pi integrated with an Android app; detects theft via key contact, vibration, and position analysis. Budget: IDR 8M.',
      tech: ['Raspberry Pi', 'IoT', 'Android', 'GPS'],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Engineering',
    school: 'Universitas Andalas',
    location: 'Padang, Indonesia',
    year: '2023',
    gpa: '3.78 / 4.00',
    notes: [
      'Relevant coursework: Web Development, Software Engineering, Cloud Computing, AI, Information Security, Mobile & Ad-hoc Networks, UI/UX Design, OOP, Project Management.',
      'Active participant in national hackathons and robotics competitions.',
      'Recipient of Karsa Cipta research funding (PKM-KC).',
      'Robotics & Embedded Systems Laboratory Assistant (2022–2023).',
    ],
  },
};
