/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'two-columns': '320px 1fr',
        'one-columns': '120px 1fr',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.3s ease-in forwards',
      }
    },
  },
  plugins: [],
}

