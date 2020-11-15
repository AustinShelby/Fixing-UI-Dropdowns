module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "disabled"],
    textColor: ["responsive", "hover", "focus", "disabled"],
    cursor: ["disabled"],
  },
  plugins: [],
};
