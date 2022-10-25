/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary":"var(--primary)",
        "secondary": "var(--secondary)",
        "darkgrey":"var(--darkgrey)",
        "lightgrey":"var(--lightgrey)",
        "grey":"var(--grey)",

        

      }
    },
  },
  plugins: [],
}
