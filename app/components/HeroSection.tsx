'use client'; // Required for Framer Motion animations
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
          priority // Load this image eagerly for above-the-fold content
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
          Ishan Dulanjana
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Full-Stack Developer & Tech Blogger
        </p>
        <a
          href="#contact"
          className="inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;