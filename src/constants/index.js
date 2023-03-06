import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  atlan,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer intern",
    company_name: "Anicca Data",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Atlan",
    icon: atlan,
    iconBg: "black",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using Vue.js, react.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Deal with customer feedbacks and create feature based on business requirements (clients: digitalocean, canva and 100 more)",
      "Made end to end product monitoring module handling all the analytics of product usage inside product"
    ],
  },
  {
    title: "SWE (Frontend) Developer intern",
    company_name: "Proenx (Rdep)",
    icon: tesla,
    iconBg: "black",
    date: "Jan 2022 - may 2022",
    points: [
      "Worked on a CRM module completely from scratch and made it successful in pilot mode by partnering with future group.",
      "made customer payment receipt system for brand factory and pantaloons.",
      "Made a ETL based tool for internal usage of comapanies for generating general reports and analytics of the customers.",
      "worked on login, signup , otp authentication model and password hashing system.",
      "worked closely with the UI team to design beautiful UI pages and maintain the project"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce site",
    description:
      "Web-based platform that allows users to search, order, and pay for clothes and fashion styles from various providers, providing a convenient and efficient solution for fashion needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ashishkubehera/React_E-Commerce",
  },
  {
    name: "Crypto Tracker",
    description:
      "Web application that enables users to search for cryptocurrencies, view exact value for positions, and find current rank based on different filters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ashishkubehera/CrryptoTracker",
  },
  {
    name: "Admin Dashboard",
    description:
      "A comprehensive analytics and management platform that allows users to check analytics , create tickets, and offers curated recommendations for popular tasks.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ashishkubehera/admin-dashboard"
  },
];

export { services, technologies, experiences, testimonials, projects };
