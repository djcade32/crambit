module.exports = {
  darkMode: "class", // ✅ enables manual dark mode via `.dark` class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
