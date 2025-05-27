// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blurDot: "blurDot 6s infinite linear",
      },
      keyframes: {
        blurDot: {
          "0%": { top: "10%", left: "10%" },
          "25%": { top: "20%", left: "80%" },
          "50%": { top: "70%", left: "60%" },
          "75%": { top: "80%", left: "20%" },
          "100%": { top: "10%", left: "10%" },
        },
      },
    },
  },
  plugins: [],
};
