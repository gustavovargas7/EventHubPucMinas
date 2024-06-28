module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "650px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
