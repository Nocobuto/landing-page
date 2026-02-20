import {
  whitebox,
  prixa,
  smartheart,
  mercubuana,
  publicis,
  graphy,
  personal,
  space_invaders,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Administrative management assistant",
    company_name: "Mexican Navy",
    icon: whitebox,
    iconBg: "#242323",
    date: "May 2021 - July 2025",
    points: [
      "Maintained simplicity, ease of navigation, and responsive design to accommodate diverse user base",
      "Ensured the site is accessible to all users with clear text, captions, and a readable font.",
      "Assisted in redesigning existing brand interfaces to improve visual appeal and user engagement.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: prixa,
    iconBg: "#f3f3f3",
    date: "August 2025 - Present",
    points: [
      "Contributed to the maintenance and development of platforms using React, Node.js, and other technologies.",
      "Coordinated with the team to debug and resolve issues across products.",
      "Implemented responsive design principles to ensure applications function well on various devices and screen sizes.",
      "Responsible for maintaining data to ensure accuracy and compliance",
    ],
  },
];

const projects = [
  {
    name: "Aprenidiomas",
    description:
      "Aprenidiomas is a web-based educational platform focused on language learning, designed to provide a clear, accessible, and well-structured experience for students at different proficiency levels.",
    image: smartheart,
    projectLink: "https://aprenidiomas-proyecto-integrador.vercel.app/login#",
  },
  
  {
    name: "REST API with JWT Auth",
    description:
      "REST API with JWT authentication, user roles, product CRUD and Swagger documentation. Deployed on Railway with PostgreSQL database, providing secure and efficient backend services for web applications.",
    image: graphy,
    projectLink: "https://api-rest-production-44e6.up.railway.app/api-docs",
  },
  {
    name: "Neon Invaders — Web Game",
    description:
      "A modern Space Invaders remake built with Phaser.js and vanilla JavaScript, featuring progressive difficulty, power-up systems, 4 enemy types with unique behaviors, and fully responsive design with adaptive controls for mobile and desktop.",
    image: space_invaders,
    projectLink: "https://space-invaders-pro.vercel.app/",
  },
  {
    name: "URL Shortener",
    description:
      "Full-stack application for creating short, trackable URLs with custom aliases. Features serverless API, real-time analytics, and responsive design. Deployed on Vercel with $0 operational cost.",
    image: mercubuana,
    projectLink: "https://agb1.vercel.app/",
  },
  
  {
    name: "FullstackArturo",
    description:
      "A personal website built with React , ThreeJS and Tailwind, showcasing my portfolio and skills. It features a responsive design and smooth animations, providing an engaging user experience.",
    image: personal,
    projectLink: "",
  },
];

export { experiences, projects };