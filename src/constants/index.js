import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    snapgram,
    threads,
    typescript,
} from "../assets/icons";

// Experience company logos (external URLs)
const GRID_LOGO = "https://media.licdn.com/dms/image/v2/C560BAQHjy78_EuYo7A/company-logo_200_200/company-logo_200_200/0/1643432430459?e=1782950400&v=beta&t=D6LOGVWECIYhJicRx4uqAHE60uscMYyqxUxhF3l1jw4";
const CHAWLA_LOGO = "https://media.licdn.com/dms/image/v2/D4E0BAQE1mC4_fk077A/company-logo_200_200/company-logo_200_200/0/1726814872932/chawla_ispat_private_limited_logo?e=1782950400&v=beta&t=nzRtp1Hs6JWzJOJPyYYG7Cfps7k5DXkcOx4krfYHAQc";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/supabase",
        name: "Supabase",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/network.svg",
        name: "REST APIs",
        type: "Backend",
    },
    {
        imageUrl: "https://jwt.io/img/pic_logo.svg",
        name: "JWT Authentication",
        type: "Security",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/shield-check.svg",
        name: "RBAC",
        type: "Security",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/boxes.svg",
        name: "Microservices",
        type: "Architecture",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/brain.svg",
        name: "AI Integration",
        type: "Emerging Tech",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/bot.svg",
        name: "LLM Applications",
        type: "Emerging Tech",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/whatsapp",
        name: "WhatsApp Automation",
        type: "Automation",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/npm/lucide-static/icons/webhook.svg",
        name: "Webhooks",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Chawla Ispat Private Limited",
        icon: CHAWLA_LOGO,
        iconBg: "#accbe1",
        date: "Dec 2024 - Nov 2025",
        type: "Full-time | Remote",
        points: [
            "Built and maintained core ERP modules (HRMS, Inventory, and Manufacturing) serving 1000+ daily active users with 99.9% uptime.",
            "Streamlined backend APIs using Node.js and optimized the React frontend, reducing average page load times from 1.8s to 0.6s (65% improvement).",
            "Designed and developed a manufacturing dashboard to track monthly production records, increasing data accuracy by 30%.",
            "Implemented an inventory management system that reduced stock discrepancies by 40%.",
        ],
        technologies: "React.js, Node.js, Express.js, MongoDB, ERP Systems, Manufacturing Software",
    },
    {
        title: "Node.js Developer Intern",
        company_name: "GRID R&D",
        icon: GRID_LOGO,
        iconBg: "#b7e4c7",
        date: "May 2024 - Nov 2024",
        type: "Internship | Remote",
        points: [
            "Developed and optimized backend microservices in Node.js, reducing average API response times from 250ms to 100ms (60% improvement).",
            "Designed and implemented 25 RESTful API endpoints handling 50,000+ monthly requests with 99.9% uptime.",
            "Integrated JWT authentication and Role-Based Access Control (RBAC) using Express.js.",
            "Improved application security, scalability, and maintainability.",
        ],
        technologies: "Node.js, Express.js, MongoDB, JWT, REST APIs, Microservices",
    },
    {
        title: "Trainee Software Developer",
        company_name: "NullClass",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQHjy78_EuYo7A/company-logo_200_200/company-logo_200_200/0/1643432430459?e=1782950400&v=beta&t=D6LOGVWECIYhJicRx4uqAHE60uscMYyqxUxhF3l1jw4",
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Dec 2023",
        type: "Internship | Remote",
        points: [
            "Worked on full-stack web application development.",
            "Developed responsive user interfaces and backend functionality.",
            "Collaborated with development teams to implement new features and fix bugs.",
            "Gained hands-on experience with modern JavaScript frameworks and backend technologies.",
        ],
        technologies: "React.js, Node.js, Express.js, MongoDB",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ritik-the-dev',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritikjoshi',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'WhatsApp Business Automation SaaS',
        description: 'Built a WhatsApp automation platform for businesses. Automated lead capture, follow-ups, customer support, and notifications. Integrated WhatsApp Cloud API, workflow automation, analytics dashboard, campaign management, chatbot flows, role-based access control and multi-tenant architecture.',
        link: 'https://interntech.xyz/',
        featured: true,
        techStack: 'React, Node.js, Express.js, MongoDB, WhatsApp Cloud API, Webhooks',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'Chawla Components ERP Panel',
        description: 'Developed ERP modules for manufacturing operations. Built dashboards for production tracking and business analytics. Implemented inventory management and reporting systems. Improved operational visibility and workflow efficiency.',
        link: 'https://chawlacomponents.in/',
        techStack: 'React.js, Node.js, Express.js, MongoDB',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-orange',
        name: 'URL Shortener & Analytics Platform',
        description: 'Implemented URL shortening with custom aliases, expiration dates, and automatic link invalidation. Designed a dashboard to manage links and view click statistics. Tracked analytics including timestamp, IP, device type, browser, and OS.',
        link: 'https://url-shoretner.vercel.app/',
        techStack: 'React, Node.js, Express.js, MongoDB',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'FormBot – Collaborative Form Builder',
        description: 'Designed a multi-workspace collaboration system with invite-based access control. Enabled dynamic form creation, updates, deletion, and real-time data persistence. Tracked detailed analytics including views, starts, completions, and user responses.',
        link: 'https://formbot-cuvette.vercel.app/',
        techStack: 'React, Node.js, Express.js, MongoDB',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Stack Overflow Clone with Advanced Features',
        description: 'Developed a Q&A platform supporting questions, answers, code snippets, and image uploads. Implemented Razorpay-based subscription and payment management. Built plan-based feature access, user permissions, authentication, and community engagement features.',
        link: 'https://stackoverflow-test.netlify.app/',
        techStack: 'React, Node.js, Express.js, MongoDB, Razorpay',
    },
];
