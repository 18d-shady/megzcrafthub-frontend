/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tropea': ['Tropea', 'serif',],
        'league': ['"League Spartan"', 'serif',],
      },
    },
  },
  plugins: [],
}

