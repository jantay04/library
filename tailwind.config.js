/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0px 4px 4px rgb(0,0,0,25%)",
      },
      width: {
        aa10: "5vmax",
        500: "28vmax",
        700: "35vmax",
        86: "83.1111111%",
        95: "85%",
        610: "35vmax",
        850: "50vmax",
        900: "80vmax",
        700: "700px",
      },
      colors: {
        bejeviy: "#FEF7E8",
        ourBlue: "#1D324E",
        ourOrange: "#FF7F2C",
        gray1ForGradient: "#E5E8EE",
        gray2ForGradient: "#F7F8FA",
      },
      minWidth: {
        xxl: "1314px",
        xl: "1220px",
        lg: "1024px",
        mdd: "768px",
        md: "425px",
        sm: "375px",
      },
      maxWidth: {
        lgg: "1024px",
      },
      margin: {
        aa10: "5vmax",
      },
    },
  },
  plugins: [],
};
