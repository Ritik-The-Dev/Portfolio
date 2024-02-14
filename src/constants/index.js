import {starbucks } from "../assets/images";
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
    threads
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
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
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "FullStack Developer",
        company_name: "NullClass",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Aug 2023 - November 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
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
        name: 'Working on Miro Clone',
        description: ' A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.',
        link: 'https://github.com/Ritik-the-dev/Miro-Clone',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'RealTime Chat App',
        description: 'Developed a web application that Uses Socket.io and allows user to Interact each other in real Time.',
        link: 'https://github.com/Ritik-The-Dev/Live-Chat-App-FullStack',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'One to One Video Calling App',
        description: 'Created a full-stack using Webrtc and Socket.io to Connect with other users using webrtc in real Time .',
        link: 'https://github.com/Ritik-The-Dev/Live-Video-Calling',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Stack Overflow Clone',
        description: 'Built a complete clone of Stack Overflow, allowing users to share code ,Questions photos and connect with students in a familiar social media environment.',
        link: 'https://github.com/Ritik-The-Dev/Stackoverflow-Fullstack',
    },
];