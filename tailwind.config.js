/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'IBM Plex Mono, monospace',
    },
    extend: {
      keyframes: {
        flicker: {
          '0%': { opacity: '0.99' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        flicker: 'flicker 0.1s infinite',
      },
    },
  },
  plugins: [],
};
