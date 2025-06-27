module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#EEEEEE',
          red: '#E94560',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(135deg, #E94560 0%, #FF6B85 50%, #E94560 100%)',
      },
    },
  },
  plugins: [],
};