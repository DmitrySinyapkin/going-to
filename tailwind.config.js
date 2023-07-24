/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    /* screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }, */
    extend: {},
  },
  plugins: [],
}

