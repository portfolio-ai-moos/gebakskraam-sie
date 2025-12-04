/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nostalgia: {
          red: '#7A1E1E',
          gold: '#D9B36C',
          cream: '#F7EEDB',
          brown: '#3E2A1A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
