/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'],
        'body-inter': ['Inter', 'sans-serif'], // Keep as backup/alternative
      },
      colors: {
        gold: {
          50: '#fbf9f1',
          100: '#f5f0db',
          200: '#ebe0b5',
          300: '#dfca86',
          400: '#d4af37', // Classic Gold
          500: '#b49026',
          600: '#94711c',
          700: '#755518',
          800: '#61451a',
          900: '#523a1a',
          950: '#2e1f0b',
        },
        'rich-black': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#0a0a0a', // Deepest Black
        },
        primary: { // Remapping primary to Gold for consistent API usage
          50: '#fbf9f1',
          100: '#f5f0db',
          200: '#ebe0b5',
          300: '#dfca86',
          400: '#d4af37',
          500: '#b49026',
          600: '#94711c',
          700: '#755518',
          800: '#61451a',
          900: '#523a1a',
        },
        slate: { // Keeping slate for neutrals but shifting towards warmer greys if needed
           800: '#1c1c1c', // Darker card bg
           900: '#050505', // Almost black main bg
        },
        secondary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e', 
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        neutral: {
           100: '#f5f5f5', 
           200: '#e5e5e5', 
           300: '#d4d4d4', 
           400: '#a3a3a3',
           500: '#737373',
           800: '#262626',
           900: '#171717',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)', // Gold glow
        'luxury': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right bottom, #0a0a0a, #1a1a1a)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f5f0db 50%, #b49026 100%)',
      }
    },
  },
  plugins: [],
}
