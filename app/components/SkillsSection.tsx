'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/lib/api';
import { workExperiences } from '@/lib/api'; 
import { FC } from 'react';

const ExperiencesSection: FC = () => {
//   const workExperiences = [
//     {
//       id: '1',
//       title: 'Full Stack Developer',
//       company: 'Adavii Tech (Pvt) Ltd',
//       location: 'Colombo, Sri Lanka',
//       period: 'May 2024 - June 2025',
//       type: 'Full-time'
//     },
//     {
//       id: '2',
//       title: 'Intern Full Stack Developer',
//       company: 'Falconet Ltd',
//       location: 'Colombo, Sri Lanka',
//       period: 'Oct 2023 - Jan 2024',
//       type: 'Internship'
//     }
//   ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Experiences
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional journey and technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-brand-red to-pink-400 rounded-full mr-4"></div>
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 group-hover:text-brand-red transition-colors duration-300">
                          {experience.title}
                        </h4>
                        <p className="text-brand-red font-medium text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-sm font-medium">
                        {experience.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{experience.location}</p>
                    <p className="text-gray-500 font-medium">{experience.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
              Tech Stack
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={40}
                        height={40}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;