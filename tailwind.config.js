/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#132020",
        dark: "#0e1818",
        darker: "#091010",
        darkest: "#050808",
      },
    },
  },
  plugins: [],
};
