/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        76: "4.75rem",
      },
      gap: {
        15: "3.75rem",
      },
      colors: {
        primary: "#EF7E19",
        customBlue: "#D6FBE7",
      },
    },
   
    boxShadow: {
      lightShadow: "0px 12px 24.1px 0px rgba(178, 178, 178, 0.12)",
    },
  },
  plugins: [],
};
