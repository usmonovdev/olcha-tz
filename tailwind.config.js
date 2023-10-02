/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#15803d"
      },
      fontFamily: {
        black: 'DMSans-Black, sans-serif',
        extrabol: 'DMSans-ExtraBold, sans-serif',
        bold: 'DMSans-Bold, sans-serif',
        semibold: 'DMSans-SemiBold, sans-serif',
        medium: 'DMSans-Medium, sans-serif',
        regular: 'DMSans-Regular, sans-serif',
        light: 'DMSans-Light, sans-serif'
      }
    },
  },
  plugins: [],
}

