/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      bodyBg: "url('./images/bg-tablet-pattern.svg')",
      mainBg: "url('./images/bg-tablet-pattern.svg')",
      simplifyMobileBg: "url('./images/bg-simplify-section-mobile.svg')",
      simplifyBg: "url('./images/bg-simplify-section-desktop.svg')",
    },
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      screens: {
        mobile: { max: "480px" },
      },
      fontFamily: {
        BeVietnamPro: ["Be Vietnam Pro"],
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["peer-invalid"],
      borderColor: ["peer-invalid"],
      ringWidth: ["peer-invalid"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hidden": {
            "scrollbar-width": "none" /* Firefox */,
          },
          ".scrollbar-hidden::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
};
