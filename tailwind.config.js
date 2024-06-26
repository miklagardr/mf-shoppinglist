/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container : {
      center :true,
      screens :  {
        lg : '1140px' , 
        xl : '1140px', 
       '2xl' : '1140px' 
      }
    },
    extend: {},
  },
  plugins: [],
}

