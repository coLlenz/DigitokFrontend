module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {

    },
    variants: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
};
