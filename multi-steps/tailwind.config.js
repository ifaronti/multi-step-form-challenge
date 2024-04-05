/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily:{
      'Ubuntu-Bold':['Ubuntu\\ Bold'],
      'Ubuntu-Medium':[ 'Ubuntu\\ Medium' ],
      'Ubuntu-Regular':['Ubuntu\\ Regular']
    },
    extend: {

    },
    screens: {
      'sm': '320px',

      'md': '640px',

      'lg': '900px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}

