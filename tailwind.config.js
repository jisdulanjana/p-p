module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#2dd4bf', // Primary teal
          600: '#0d9488', // Darker teal for hover
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: use Inter font
      },
    },
  },
  plugins: [],
};