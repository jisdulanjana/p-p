'use client';
import { motion } from 'framer-motion';
import { contentItems } from '@/lib/api';
import { FC, useState } from 'react';

const ContentCreationSection: FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Content Creation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Educational content about technology, drones, and digital innovations
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {contentItems.map((item, index) => {
            const videoId = getYouTubeVideoId(item.url);
            const thumbnailUrl = getYouTubeThumbnail(videoId);
            const isPlaying = playingVideo === videoId;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brand-red/20">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => handleVideoPlay(videoId)}
                      >
                        <img
                          src={thumbnailUrl}
                          alt={`${item.title} thumbnail`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-red/90 hover:bg-brand-red rounded-full p-4 shadow-2xl backdrop-blur-sm transition-all duration-300"
                          >
                            <svg 
                              className="w-8 h-8 text-white ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </motion.div>
                        </div>

                        {/* Video Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                          <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                          Watch
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </span>
                      <span className="text-sm text-gray-500">
                        Tech Tutorial
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-red transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleVideoPlay(videoId)}
                        className="inline-flex items-center px-4 py-2 bg-brand-red text-white font-medium rounded-lg hover:bg-brand-red/90 transition-all duration-300 transform hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play Video
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand-red transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          
          <a
            href="https://www.youtube.com/channel/UCm0ihiw2rO7ssXQHUvWp6Jw" // YouTube channel
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-brand-red to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Videos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreationSection;