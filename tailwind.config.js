/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ["Switzer", "sans-serif"],
        amphora: ["Amphora", "sans-serif"]
      },
      colors: {
        'primary': '#110F52',
        'secondary': '#26A8DF',
      },
      fontSize: {
        'h1' : ['7.5rem', '10rem'],
        'h2' : ['2.25rem', '3.375rem'],
      }
    },
  },
  plugins: [],
}
