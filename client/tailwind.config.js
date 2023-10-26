/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'signUp': "url('../public/images/signUp.jpg')",
        'headerBG': "url('../public/images/background_space.jpg')"
      },
      boxShadow:{
        'custom': '0px 0px 8px 2px rgba(0, 0, 0, 0.5)',
        'custom2': '0px 0px 70px 50px rgba(0, 0, 0, 0.6)'
      },
      backgroundColor:{
        'to-topCustom': 'linear-gradient(to top, #0a2a43, transparent)',
        'bg': '#0a2a43'
      },
      screens:{
        'xs': '475px',
        ...defaultTheme.screens
      }
    },
  },
  plugins: [],
}

