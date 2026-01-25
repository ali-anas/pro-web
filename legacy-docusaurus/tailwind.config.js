/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bgHero': 'var(--color-hero-bg)',
        'bgSurface': 'var(--color-surface)',
        'primary': 'var(--ifm-color-primary)',
        'startColor': '#7928ca',
        'endColor': '#FF0080',
        'textPrimary': 'var(--text-primary)',
        'textSecondary': 'var(--text-secondary)',
        'textSecondaryLight': 'var(--text-secondary-light)',
        'bgSecondary': 'var(--color-bg-secondary)',
      },
      boxShadow: {
        window: '0px 36px 89px rgb(0 0 0 / 4%), 0px 23.3333px 52.1227px rgb(0 0 0 / 3%), 0px 13.8667px 28.3481px rgb(0 0 0 / 2%), 0px 7.2px 14.4625px rgb(0 0 0 / 2%), 0px 2.93333px 7.25185px rgb(0 0 0 / 2%), 0px 0.666667px 3.50231px rgb(0 0 0 / 1%)',
        smallest: '0px 2px 4px rgba(0,0,0,.1)',
        extraSmall: '0px 4px 8px rgba(0,0,0,.12)',
        small: '0 5px 10px rgba(0,0,0,.12)',
        medium: '0 8px 30px rgba(0,0,0,.12)',
        large: '0 30px 60px rgba(0,0,0,.12)',
        hover: '0 30px 60px rgba(0,0,0,.12)',
        sticky: '0 12px 10px -10px rgba(0,0,0,.12)',
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
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
};
