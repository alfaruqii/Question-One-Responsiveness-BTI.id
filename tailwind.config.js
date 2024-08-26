/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "solid-red": "#ff0000",
        "solid-blue": "#0000FF",
      },
    },
  },
  plugins: [],
};
