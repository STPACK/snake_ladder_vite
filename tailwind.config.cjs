module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5b9b',
          1: '#55b56a',
        },
        secondary: {
          DEFAULT: '#39cdbc',
          1: '#ffb648',
        },
        gray: {
          bg: '#fcfdff',
          border: '#ecedff',
          disable: '#d2d6da',
        },
        body: {
          DEFAULT:'#565e6d',
          1:'#929aa3',
        },
        head: {
          DEFAULT:'#051225',
          1:'#142235',
        }
      },
    },
  },
  plugins: [],
}
