// src/projects/index.js

// Export data
export { default as projects, projectCategories, technologyStats, getFeaturedProjects, getProjectsByCategory, getProjectById } from './data/projects.data';

// Export components
export { default as ProjectCard } from './components/ProjectCard';
export { default as ProjectsGrid } from './components/ProjectsGrid';

// Export pages
export { default as ProjectsPage } from './pages/ProjectsPage';
export { default as ProjectDetailsPage } from './pages/ProjectDetailsPage';

// Export hooks
export { default as useProjects } from './hooks/useProjects';

// Export utils
export * from './utils/projectUtils';