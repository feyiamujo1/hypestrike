/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {

      // },
      // boxShadow:{
      //   // 'custom': '0 0 15px -9px rgb(0 0 0 / 75%)',
      //   'custom-dark':'0px 2px 15px 5px rgba(0, 0, 0, 0.4)'
      // },
      backgroundImage:{
        'home-image':'linear-gradient(rgba(0, 13, 20, 0.65),rgba(0, 13, 26, 0.8)), url("../src/Assest/images/craig-lovelidge-Mw9JbxuQPjI-unsplash.jpg")',
        'nike-image':'linear-gradient(rgba(0, 0, 20, 0.4),rgba(0, 0, 0, 0.25)), url("../src/Assest/images/nike.jpg")',
        'adidas-image':'linear-gradient(rgba(0, 0, 20, 0.4),rgba(0, 0, 0, 0.25)), url("../src/Assest/images/didas.jpg")',
        'jordan-image':'linear-gradient(rgba(0, 0, 20, 0.4),rgba(0, 0, 0, 0.25)), url("../src/Assest/images/JordanBrand.jpg")',
      },
    },
    fontFamily: {
      'sitka': ['Sitka', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'roboto': ["Roboto", 'sans-serif'],
      'robotomono': ["Roboto Mono", 'sans-serif']
    }
  },
  plugins: [],
}

