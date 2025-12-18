import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import projects, { getProjectsByCategory } from '../data/projects.data';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'frontend', 'fullstack'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filter === 'all' ||
                         (filter === 'frontend' && project.category === 'Frontend') ||
                         (filter === 'fullstack' && project.category === 'Full Stack');

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of my recent work. Each project represents 
            unique challenges and solutions.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between 
                        items-center mb-8">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 transform 
                              -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-full md:w-80 bg-white 
                         dark:bg-gray-800 border border-gray-300 
                         dark:border-gray-700 rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 
                         dark:focus:ring-blue-400"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg capitalize font-medium 
                           transition-all duration-300 flex items-center 
                           space-x-2 ${filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm 
                        text-gray-600 dark:text-gray-400">
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="text-blue-600 dark:text-blue-400 
                         hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-800 
                         dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter
            </p>
          </motion.div>
        )}

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 
                       dark:text-white mb-4">
            More Projects Coming Soon!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm constantly working on new projects and improving my skills. 
            Check back regularly for updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;