'use client'; // Required for Framer Motion
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/lib/api';
import { FC } from 'react';

const SkillsSection: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={48}
                height={48}
                className="mb-2"
              />
              <span className="text-sm md:text-base text-gray-700 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;