const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeup: {
          "0%": {
            opacity: "0",
            transform: "translateY(1.5625rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        "fade-up": "fadeup 500ms ease-in-out forwards",
        "fade-left": "fadeLeft 300ms ease-in-out forwards",
      },
      fontFamily: {
        facebook: ["SfProDisplayRegular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
