/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.tsx",
    "./app/**/**/*.tsx",
    "./components/**/*.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  // important: 'html',
  plugins: [],
};
