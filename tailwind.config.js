/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { },

    backgroundImage: {
      'logo': "url('./assets/Logo.png')",
    }, backgroundSize: {
      
      '10%': '10%',
      '16': '180px',
      '14': '100px'
    },
    colors: {
      'primary':  '#1E1E1E',
      'white' : '#F9F5E7',
      'app': '#292E37',
      'teal' : '#14A3BD',
      'orange' : '#F99417',
      'normal-btns': '#2F3747'
    },
    screens: {
      'mobile': '320px',
      
      'tablet': '640px',
      

      'laptop': '1024px',
      

      'desktop': '1280px',
      
    },
  },
  plugins: [],
}
