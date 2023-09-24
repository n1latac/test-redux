/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'signUp': "url('../public/images/signUp.jpg')"
      },
      boxShadow:{
        'custom': '0px 0px 8px 2px rgba(0, 0, 0, 0.5)'
      },
      backgroundColor:{
        'to-topCustom': 'linear-gradient(to top, #0a2a43, transparent)'
      },
    },
  },
  plugins: [],
}

