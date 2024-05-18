module.exports = {
  daisyui: {
    themes: ["aqua","fantasy","emerald"]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
