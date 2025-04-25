/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8ff',
          100: '#f5e8fc',
          200: '#ead5f9',
          300: '#d8b4f2',
          400: '#c185e9',
          500: '#a855db',
          600: '#9141c4',
          700: '#7a33a7',
          800: '#672c89',
          900: '#4d2068',
          950: '#350e4a',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffeec6',
          200: '#ffdb89',
          300: '#ffc24a',
          400: '#ffb01f',
          500: '#f99607',
          600: '#dd7702',
          700: '#b65305',
          800: '#94420c',
          900: '#7a380f',
          950: '#461c05',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'serif'],
        sans: ["'Montserrat'", 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};