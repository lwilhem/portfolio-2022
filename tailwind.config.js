// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Rajdhani", "sans-serif"],
        hero: ["Alef", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
      colors: {
        ayo: {
          100: "#d0d3d8",
          200: "#a1a6b1",
          300: "#727a8b",
          400: "#434d64",
          500: "#14213d",
          600: "#101a31",
          700: "#0c1425",
          800: "#080d18",
          900: "#04070c",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
