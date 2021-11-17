module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greyBlueLogin: '#E2E3E4',
        greyblueHover: '#E0E2E2',
        greyBlueBg: '#F7F9F9 ',
        blueButton: '#468FCC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
