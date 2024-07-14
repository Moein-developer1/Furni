/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./node_modules/tw-elements/js/**/*.js"],
  darkMode:'class',
  theme: {
    screens:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1400px'
    },
    container:{
      center:true,
      padding:'1rem',
      
      screens:{
          'sm':'540px',
          'md':'720px',
          'lg':'960px',
          'xl':'1140px',
          '2xl':'1320px',
        }
    },
    extend: {
      colors:{
        'light':'#eff2f1',
        'darkGreen':'#3b5d50',
        'lightGreen':'#469b94',
        'customYellow':'#f9bf29'
      }    
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
}

