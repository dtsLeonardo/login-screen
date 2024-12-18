/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,ts}'],
  important: '#app',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
