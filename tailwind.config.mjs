/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f4',
          100: '#e8e8e6',
          200: '#d1d1cd',
          300: '#b0b0a9',
          400: '#8a8a80',
          500: '#727266',
          600: '#5d5e50',
          700: '#4d4e42',
          800: '#414238',
          900: '#383930',
        },
      },
    },
  },
  plugins: [],
}

