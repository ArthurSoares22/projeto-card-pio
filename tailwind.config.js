/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
    "!./node_modules"],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/assets/img/bg.png')"
      }
    },
    
  },
  plugins: [],
}

