import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  AlertCircle, Linkedin, Github, Twitter
} from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  }).required();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+212 6 12 34 56 78',
      href: 'tel:+212612345678'
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Casablanca, Morocco',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <Github />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to bring 
            your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 
                         dark:text-white mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 
                               rounded-lg group-hover:bg-blue-200 
                               dark:group-hover:bg-blue-900/50 
                               transition-colors">
                    {React.cloneElement(info.icon, {
                      className: 'w-5 h-5 text-blue-600 dark:text-blue-400'
                    })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 
                                 dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 
                                group-hover:text-blue-600 
                                dark:group-hover:text-blue-400 
                                transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 
                           dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 
                             rounded-lg hover:bg-gray-200 
                             dark:hover:bg-gray-700 transition-colors 
                             hover:scale-110"
                    aria-label={social.label}
                  >
                    {React.cloneElement(social.icon, {
                      className: 'w-6 h-6 text-gray-700 dark:text-gray-300'
                    })}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 
                           dark:text-white mb-6">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 
                           border border-green-200 dark:border-green-800 
                           rounded-lg"
                >
                  <div className="flex items-center space-x-2 text-green-700 
                               dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 
                           border border-red-200 dark:border-red-800 
                           rounded-lg"
                >
                  <div className="flex items-center space-x-2 text-red-700 
                               dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium 
                                                   text-gray-700 dark:text-gray-300 
                                                   mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-lg border 
                                ${errors.name 
                                  ? 'border-red-300 dark:border-red-700' 
                                  : 'border-gray-300 dark:border-gray-700'
                                } bg-white dark:bg-gray-900 
                                focus:outline-none focus:ring-2 
                                focus:ring-blue-500 dark:focus:ring-blue-400 
                                transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium 
                                                     text-gray-700 dark:text-gray-300 
                                                     mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-lg border 
                                ${errors.email 
                                  ? 'border-red-300 dark:border-red-700' 
                                  : 'border-gray-300 dark:border-gray-700'
                                } bg-white dark:bg-gray-900 
                                focus:outline-none focus:ring-2 
                                focus:ring-blue-500 dark:focus:ring-blue-400 
                                transition-all`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium 
                                                    text-gray-700 dark:text-gray-300 
                                                    mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-lg border 
                              ${errors.message 
                                ? 'border-red-300 dark:border-red-700' 
                                : 'border-gray-300 dark:border-gray-700'
                              } bg-white dark:bg-gray-900 
                              focus:outline-none focus:ring-2 
                              focus:ring-blue-500 dark:focus:ring-blue-400 
                              transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center 
                           justify-center space-x-2 disabled:opacity-50 
                           disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 
                          rounded-2xl border border-blue-200 
                          dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 
                           dark:text-blue-300 mb-3">
                What happens next?
              </h3>
              <ul className="space-y-2 text-blue-700 dark:text-blue-400">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>I'll review your message within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>We'll schedule a call to discuss your project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>I'll provide a detailed proposal and timeline</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;