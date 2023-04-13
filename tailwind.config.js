/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        fpBlue: "#704abb",
        fpBlueDark: "#3B359F",
        fpOrange: "#ffbc01",
        fpOrangeDark: "#ef9e00",
        fpRed: "#9e0080",
        fpLightGray: "#B8B8B8",
        fpDarkGray: "#919191",
        fpLightBack: "#fafafa",
        success: "#3FDB77",
        error: "#FF375B",
        warning: "#FF9040",
        info: "#00ACD8",
      },
      boxShadow: {
        dev: "0 0 12px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        sm: {max: "1024px"},
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
