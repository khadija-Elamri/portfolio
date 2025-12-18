import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, level, icon: Icon }) => {
  const levelColors = {
    beginner: 'from-yellow-400 to-yellow-600',
    intermediate: 'from-green-400 to-green-600',
    advanced: 'from-blue-400 to-blue-600',
    expert: 'from-purple-400 to-purple-600'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 
                 border border-gray-200 dark:border-gray-700 
                 hover:border-blue-300 dark:hover:border-blue-700 
                 transition-all duration-300"
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-white dark:bg-gray-900 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-white">
          {skill}
        </h4>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="w-full bg-gray-200 dark:bg-gray-700 
                       rounded-full h-2 mr-3">
          <div
            className={`h-2 rounded-full bg-gradient-to-r 
                      ${levelColors[level] || levelColors.beginner}`}
            style={{ width: `${level === 'beginner' ? '60%' : 
                             level === 'intermediate' ? '75%' : 
                             level === 'advanced' ? '90%' : '100%'}` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-600 
                        dark:text-gray-400 capitalize">
          {level}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillBadge;