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
        amphora: ['var(--font-amphora)', 'sans-serif'],
        switzer: ['var(--font-switzer)', 'sans-serif'],
      },
      colors: {
        'primary': '#110F52',
        'secondary': '#26A8DF',
      }
    },
  },
  plugins: [],
}
