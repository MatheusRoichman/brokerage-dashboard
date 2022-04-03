module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-lg": "950px",
      },
      backgroundColor: {
        mask: "rgba(10, 9, 9, 0.4)",
        gray: "#18181A",
        dark: "#121214",
        "dark-blue": "#043451"
      },
      backgroundImage: {
        factory: "url('/src/background-factory.webp')",
        "blue-gradient":
          "linear-gradient(243.46deg, #043451 16.66%, #043451 16.66%, #041B28 83.34%);",
      },
      borderRadius: {
        circle: "50%",
      },
      colors: {
        "light-gray": "#B9B9B9",
        "dark-blue": "#043451",
      },
    },
  },
  plugins: [],
};
