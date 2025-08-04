import { colors } from './src/assets/styles/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
    },
  },
};
