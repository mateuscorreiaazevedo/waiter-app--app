export const colors = {
  // Primary colors
  primary: '#d73035',
  'primary-dark': '#8a1114',
  secondary: '#ffabad',

  // Gray scale
  gray900: '#333333',
  gray700: '#666666',
  gray500: '#999999',
  gray300: '#cccccc',
  gray100: '#f2f2f2',
  white: '#ffffff',

  // Semantic colors
  danger: '#d73035',
  'danger-dark': '#8a1114',
  accent: '#ffabad',

  // Text colors
  foreground: '#333333',
  muted: '#f2f2f2',
} as const;

// Type for color keys
export type ColorKey = keyof typeof colors;
