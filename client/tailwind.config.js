const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
