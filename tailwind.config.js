const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
};
