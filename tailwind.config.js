module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        xxx: "rgb(0, 151, 255)",
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
