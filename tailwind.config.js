/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26ffcb",
        secondary: "#ffc226",
        dark: "#0f1b21",
        lighterDark: "#1f3540",
      },
    },
  },
  plugins: [],
};
