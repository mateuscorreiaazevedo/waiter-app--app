import { colors } from './src/assets/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily: {
        inter400: 'inter400',
        inter500: 'inter500',
        inter600: 'inter600',
        inter700: 'inter700',
      },
    },
  },
};
