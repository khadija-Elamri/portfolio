// src/about/components/ProfileImage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="flex justify-center md:justify-end"
    >
      <div className="relative">
        <img
          src={src || '/placeholder-avatar.jpg'} // Placeholder if no src provided
          alt={alt || 'Profile Image'}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;