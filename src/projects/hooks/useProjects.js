// src/hooks/useProjects.js
import { useState, useMemo } from 'react';
import projects, { projectCategories } from '../data/projects';
import { 
  filterByTechnology, 
  sortProjects, 
  calculateProjectStats 
} from '../utils/projectUtils';

const useProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Get filtered projects
  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        result = result.filter(p => p.featured);
      } else if (selectedCategory === 'active') {
        result = result.filter(p => p.status === 'active');
      } else {
        result = result.filter(p => 
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      }
    }

    // Filter by technology
    if (selectedTechnology) {
      result = filterByTechnology(result, selectedTechnology);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    // Sort projects
    return sortProjects(result, sortBy);
  }, [selectedCategory, selectedTechnology, sortBy, searchQuery]);

  // Get unique technologies for filter dropdown
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Get statistics
  const stats = useMemo(() => calculateProjectStats(projects), []);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    projectCategories.forEach(category => {
      if (category.id === 'all') {
        counts.all = projects.length;
      } else if (category.id === 'featured') {
        counts.featured = projects.filter(p => p.featured).length;
      } else if (category.id === 'active') {
        counts.active = projects.filter(p => p.status === 'active').length;
      } else {
        counts[category.id] = projects.filter(p => 
          p.category.toLowerCase().includes(category.id.toLowerCase())
        ).length;
      }
    });
    return counts;
  }, []);

  return {
    projects: filteredProjects,
    categories: projectCategories,
    technologies: allTechnologies,
    stats,
    categoryCounts,
    selectedCategory,
    setSelectedCategory,
    selectedTechnology,
    setSelectedTechnology,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery
  };
};

export default useProjects;