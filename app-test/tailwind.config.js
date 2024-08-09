/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
    },
  },
  plugins: [],
}




module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/background.jpg')",
        'bustom-bg': "url('/src/assets/bImage.jpg')",
      },
       colors:{
        'custom-color':'cyan'
       }
    },
  },
  variants:{},
  plugins: [],
}

