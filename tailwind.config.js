module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      lg: "1100px",
    },
    color: {
      darkblue: "#052138",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
