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
    extend: {
      width: {
        "12/25": "48%",
        "80vw": "80vw",
        "8/25": "32%",
      },
      height: {
        "448px": "448px",
      },
      colors: {
        darkblue: "#052138",
        peatch: "rgb(250, 110, 97)",
        lightVoilet: "rgb(142, 119, 236)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
