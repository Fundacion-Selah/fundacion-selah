/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#171717",
        tangerine: "#F58A07",
        "sandy-brown": "#F9AB55",
        "ghost-white": "#F7F5FB",
        "polynesian-blue": "#084887",
        "cool-gray": "#909CC2",
        "original-blue": "#118AB5",
      },
      backgroundImage: {
        "gradient-yellow": "linear-gradient(var(--gradient-yellow))",
        "gradient-blue": "linear-gradient(var(--gradient-blue))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-source-serif)'],
      }
    },
  },
  plugins: [],
};
