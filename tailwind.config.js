/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FFFF00',
        'neo-hotpink': '#FF69B4',
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
        'neo-lime': '#32CD32',
        'neo-red': '#FF0000',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'neo-pattern': 'repeating-linear-gradient(45deg, #f4f4f4, #f4f4f4 10px, #e0e0e0 10px, #e0e0e0 20px)',
        'neo-pattern-dark': 'repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 10px, #0f0f0f 10px, #0f0f0f 20px)',
        'neo-yellow-pattern': 'repeating-linear-gradient(45deg, #f4f4f4, #f6ff00 10px, #e0e0e0 10px, #aeff00 20px)',
      },
      boxShadow: {
        'neo': '6px 6px 0 #000',
        'neo-hover': '10px 10px 0 #000',
        'neo-yellow': '4px 4px 0 #FF69B4',
        'neo-dark': '6px 6px 0 #FFFF00',
      },
    },
  },
  plugins: [],
}

