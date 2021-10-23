module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '78': '312px'
      },
      fontFamily: {
        'balsamiq': ['Balsamiq Sans', 'cursive']
      },
      borderWidth: {
        '12': '12px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
