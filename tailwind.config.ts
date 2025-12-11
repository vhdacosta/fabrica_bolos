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
        // Paleta inspirada na Vó Alzira
        'vermelho-bolo': '#C8102E',
        'rosa-bolo': '#F9B8B8',
        'creme-baunilha': '#F9DCB8',
        'cinza-texto': '#333333',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
