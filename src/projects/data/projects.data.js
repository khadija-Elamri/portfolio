// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "React Dashboard",
    subtitle: "Interactive Data Visualization",
    description: "Dashboard with interactive charts and data visualization",
    fullDescription: "Dashboard with interactive charts and data visualization built using React and modern charting libraries.",
    category: "Frontend",
    status: "active",
    featured: true,
    technologies: ["React", "D3.js", "Recharts"],
    features: [
      "Interactive charts",
      "Data visualization"
    ],
    challenges: [],
    solutions: [],
    github: "https://github.com/yourusername/react-dashboard",
    gitlab: null,
    liveDemo: "https://react-dashboard-demo.vercel.app",
    deployment: "Vercel",
    deploymentUrl: "https://react-dashboard-demo.vercel.app",
    screenshot: "/assets/images/projects/react-dashboard.jpg",
    videoDemo: null,
    performance: {
      lighthouse: 95,
      loadTime: "1.5s",
      accessibility: 98,
      bestPractices: 92,
      seo: 100
    },
    stats: {
      linesOfCode: 5000,
      components: 20,
      apis: 3,
      tests: 50
    }
  },
  {
    id: 2,
    title: "E-commerce UI",
    subtitle: "Complete E-commerce User Interface",
    description: "Complete e-commerce user interface",
    fullDescription: "Complete e-commerce user interface built with React, Redux, and Tailwind CSS.",
    category: "Frontend",
    status: "active",
    featured: true,
    technologies: ["React", "Redux", "Tailwind CSS"],
    features: [
      "Complete UI",
      "State management with Redux"
    ],
    github: "https://github.com/yourusername/ecommerce-ui",
    gitlab: null,
    liveDemo: "https://ecommerce-ui-demo.netlify.app",
    deployment: "Netlify",
    deploymentUrl: "https://ecommerce-ui-demo.netlify.app"
  },
  {
    id: 3,
    title: "Music Player",
    subtitle: "Music Player with Visual Effects",
    description: "Music player with visual effects and animations",
    fullDescription: "Music player with visual effects and animations using React, Howler.js, and Framer Motion.",
    category: "Frontend",
    status: "active",
    featured: false,
    technologies: ["React", "Howler.js", "Framer Motion"],
    features: [
      "Visual effects",
      "Animations"
    ],
    github: "https://github.com/yourusername/music-player",
    gitlab: null,
    liveDemo: "https://music-player-demo.github.io",
    deployment: "GitHub Pages",
    deploymentUrl: "https://music-player-demo.github.io"
  },
  {
    id: 4,
    title: "Image Gallery",
    subtitle: "Image Gallery with Upload and Filtering",
    description: "Image gallery with upload and filtering features",
    fullDescription: "Image gallery with upload and filtering features using React and Cloudinary API.",
    category: "Frontend",
    status: "active",
    featured: false,
    technologies: ["React", "Cloudinary API"],
    features: [
      "Upload features",
      "Filtering"
    ],
    github: "https://github.com/yourusername/image-gallery",
    gitlab: null,
    liveDemo: "https://image-gallery-demo.vercel.app",
    deployment: "Vercel",
    deploymentUrl: "https://image-gallery-demo.vercel.app"
  },
  {
    id: 5,
    title: "Markdown Editor",
    subtitle: "Markdown Editor with Live Preview",
    description: "Markdown editor with live preview",
    fullDescription: "Markdown editor with live preview built with React and Marked.js.",
    category: "Frontend",
    status: "active",
    featured: false,
    technologies: ["React", "Marked.js"],
    features: [
      "Live preview",
      "Markdown editing"
    ],
    github: "https://github.com/yourusername/markdown-editor",
    gitlab: null,
    liveDemo: "https://markdown-editor-demo.netlify.app",
    deployment: "Netlify",
    deploymentUrl: "https://markdown-editor-demo.netlify.app"
  },
  {
    id: 6,
    title: "Task Manager Pro",
    subtitle: "Team-Based Task Management Application",
    description: "Team-based task management application",
    fullDescription: "Team-based task management application built with MongoDB, Express, React, and Node.js.",
    category: "Full Stack",
    status: "active",
    featured: true,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Team collaboration",
      "Task management"
    ],
    github: null,
    gitlab: null,
    liveDemo: "https://task-manager-demo.onrender.com",
    deployment: "Render",
    deploymentUrl: "https://task-manager-demo.onrender.com"
  },
  {
    id: 7,
    title: "Blog Platform",
    subtitle: "Full-Featured Blogging Platform",
    description: "Full-featured blogging platform",
    fullDescription: "Full-featured blogging platform built with Next.js, Prisma, and PostgreSQL.",
    category: "Full Stack",
    status: "active",
    featured: true,
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    features: [
      "Blogging features",
      "Database integration"
    ],
    github: "https://github.com/yourusername/blog-platform",
    gitlab: null,
    liveDemo: "https://blog-platform-demo.vercel.app",
    deployment: "Vercel + Supabase",
    deploymentUrl: "https://blog-platform-demo.vercel.app"
  },
  {
    id: 8,
    title: "Chat Application",
    subtitle: "Real-Time Chat Application",
    description: "Real-time chat application",
    fullDescription: "Real-time chat application built with Socket.io, Express, and React.",
    category: "Full Stack",
    status: "active",
    featured: false,
    technologies: ["Socket.io", "Express", "React"],
    features: [
      "Real-time messaging",
      "Chat functionality"
    ],
    github: null,
    gitlab: null,
    liveDemo: "https://chat-app-demo.railway.app",
    deployment: "Railway",
    deploymentUrl: "https://chat-app-demo.railway.app"
  },
  {
    id: 9,
    title: "URL Shortener",
    subtitle: "URL Shortening Service",
    description: "URL shortening service",
    fullDescription: "URL shortening service built with Node.js, MongoDB, and React.",
    category: "Full Stack",
    status: "active",
    featured: false,
    technologies: ["Node.js", "MongoDB", "React"],
    features: [
      "URL shortening",
      "Redirection"
    ],
    github: "https://github.com/yourusername/url-shortener",
    gitlab: null,
    liveDemo: "https://url-shortener-demo.onrender.com",
    deployment: "Render",
    deploymentUrl: "https://url-shortener-demo.onrender.com"
  },
  {
    id: 10,
    title: "File Sharing Platform",
    subtitle: "Secure File Sharing Platform",
    description: "Secure file sharing platform",
    fullDescription: "Secure file sharing platform built with Node.js, AWS S3, and React.",
    category: "Full Stack",
    status: "active",
    featured: false,
    technologies: ["Node.js", "AWS S3", "React"],
    features: [
      "File sharing",
      "Security features"
    ],
    github: null,
    gitlab: null,
    liveDemo: "https://file-sharing-demo.amplifyapp.com",
    deployment: "AWS Amplify",
    deploymentUrl: "https://file-sharing-demo.amplifyapp.com"
  }
];

// Project categories
export const projectCategories = [
  { id: "all", name: "All Projects", count: projects.length },
  { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "Frontend").length },
  { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "Full Stack").length },
  { id: "active", name: "Active", count: projects.filter(p => p.status === "active").length },
  { id: "featured", name: "Featured", count: projects.filter(p => p.featured).length }
];

// Technology statistics
export const technologyStats = () => {
  const techCount = {};
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });
  return Object.entries(techCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

// Get featured projects
export const getFeaturedProjects = () => 
  projects.filter(project => project.featured);

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "all") return projects;
  if (category === "featured") return getFeaturedProjects();
  if (category === "active") return projects.filter(p => p.status === "active");
  return projects.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
};

// Get project by ID
export const getProjectById = (id) => 
  projects.find(project => project.id === id);

export default projects;