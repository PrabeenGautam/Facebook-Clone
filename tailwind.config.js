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
      backgroundImage: {
        "sidebar-home": "url('./assets/image/sidemenu.png')",
        "sidebar-social": "url('./assets/image/social.png')",
        whole: "url('./assets/image/whole.png')",
        alternate: "url('./assets/image/alternate.png')",
        icons: "url('./assets/image/icons.png')",
        "icons-alternate": "url('./assets/image/icons-alternate.png')",
      },
      backgroundSize: {
        social: "38px 112px",
        sidebar: "38px 570px",
        whole: "190px 168px",
        alternate: "34px 470px",
        icons: "38px 162px",
        "icons-alternate": "34px 248px",
      },
      fontSize: {
        smm: "15px",
        "base-up": "17px",
      },
      colors: {
        "blue-link": "var(--blue-link)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        lgg: "1100px",
        xl: "1280px",
        xll: "1380px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
