'use client';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { FC } from 'react';

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-14a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM5 12a1 1 0 0 1-1-1H2a1 1 0 0 1 2 0h2a1 1 0 0 1-1 1zm14 0a1 1 0 0 1-1-1h-2a1 1 0 0 1 2 0h2a1 1 0 0 1-1 1zM6.34 6.34a1 1 0 0 1-1.41-1.41l1.42-1.42a1 1 0 0 1 1.41 1.41L6.34 6.34zm12.73 12.73a1 1 0 0 1-1.41-1.41l1.42-1.42a1 1 0 0 1 1.41 1.41l-1.42 1.42zM4.93 18.07a1 1 0 0 1-1.41 1.41l-1.42-1.42a1 1 0 0 1 1.41-1.41l1.42 1.42zm14.14-12.73a1 1 0 0 1 1.41 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.41l1.42-1.42z" />
        </svg>
      ) : (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18a6 6 0 0 1-6-6c0-1.45.52-2.78 1.38-3.83C4.64 9.24 3 11.46 3 14a9 9 0 0 0 9 9c2.54 0 4.76-1.64 5.83-4.38A5.97 5.97 0 0 1 12 18z" />
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;