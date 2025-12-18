// src/projects/utils/projectUtils.js

// Filter projects by technology
export const filterByTechnology = (projects, technology) => {
  return projects.filter(project =>
    project.technologies.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Get unique technologies from all projects
export const getAllTechnologies = (projects) => {
  const techSet = new Set();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

// Sort projects by various criteria
export const sortProjects = (projects, sortBy = 'featured') => {
  const projectsCopy = [...projects];

  switch (sortBy) {
    case 'featured':
      return projectsCopy.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });

    case 'recent':
      return projectsCopy.sort((a, b) => b.id - a.id);

    case 'complexity':
      // Sort by number of technologies (rough complexity indicator)
      return projectsCopy.sort((a, b) => b.technologies.length - a.technologies.length);

    case 'performance':
      return projectsCopy.sort((a, b) => {
        const scoreA = a.performance?.lighthouse || 0;
        const scoreB = b.performance?.lighthouse || 0;
        return scoreB - scoreA;
      });

    default:
      return projectsCopy;
  }
};

// Calculate project statistics
export const calculateProjectStats = (projects) => {
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const featuredProjects = projects.filter(p => p.featured).length;

  const totalTechnologies = getAllTechnologies(projects).length;

  // Calculate average performance score
  const projectsWithPerformance = projects.filter(p => p.performance);
  const avgPerformance = projectsWithPerformance.length > 0
    ? Math.round(
        projectsWithPerformance.reduce((sum, p) => sum + (p.performance.lighthouse || 0), 0) /
        projectsWithPerformance.length
      )
    : 0;

  // Most used technologies
  const techCount = {};
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCount[tech] = (techCount[tech] || 0) + 1;
    });
  });

  const topTechnologies = Object.entries(techCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([tech]) => tech);

  return {
    totalProjects,
    activeProjects,
    featuredProjects,
    totalTechnologies,
    avgPerformance,
    topTechnologies
  };
};

// Generate project summary for display
export const generateProjectSummary = (project) => {
  return {
    title: project.title,
    category: project.category,
    status: project.status,
    featured: project.featured,
    techCount: project.technologies.length,
    hasDemo: !!project.liveDemo,
    hasGitlab: !!project.gitlab,
    performanceScore: project.performance?.lighthouse || 'N/A'
  };
};

// Format deployment information
export const formatDeploymentInfo = (project) => {
  if (!project.deployment) return 'Not deployed';

  const platforms = {
    'Vercel': { color: 'text-black', icon: '▲' },
    'Netlify': { color: 'text-green-600', icon: '⬢' },
    'GitHub Pages': { color: 'text-gray-800', icon: '🐙' },
    'Render': { color: 'text-pink-600', icon: '⚡' },
    'Railway': { color: 'text-yellow-600', icon: '🚂' },
    'AWS Amplify': { color: 'text-orange-500', icon: '☁️' }
  };

  const platform = platforms[project.deployment];
  if (platform) {
    return {
      text: project.deployment,
      color: platform.color,
      icon: platform.icon
    };
  }

  return {
    text: project.deployment,
    color: 'text-gray-600',
    icon: '☁️'
  };
};

// Export project data for CSV
export const exportProjectsToCSV = (projects) => {
  const headers = ['Title', 'Category', 'Status', 'Technologies', 'GitHub', 'GitLab', 'Live Demo', 'Deployment'];
  const rows = projects.map(project => [
    project.title,
    project.category,
    project.status,
    project.technologies.join(', '),
    project.github || '',
    project.gitlab || '',
    project.liveDemo || '',
    project.deployment || ''
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  return csvContent;
};