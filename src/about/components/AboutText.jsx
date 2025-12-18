// src/about/components/AboutText.jsx
import React from 'react';

const AboutText = ({ text }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {text}
      </p>
    </div>
  );
};

export default AboutText;