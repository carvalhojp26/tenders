module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      outline: {
        gray: '2px solid #ffffff'
      },
      colors: {
        'custom-gray': 'rgb(207, 216, 220)',
        'custom-black': '#242424'
      }
    },
  },
  variants: {
    extend: {
      outline: ['focus']
    }
  },
  plugins: [],
}