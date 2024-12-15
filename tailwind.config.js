/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-412': {'max': '412px'},
        'max-390': {'max': '390px'},
        'max-375': {'max': '375px'},
        'max-360': {'max': '360px'},
      },
    },
  },
  plugins: [],
}