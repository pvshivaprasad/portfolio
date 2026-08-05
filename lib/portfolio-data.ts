export interface SocialLinks {
  github: string;
  linkedin?: string;
  leetcode?: string;
  email?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techstack: string[];
  githubUrl: string;
  projectUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: "work" | "achievement" | "learning";
}

export interface PortfolioProfile {
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  summary: string;
  about: string;
  location: string;
  email: string;
  avatarUrl: string;
  resumeUrl?: string;
  coreAreas: string[];
  education: Education[];
  socialLinks: SocialLinks;
}

export const portfolioProfile: PortfolioProfile = {
  name: "Venkata Shiva Prasad Punna",
  shortName: "Venkata Shiva Prasad Punna",
  headline: "Engineer across Python, AI, and Backend Systems",
  tagline: "Python • Java • AI • Backend Engineering",
  summary:
    "I build practical software with Python, Java, and AI from intelligent applications and REST APIs to full-stack web systems that solve real problems.",
  about:
    "I'm a Computer Science (AI & ML) student focused on software development, problem solving, and applied machine learning. I enjoy turning ideas into working applications — from backend systems and web apps to ML and computer vision projects. I'm always strengthening my foundations in data structures, algorithms, and scalable backend design.",
  location: "Hyderabad, Telangana, India",
  email: "pvshivaprasad@outlook.com",
  avatarUrl: "https://avatars.githubusercontent.com/u/160164148?v=4",
  coreAreas: [
    "Python Development",
    "AI & Machine Learning",
    "Backend APIs",
    "Node.js & Express",
    "Computer Vision",
    "NLP & Gemini AI",
    "Data Structures & Algorithms",
    "Streamlit Applications",
    "MongoDB & SQLite",
    "REST API Design",
  ],
  education: [
    {
      degree: "B.Tech Computer Science (AI & ML)",
      institution: "Guru Nanak Institute of Technology",
      period: "2022 - 2026",
      grade: "8.86 CGPA",
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Narayana Junior College",
      period: "2020 - 2022",
      grade: "89%",
    },
    {
      degree: "Secondary Schooling (SSC)",
      institution: "KakatiyaHigh School",
      period: "2020",
      grade: "10 CGPA",
    },
  ],
  socialLinks: {
    github: "https://github.com/pvshivaprasad",
    email: "mailto:pvshivaprasad@outlook.com",
  },
};

export const allProjects: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle: "Intelligent ATS Feedback Coach",
    description:
      "AI-powered application that extracts resume information, performs ATS-oriented analysis, and generates intelligent feedback.",
    highlights: [
      "Built resume parsing pipeline with PyMuPDF for structured text extraction.",
      "Integrated Gemini AI for ATS scoring and actionable improvement suggestions.",
      "Designed Streamlit interface for real-time analysis and feedback delivery.",
    ],
    techstack: ["Python", "Streamlit", "Gemini AI", "PyMuPDF", "NLP"],
    githubUrl: "https://github.com/pvshivaprasad/AI_RESUME_ANALYZER",
    featured: true,
  },
  {
    id: "globalpad",
    title: "GlobalPad",
    subtitle: "Secure Cloud Workspace",
    description:
      "Web-based file management and sharing application with persistent storage and backend file operations.",
    highlights: [
      "Implemented secure file upload and retrieval using MongoDB GridFS.",
      "Built RESTful APIs with Node.js and Express for note and file management.",
      "Designed responsive frontend for cross-device workspace access.",
    ],
    techstack: ["Node.js", "Express.js", "MongoDB", "GridFS", "JavaScript"],
    githubUrl: "https://github.com/pvshivaprasad/GlobalPad",
    featured: true,
  },
  {
    id: "food-waste-management",
    title: "Food Waste Management",
    subtitle: "Smart Donation Platform",
    description:
      "Smart food donation platform built with Python and Streamlit to reduce food waste through organized donation tracking.",
    highlights: [
      "Created donation tracking workflow with SQLite persistence.",
      "Built analytics views with Pandas for waste reduction insights.",
      "Designed intuitive Streamlit UI for donors and coordinators.",
    ],
    techstack: ["Python", "Streamlit", "SQLite", "Pandas"],
    githubUrl: "https://github.com/pvshivaprasad/Food_Waste_Management",
    featured: true,
  },
  {
    id: "human-pose-estimation",
    title: "Human Pose Estimation",
    subtitle: "Real-Time Computer Vision",
    description:
      "Real-time human pose estimation using Python, OpenCV, and MediaPipe for body landmark detection.",
    highlights: [
      "Implemented real-time pose detection pipeline with MediaPipe.",
      "Processed video streams with OpenCV for live landmark visualization.",
      "Optimized frame processing for smooth real-time performance.",
    ],
    techstack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    githubUrl: "https://github.com/pvshivaprasad/HumanPoseEstimation",
    featured: true,
  },
  {
    id: "dsa-python",
    title: "DSA in Python",
    subtitle: "Interview-Ready Problem Solving",
    description:
      "Interview-oriented data structures and algorithms in Python with clean implementations and problem-solving patterns.",
    highlights: [
      "Documented common patterns for arrays, trees, graphs, and dynamic programming.",
      "Organized solutions with clear time and space complexity notes.",
      "Structured repository for quick interview preparation reference.",
    ],
    techstack: ["Python", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/pvshivaprasad/DSA-in-Python",
    featured: false,
  },
  {
    id: "sweet-shop",
    title: "Sweet Shop Management",
    subtitle: "Full-Stack Inventory System",
    description:
      "Full-stack sweet shop management system with inventory tracking and order management capabilities.",
    highlights: [
      "Built end-to-end CRUD operations for products and orders.",
      "Implemented role-based workflows for shop administration.",
      "Designed responsive UI for in-store and online management.",
    ],
    techstack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    githubUrl:
      "https://github.com/pvshivaprasad/Sweet-Shop-Management-System-Full-Stack",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "Gemini AI",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "SQLite",
      "GridFS",
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Streamlit",
      "Postman",
      "VS Code",
      "PyMuPDF",
      "Pandas",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "open-source",
    company: "Open Source Development",
    role: "Personal Projects & Learning",
    period: "2024 - Present",
    description:
      "Building and maintaining 25+ public repositories spanning AI applications, backend APIs, computer vision, and full-stack web development on GitHub.",
    type: "work",
  },
  {
    id: "ai-ml-focus",
    company: "AI & ML Engineering",
    role: "Applied Machine Learning",
    period: "2024 - Present",
    description:
      "Developing intelligent applications with Gemini AI, NLP pipelines, and computer vision — including resume analysis, pose estimation, and analytics tools.",
    type: "work",
  },
  {
    id: "backend-focus",
    company: "Backend Development",
    role: "API & Database Design",
    period: "2024 - Present",
    description:
      "Designing REST APIs with Node.js and Express, integrating MongoDB and SQLite, and building scalable file storage solutions with GridFS.",
    type: "work",
  },
  {
    id: "dsa-learning",
    company: "Problem Solving",
    role: "Data Structures & Algorithms",
    period: "2024 - Present",
    description:
      "Strengthening interview-oriented problem solving with clean Python implementations, pattern recognition, and complexity analysis.",
    type: "learning",
  },
];

export const typewriterRoles = [
  "Python Developer",
  "AI Engineer",
  "Backend Developer",
  "ML Enthusiast",
  "Problem Solver",
];
