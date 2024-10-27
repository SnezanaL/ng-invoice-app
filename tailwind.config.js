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
        success: {
          DEFAULT: "#33D69F",
          light: "#f4fdfa",
          "dark-light": "rgba(0,171,85,.15)",
        },
        danger: {
          DEFAULT: "#e7515a",
          light: "#fff5f5",
          "dark-light": "rgba(231,81,90,.15)",
        },
        warning: {
          DEFAULT: "#FF8F00",
          light: "#fff9f0",
          "dark-light": "rgba(226,160,63,.15)",
        },
        info: {
          DEFAULT: "#373B53",
          light: "#f8f8fb",
          // "dark-light": "rgba(33,150,243,.15)",
        },
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
            letterSpacing: "-1px",
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
