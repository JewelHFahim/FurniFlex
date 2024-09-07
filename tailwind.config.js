/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4977EE',
      },
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      calligraffitti: ["Calligraffitti", "cursive"],
    },
  },
  plugins: [],
};
