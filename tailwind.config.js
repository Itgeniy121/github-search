/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1300px",
        l: "1200px",
        sm: "980px",
        med: '540px',
      },
    },
  },
  plugins: [],
};
