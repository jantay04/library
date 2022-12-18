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
        95: "85%",
        610: "35vmax",
        850: "50vmax",
        900: "80vmax",
      },
      colors: {
        bejeviy: "#FEF7E8",
        ourBlue: "#1D324E",
      },
      minWidth: {
        lg: "1024px",
        md: "425px",
        sm: "375px",
      },
      maxWidth: {
        lgg: "1024px",
      },
    },
  },
  plugins: [],
};
