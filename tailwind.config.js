/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#30A8FF'
      },
      boxShadow: {
        glow: '0 0 30px rgba(48, 168, 255, 0.35)'
      },
      backgroundImage: {
        'radial-neon': 'radial-gradient(circle at top, rgba(48,168,255,0.25), transparent 55%)'
      }
    }
  },
  plugins: []
};
