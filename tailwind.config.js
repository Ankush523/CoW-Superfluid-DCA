/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white1' : '#FFFFFF',
        'black1' : '#000000',
        'orange1' : '#E8682B',
        'blue1' : '#2D57ED',
        'grey1' : '#1d2030',
        'grey2' : '#33374d',
        'silver' : '#71797E',
    },
  },
  plugins: [],
}
}