const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    // Iconify plugin
    require("flowbite/plugin"),
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
