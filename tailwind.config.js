/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          50: '#FCFAF7',
          100: '#F7F4EE',
          200: '#EFE9DF',
          300: '#E5DC CE',
        },
        charcoal: {
          900: '#141210',
          850: '#1C1917',
          800: '#26221F',
          700: '#3D3732',
        },
        bronze: {
          400: '#B8936D',
          500: '#9E7D56',
          600: '#8C6C46',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"DM Serif Display"', 'serif'],
        display: ['"DM Serif Display"', '"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
