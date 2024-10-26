// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c50fa",
        primaryLight: "#9277ff",
        gunmetal: "#1e2139",
        charcoalBlue: "#252945",
        lavenderLight: "#dfe3fa",
        coolGray: "#888ebd",
        glaucous: "#7e80c3",
        licoriceBlack: "#0c0e16",
        fireRed: "#ec5757",
        softRed: "#ff9797",
        ghostWhite: "#f8f9fa",
        black: "#141625",
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
      fontSize: {
        "heading-xl": [
          "80px",
          {
            lineHeight: "1.5",
            letterSpacing: "-2.5px",
          },
        ],
        "heading-l": [
          "33px",
          {
            lineHeight: "1.5",
            letterSpacing: "1px",
          },
        ],
        "heading-m": [
          "24px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.75px",
          },
        ],
        "heading-s": [
          "15px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.25px",
          },
        ],
        body: [
          "13px",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.1px",
          },
        ],
        "body-variant": [
          "15px",
          {
            lineHeight: "1.6",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [],
};
