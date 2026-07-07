// ============================================================
// portfolioData.js — Centralized configuration for Abdur Rehman's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Abdur Rehman",
  firstName: "Abdur Rehman",
  brandName: "Abdur Rehman",
  title: "Software Engineer & Full-Stack Developer",
  location: "Karachi, Pakistan",
  phone: "+92 324 2479661",
  emails: {
    primary: "pc18050.abdurehman@gmail.com",
  },
  summary:
    "Software Engineer with hands-on experience building web, mobile, and e-commerce applications. Skilled in React, Next.js, Node.js, Remix, SQL, API integrations, automation, and web scraping. Built production-ready Shopify apps, internal business tools, and data-driven platforms with a focus on clean implementation and practical problem-solving.",
  resumeUrl: "./Abdur_Rehman_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/abdurehman370",
  linkedin: "https://www.linkedin.com/in/abdu-rehman-b19893288/",
};

export const heroContent = {
  greeting: "Hi, I'm Abdur Rehman",
  titleHighlight: "Software Engineer",
  subtitle:
    "Building practical software that solves real business problems. Focused on full-stack web development, APIs, automation, and e-commerce systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pc18050.abdurehman@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Abdur Rehman,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "./Abdur_Rehman_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Abdur Rehman</span>, a Software Engineer based in Karachi, Pakistan, dedicated to crafting clean, functional, and highly scalable web and mobile applications. I have hands-on experience building Shopify apps, internal tools, and automation workflows with a focus on clean frontend experiences and reliable backend logic.`,
  techStack: ["React", "Node.js", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust, data-driven applications.",
  cards: [
    {
      number: "01",
      title: "Research & Plan",
      text: "Understanding business goals, api requirements, and technical constraints to outline a clear architecture for e-commerce or full-stack platforms.",
    },
    {
      number: "02",
      title: "Design & Schema",
      text: "Crafting database schemas (SQL/PostgreSQL), clean REST & GraphQL API specs, and highly usable interface wireframes.",
    },
    {
      number: "03",
      title: "Develop & Integrate",
      text: "Building robust frontend features in React/Next.js/Remix and scalable backend logic in Node.js/Python, integrated with services and webhooks.",
    },
    {
      number: "04",
      title: "Optimize & Ship",
      text: "Refining query efficiency, testing background queue jobs (Redis/BullMQ), and deploying production-ready containerized microservices.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Frontend Stack",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "Remix", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      title: "Backend & Integration",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / FastAPI", level: 80 },
        { name: "Shopify APIs / GraphQL", level: 92 },
        { name: "REST APIs & Webhooks", level: 94 },
        { name: "Automation Workflows", level: 85 },
        { name: "Web Scraping", level: 88 },
      ],
    },
    {
      title: "Databases & DevOps",
      skills: [
        { name: "PostgreSQL / Prisma", level: 85 },
        { name: "MySQL / SQL Server", level: 88 },
        { name: "Redis / BullMQ", level: 82 },
        { name: "Docker", level: 75 },
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code & Tools", level: 95 },
      ],
    },
  ],
};

// Work Experience Data (replaces Yusuf's Internships)
export const experienceList = [
  {
    organization: "DevTeamPro",
    role: "Software Developer",
    duration: "Aug 2025 - Present",
    skills: [
      "Shopify App Development",
      "API & Webhooks Integrations",
      "Theme Liquid Customization",
      "E-commerce Operations Flow",
    ],
    tech: ["Remix", "Node.js", "Shopify APIs", "GraphQL", "Liquid", "React"],
    description:
      "Develop custom Shopify applications using Remix, Node.js, and Shopify APIs to support merchant storefronts and operational workflows. Enhance review management and Cash on Delivery workflows.",
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Deconstructing business bottlenecks into clean, logic-driven coding tasks.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Coordinating with managers and other developers to build features in sync.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear documentation of backend API architecture and frontend states.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to research, pick up, and apply new tools or framework versions.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing multiple app modifications, code reviews, and support updates.",
  },
];

// Projects Data (includes screenshots and features)
export const projects = [
  {
    id: "i-car",
    number: "01",
    badge: "🚗 Featured Platform",
    title: "I-Car Evaluation Platform",
    description:
      "Real-time vehicle price evaluation platform targeting UAE, Lebanon, and European markets. Integrated AI price predictions and listing scraping workflows, leveraging Redis and BullMQ for high-performance alerts and cron-style scheduled background tasks.",
    techTags: [
      "Next.js",
      "React Native",
      "Python",
      "Redis",
      "BullMQ",
      "AI Prediction",
      "Expo",
    ],
    features: [
      "Built web and mobile product flows for vehicle price evaluation.",
      "Collected listing data from regional sources using Python scrapers.",
      "Implemented dealer authentication and admin control panels.",
      "Managed background jobs and real-time email/alert delivery.",
    ],
    links: {
      github: "https://github.com/abdurehman370/I-Car",
      caseStudy: "./i-car-case-study.pdf",
      demo1: "https://youtu.be/9dU3dyGEr3o", // Scraping Demo
      demo2: "https://youtu.be/ijQPD66E8FY", // Pricing Demo
    },
    images: [
      { src: "./images/icar1.png", caption: "Home Page" },
      { src: "./images/icar2.png", caption: "Dealer Login" },
      { src: "./images/icar3.png", caption: "Dealer Dashboard" },
      { src: "./images/icar4.png", caption: "Vehicle Evaluation — AI price prediction" },
      { src: "./images/icar7.png", caption: "Admin login" },
      { src: "./images/icar5.png", caption: "Admin Panel — managing listings and dealers" },
      { src: "./images/icar6.png", caption: "Dealer Authentication" },
    ],
    isFlagship: true,
  },
  {
    id: "procure-ai",
    number: "02",
    badge: "📦 Enterprise Solution",
    title: "ProcureAI: Supply Chain",
    description:
      "Enterprise-grade, AI-powered procurement and inventory management workspace designed to eliminate supply chain inefficiencies. Built on a decoupled microservices architecture with robust demand forecasting.",
    techTags: [
      "Next.js 15",
      "FastAPI",
      "Prisma",
      "PostgreSQL",
      "Tailwind v4",
      "Docker",
    ],
    features: [
      "AI-driven demand forecasting and price anomaly detection.",
      "Decoupled microservices architecture for multi-warehouse scalability.",
      "Warehouse tracking, manual adjustments, and vendor performance dashboards.",
      "Dynamic purchase orders and custom automation workflows.",
    ],
    links: {
      github:
        "https://github.com/abdurehman370/ProcureAI-Smart-Inventory-Supply-Chain-Intelligence",
      caseStudy: "./smart-procurement-case-study.pdf",
    },
    images: [
      { src: "./images/procurement1.png", caption: "Executive Dashboard — Login-Page" },
      { src: "./images/procurement2.png", caption: "Inventory Management — stock tracking" },
      { src: "./images/procurement3.png", caption: "Demand Forecasting — AI-driven predictions" },
      { src: "./images/procurement4.png", caption: "Vendor Management — supplier metrics" },
      { src: "./images/procurement5.png", caption: "Purchase Orders — automated workflows" },
      { src: "./images/procurement6.png", caption: "Warehouse Analytics — regional distribution" },
      { src: "./images/procurement7.png", caption: "Price Anomaly Detection" },
      { src: "./images/procurement8.png", caption: "System Settings & Configuration" },
    ],
    isFlagship: true,
  },
  {
    id: "claritydesk",
    number: "03",
    badge: "🧠 Agentic AI Workspace",
    title: "ClarityDesk AI",
    description:
      "Enterprise decision intelligence workspace that turns messy document sets into searchable evidence, contradiction matrices, automated decision memos, and follow-up tasks.",
    techTags: [
      "Next.js",
      "NestJS",
      "Agentic AI",
      "RAG",
      "pgvector",
      "BullMQ",
      "Redis",
      "PostgreSQL",
    ],
    features: [
      "Asynchronous document ingestion pipeline generating summaries, facts, and embeddings.",
      "Semantic search and contradiction analysis across uploaded file sets.",
      "AI-based intelligence comparison matrices and automated risk analysis.",
      "Workspace-scoped role-based access control (RBAC) and audit logging.",
    ],
    links: {
      github: "https://github.com/abdurehman370/ClarityDesk-Ai",
      caseStudy: "./claritydesk-case-study.pdf",
    },
    images: [
      { src: "./images/claritydesk2.png", caption: "Login / Signup page" },
      { src: "./images/claritydesk3.png", caption: "Dashboard overview" },
      { src: "./images/claritydesk4.png", caption: "Manage Workspaces" },
      { src: "./images/claritydesk5.png", caption: "Upload Document for Workspace" },
      { src: "./images/claritydesk6.png", caption: "AI Based Intelligence Memo" },
      { src: "./images/claritydesk7.png", caption: "AI comparison matrix" },
      { src: "./images/claritydesk8.png", caption: "AI Risk Analysis" },
      { src: "./images/claritydesk9.png", caption: "Action Task Board" },
    ],
    isFlagship: false,
  },
  {
    id: "shopify-reviews",
    number: "04",
    badge: "🛍️ Shopify App",
    title: "Product Reviews App",
    description:
      "Custom Shopify application enabling merchants to collect and moderate product reviews. Integrated directly with Shopify admin dashboard APIs and optimized for storefront injection.",
    techTags: ["Remix", "Node.js", "Shopify APIs", "GraphQL", "React"],
    features: [
      "Built merchant review moderation and approval dashboards.",
      "Linked with Shopify admin REST and GraphQL API structures.",
      "Rendered embedded customer reviews directly on storefront pages.",
    ],
    links: {
      github: "https://github.com/DevteamPro-Inc/shopify-review-app",
      demo: "https://apps.shopify.com/devteampro-product-reviews",
    },
    images: [
      { src: "./images/review1.jpg", caption: "Embedded Admin Moderation" },
      { src: "./images/review2.jpg", caption: "Merchant Triage UX" },
      { src: "./images/review3.jpg", caption: "Storefront Reviews Widget" },
      { src: "./images/review4.jpg", caption: "Review App Settings" },
    ],
    isFlagship: false,
  },
];

export const education = {
  degree: "BSCS (Bachelor of Science in Computer Science)",
  institution: "Bahria University, Karachi",
  cgpa: "3.4 / 4.0",
  graduation: "Completed",
  focus: "Software engineering, data structures, and web technologies.",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "React · Remix · Node.js",
    "Full-Stack Applications",
  ],
  credential: "Bahria University · BSCS · GPA 3.4",
  copyright: `© ${new Date().getFullYear()} Abdur Rehman | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
