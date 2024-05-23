module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'], // Adjust paths as necessary
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '75': '300px',
      },
      height: {
        '75': '300px',
      },
      colors: {
        'aliceblue': '#F0F8FF',
      },
      spacing: {
        '2.5': '10px',
      },
      fontSize: {
        '22px': '22px',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
      borderColor: {
        'lightblue': '#ADD8E6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
