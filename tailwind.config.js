/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth : {
        container :"1440px",
        },
      fontFamily: {
        'dmSans': ['"DM Sans"', "sans-serif"],
      },
      colors: {
        customBlue: '#3661FC',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to right, #FE651B, #FFAA52)',
      }),
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities }) {
      addUtilities({
        '.list-disc-custom': {
          'list-style-type': 'disc',
        },
        '.list-disc-custom::marker': {
          color: '#3661FC',
        },
      }, ['responsive', 'hover']);
    },
]

}

