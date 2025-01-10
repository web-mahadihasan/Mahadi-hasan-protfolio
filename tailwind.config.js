/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raison: ['RaisonneDemibold', 'sans-serif'], 
      },
      colors: {
        primary: {
          light: 'rgb(224, 230, 247)',
          DEFAULT: '#7cf03d',
          dark: '#2b4ac3'
        },
        'title-black': "#212529",
        'primary-black': "#05264e",
        'light-black': "#4f5e64",
        'dark-black': "#A6ADBB",
      },
    },
  },
  plugins: [daisyui],
}

