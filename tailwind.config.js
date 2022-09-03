/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bgHero': 'var(--color-hero-bg)',
      },
      animation: {
        'fadeIn': 'fadeIn 500ms ease-in',
        'fadeOut': 'fadeOut 500ms ease-out',
        'blink': 'blink 1.2s linear infinite',
        'movingCursor': 'movingCursor 5s ease-out',
        'forwardText': 'forwardText 0s steps(2) forwards',
        'slideUp': 'slideUp 1s',
        'shutEye': 'shutEye 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateX(-110%)'},
          '25%': {opacity: '0.1',},
          '75%': {opacity: '0.5',},
          '100%': {opacity: '1', transform: 'translateX(0)'},
        },
        fadeOut: {
          '0%': {opacity: '1', transform: 'translateX(0)'},
          '25%': {opacity: '0.5',},
          '75%': {opacity: '0.1',},
          '100%': {opacity: '0', transform: 'translateX(-110%)'},
        },
        blink: {
          '0%': {opacity: '1'},
          '45%': {opacity: '1'},
          '55%': {opacity: '0'},
          'to': {opacity: '0'},
        },
        movingCursor: {
          'from': {opacity: '1'},
          'to': {opacity: '0'}
        },
        forwardText: {
          '0%': { visibility: 'hidden'},
          '100%': {visibility: 'visible'}
        },
        slideUp: {
          '0%': {opacity: '0', transform: 'translateY(50%)'},
          '25%': {opacity: '0'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        shutEye: {
          '95%': {
            transform: 'translateY(100%)',
          },
          '90%, 100%': {
            transform: 'translateY(0)',
          }
        },
      },
    },
  },
  plugins: [],
};
