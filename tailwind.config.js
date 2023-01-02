/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    screens: {
      mb: "375px",
      stb: "400px",
      tb: "900px",
      dt: "1100px",
    },

    extend: {
      backgroundImage: {
        heroPattern: "url('../images/bg-curve-mobile.svg')",
        herodDeskPattern: "url('../images/bg-curve-desktop.svg')",
      },
      fontFamily: {
        rale: ["Raleway"],
        osans: ["Open Sans"],
      },
      colors: {
        VeryDarkBlue: "hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",

        BrightBlue: "hsl(224, 93%, 58%)",
        LightBlue: " hsl(224, 94%, 70%)",
        ModerateCyan: "hsl(170, 45%, 43%)",

        LightGrayishBlue: "hsl(240, 75%, 98%)",
        LightGray: "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
