/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        background: '#1a1a1a',
        border: '#363636',
        accent: '#01FF9D',
        text: {
          primary: '#ffffff',
          secondary: '#adadad',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
} 