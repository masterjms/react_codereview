/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-default-default": "#fff",
        "border-default-default": "#d9d9d9",
        "text-default-default": "#1e1e1e",
        "background-default-secondary": "#f5f5f5",
        "background-brand-default": "#2c2c2c",
        "text-default-secondary": "#757575",
        lightgray: {
          "100": "#cfcfcf",
          "200": "#cecece",
        },
        black: "#000",
        "miscellaneous-tab-unselected": "#999",
        "miscellaneous-floating-tab-text-unselected": "#090909",
        "background-neutral-tertiary": "#e3e3e3",
        "border-neutral-secondary": "#767676",
        "text-neutral-default": "#303030",
      },
      spacing: {
        "space-400": "16px",
        "space-4000": "160px",
        "space-800": "32px",
        "space-300": "12px",
        "space-600": "24px",
        "space-200": "8px",
      },
      fontFamily: {
        "body-base": "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "radius-200": "8px",
        "scale-06": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "53xl": "72px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
