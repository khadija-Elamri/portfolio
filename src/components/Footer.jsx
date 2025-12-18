// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">DevFolio</h3>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating modern web applications.
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 
                         rounded-full transition-all duration-300 
                         hover:scale-110"
                aria-label={link.label}
              >
                {React.cloneElement(link.icon, {
                  className: 'w-5 h-5'
                })}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} DevFolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;