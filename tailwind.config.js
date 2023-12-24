/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "glass-theme": "rgba(255, 255, 255, 0.25)",
        "stem-red": "rgba(242, 43, 12, 0.75)",
      },
      boxShadow: {
        "glass-shadow": "0 8px 32px 0 rgba(31, 38, 10, 0.37)",
      },
      borderColor: {
        "glass-border": "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
