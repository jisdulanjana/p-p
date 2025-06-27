'use client'; // Required for Framer Motion
import { motion } from 'framer-motion';
import Image from 'next/image';
import { contentItems } from '@/lib/api';
import { FC } from 'react';

const ContentCreationSection: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          My Content Creations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <Image
                src={item.thumbnail}
                alt={`${item.title} thumbnail`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 uppercase mb-2">
                  {item.type}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600 font-medium mt-auto"
                >
                  View Content
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCreationSection;