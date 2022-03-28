// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-photo": "url('/wilhem-photo.jpg')",
      },
      fontFamily: {
        title: ["Rajdhani", "sans-serif"],
        hero: ["Alef", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin  8s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
