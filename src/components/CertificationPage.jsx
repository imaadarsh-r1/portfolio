import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const CertificationPage = () => {
  // Sample certifications array
  const certifications = [
    {
      title: 'What is Data Science?',
      organization: 'IBM',
      date: 'May 2025',
      pdf: '/certificates/cert1.pdf',
      description: 'Introduction to Data Science concepts and tools'
    },
    {
      title: 'Google AI Essentials',
      organization: 'Google',
      date: 'Feb 2025',
      pdf: '/certificates/cert2.pdf',
      description: 'Foundational concepts of AI and machine learning by Google'
    },
    // Add more certifications here
  ];

  return (
    <div className="min-h-screen py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="flex items-center justify-center mb-4">
                {/* Image or Icon for Certification */}
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaDownload className="text-gray-700" />
                </div>
                <a
                  href={cert.pdf}
                  download
                  className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  title="Download PDF"
                >
                  <FaDownload className="text-gray-700" />
                </a>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300 mb-2">{cert.organization}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
              <p className="text-gray-300 mt-4">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;