/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bilk: {
          100: '#D4E5FF',
          200: '#BED5F7',
        }
      },
      fontFamily: {
        Nunito: ['Nunito']
      },
      fontSize: {
        moth: '4rem',
        ex: '6rem',
        '2ex': '8rem',
        '3ex': '10rem',
        '4ex': '12rem',
        '5ex': '14rem',
        '6ex': '16rem'
      },
      borderRadius: {
        ex: '6rem',
        '2ex': '8rem',
        '3ex': '10rem',
        '4ex': '12rem',
        '5ex': '14rem',
        '6ex': '16rem',
      },
      height: {
        '108': '27rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '270': '67.5rem'
      },
      width: {
        '108': '27rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '270': '67.5rem'
      },
    },
  },
  plugins: [],
}

