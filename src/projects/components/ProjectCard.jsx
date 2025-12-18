// src/components/ui/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaGitlab, 
  FaExternalLinkAlt, 
  FaCode, 
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';
import { TbDeviceDesktop } from 'react-icons/tb';

const techIcons = {
  React: FaCode,
  TypeScript: FaCode,
  'D3.js': TbDeviceDesktop,
  'Node.js': FaServer,
  MongoDB: FaDatabase,
  'Tailwind CSS': TbDeviceDesktop,
  'Next.js': TbDeviceDesktop,
  PostgreSQL: FaDatabase,
  Redis: FaDatabase,
  'Socket.io': FaServer,
  'TensorFlow.js': FaChartLine,
  'Three.js': TbDeviceDesktop,
  Stripe: FaShieldAlt,
  Express: FaServer,
  'WebRTC': FaServer,
  'AWS S3': FaServer,
  'PWA': FaMobileAlt,
  'MERN Stack': FaServer,
  'Prisma': FaDatabase,
  'JWT': FaShieldAlt,
  'Web Audio API': TbDeviceDesktop,
  'Howler.js': TbDeviceDesktop,
  'Framer Motion': TbDeviceDesktop,
  'Cloudinary API': FaServer,
  'Chart.js': FaChartLine
};

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'maintenance': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Live';
      case 'development': return 'In Development';
      case 'maintenance': return 'Maintenance';
      default: return status;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900">
        {project.screenshot && !imageError ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-4xl">
              {project.category === 'Frontend' ? '💻' : '⚡'}
            </div>
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
          {getStatusText(project.status)}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 5).map((tech) => {
              const Icon = techIcons[tech] || FaCode;
              return (
                <div
                  key={tech}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                >
                  <Icon className="w-3 h-3" />
                  <span>{tech}</span>
                </div>
              );
            })}
            {project.technologies.length > 5 && (
              <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                +{project.technologies.length - 5}
              </div>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <FaGithub /> GitHub
            </a>
          )}
          
          {project.gitlab && (
            <a
              href={project.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
            >
              <FaGitlab /> GitLab
            </a>
          )}
          
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all text-sm font-medium"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>

        {/* Deployment Info */}
        {project.deployment && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Deployed on <span className="font-semibold">{project.deployment}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;