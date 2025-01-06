/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(224, 230, 247)',
          DEFAULT: '#7cf03d',
          dark: '#2b4ac3'
        },
        'primary-black': "#05264e",
      }
    },
  },
  plugins: [daisyui],
}

