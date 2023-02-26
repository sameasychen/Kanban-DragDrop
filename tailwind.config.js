// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    textColor: (theme) => ({
      ...theme("colors"),
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
    extend: {},
  },
  plugins: [],
};
