/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0px 4px 4px rgb(0,0,0,25%)",
      },
      width: {
        86: "83.1111111%",
        610: "35vmax",
      },
      colors: {
        bejeviy: "#FEF7E8",
        ourBlue: "#1D324E",
      },
    },
  },
  plugins: [],
};
