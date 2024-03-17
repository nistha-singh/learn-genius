/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors:{
        'light-green':'#D3F2EB',
        'greenish':'#ADDBD0',
        'darkish-green':'#4C8092',
        'navy-blue':'#2E1A6E',
        'dark-blue':'#1D0A5B'
      },
    },
  },
  plugins: [],
};
