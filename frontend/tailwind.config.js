/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#8e9199",
          "200": "#222",
          "300": "#182236",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(0, 0, 0, 0.3)",
          "600": "rgba(255, 255, 255, 0.5)",
          "700": "rgba(255, 255, 255, 0.1)",
        },
        chocolate: {
          "100": "#c86527",
          "200": "#c2662e",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f5f5f5",
        },
        darkslategray: {
          "100": "#494949",
          "200": "#37393d",
        },
        sandybrown: "#e1905d",
        sienna: "#ad5c29",
        peru: "#db8047",
        dimgray: "#4a5469",
        lightgray: "#ccc",
        darkgray: {
          "100": "#9d9d9d",
          "200": "#999",
        },
        gainsboro: {
          "100": "#dadada",
          "200": "#d9d9d9",
        },
        lavenderblush: "#ffefef",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        domine: "Domine",
        merriweather: "Merriweather",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "31xl": "50px",
        "8xs": "5px",
        "6xl": "25px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      mid: "17px",
      "mid-6": "17.6px",
      "5xl": "24px",
      lgi: "19px",
      "22xl-6": "41.6px",
      "14xl": "33px",
      "6xl": "25px",
      xl: "20px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      "33xl-8": "52.8px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};