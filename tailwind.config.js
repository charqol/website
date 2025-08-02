/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'], 
        sans: ['Poppins', 'sans-serif'],   
      },
    },
  },
  keyframes: {
    fadeSlideIn: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    scaleIn: {
      '0%': { opacity: '0', transform: 'scale(0.8)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  },
  animation: {
    fadeSlideIn: 'fadeSlideIn 1s ease-out forwards',
    scaleIn: 'scaleIn 1s ease-out forwards',
    fadeIn: 'fadeIn 1.5s ease-out forwards',
  },
  plugins: []
};