'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-8"
          >
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-black">I </span>
              <span 
                className="bg-gradient-to-r from-brand-red via-pink-500 to-orange-400 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #E94560 0%, #FF6B85 30%, #FF8A65 60%, #FFB74D 100%)'
                }}
              >
                develop software
              </span>
              <br />
              <span className="text-black">
                that delight and inspire people.
              </span>
            </h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              Hi! I'm Ishan, a software engineer based in Sri Lanka. I create 
              user-friendly applications and share knowledge through content creation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Contact me
              </a>
              <a
                href="/resume.pdf"
                download="Ishan_Dulanjana_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-black px-8 py-4 rounded-full font-semibold hover:border-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main Image Container - Blended with background */}
              <div className="relative w-96 h-[450px] lg:w-[500px] lg:h-[600px]">
                <Image
                  src="/images/profile.png"
                  alt="Ishan Dulanjana - Software Engineer"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />
                
                {/* Seamless blend with background */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"></div>
                
                {/* Subtle accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats or Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-black mb-1 group-hover:text-brand-red transition-colors duration-300">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-black mb-1 group-hover:text-brand-red transition-colors duration-300">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-black mb-1 group-hover:text-brand-red transition-colors duration-300">100+</div>
              <div className="text-sm text-gray-600">Content Created</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-black mb-1 group-hover:text-brand-red transition-colors duration-300">10k+</div>
              <div className="text-sm text-gray-600">Community Reach</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;