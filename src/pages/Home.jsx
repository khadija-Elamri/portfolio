import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Layout />,
      title: 'Frontend Development',
      description: 'Modern React applications with beautiful UI/UX'
    },
    {
      icon: <Server />,
      title: 'Backend Development',
      description: 'Scalable APIs and server-side applications'
    },
    {
      icon: <Code />,
      title: 'Full Stack Solutions',
      description: 'End-to-end web applications'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 
                       dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 
                           bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 
                      max-w-2xl mx-auto mb-10">
            I build exceptional digital experiences that are fast, 
            accessible, visually appealing, and responsive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center 
                       justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center 
                       justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              From concept to deployment, I handle every aspect of 
              web development
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-flex p-3 bg-blue-100 
                             dark:bg-blue-900/30 rounded-lg mb-4">
                  {React.cloneElement(service.icon, {
                    className: 'w-8 h-8 text-blue-600 dark:text-blue-400'
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 
                             dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 
                             dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;