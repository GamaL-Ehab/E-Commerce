/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        'main':'#0AAD0A',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}