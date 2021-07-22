module.exports = {
  purge: [],

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        themeShadow: '5px 5px 10px 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
