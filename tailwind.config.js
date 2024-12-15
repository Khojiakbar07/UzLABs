/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-541': {'max': '541px'},
        'max-413': {'max': '412px'},
        'max-391': {'max': '391px'},
        'max-376': {'max': '376px'},
        'max-361': {'max': '361px'},
      },
    },
  },
  plugins: [],
}