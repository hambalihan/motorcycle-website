/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: '#30A8FF',
        night: '#050816',
        steel: '#0d1427'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(48, 168, 255, 0.22)',
        panel: '0 24px 80px rgba(4, 10, 24, 0.45)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
