/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/images/home-bg.png')",
        'about-bg': "url('/images/aboutbg.png')",
        'test-bg': "url('/images/testimonialbg.png')",
      },
    },
  },
  plugins: [],
}

