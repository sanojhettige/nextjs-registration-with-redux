module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {
      '50': '#f4f7ff', 
      '100': '#eaefff', 
      '200': '#cad8ff', 
      '300': '#a9c0ff', 
      '400': '#6991ff', 
      '500': 'var(--color-primary)', 
      '600': '#2558e6', 
      '700': '#1f4abf', 
      '800': '#193b99', 
      '900': '#14307d'
  },
  'black': {
          '50': '#f2f2f2', 
          '100': '#e6e6e6', 
          '200': '#bfbfbf', 
          '300': '#999999', 
          '400': '#4d4d4d', 
          '500': 'var(--color-black)', 
          '600': '#000000', 
          '700': '#000000', 
          '800': '#000000', 
          '900': '#000000'
      },
      'white': {
        '50': '#ffffff', 
        '100': '#ffffff', 
        '200': '#ffffff', 
        '300': '#ffffff', 
        '400': '#ffffff', 
        '500': 'var(--color-white)', 
        '600': '#e6e6e6', 
        '700': '#bfbfbf', 
        '800': '#999999', 
        '900': '#7d7d7d'
    },
    'secondary': {
    '50': '#ffffff', 
    '100': '#ffffff', 
    '200': '#ffffff', 
    '300': '#ffffff', 
    '400': '#ffffff', 
    '500': 'var(--color-secondary)', 
    '600': '#e6e6e6', 
    '700': '#bfbfbf', 
    '800': '#999999', 
    '900': '#7d7d7d'
},
  'error': {
    '50': '#fef6f5', 
    '100': '#feeceb', 
    '200': '#fcd0cd', 
    '300': '#fbb4af', 
    '400': '#f77b72', 
    '500': 'var(--color-error)',
    '600': '#dc3c31', 
    '700': '#b73229', 
    '800': '#922820', 
    '900': '#78211a'
},
'success': {
  '50': '#f2fcf6', 
  '100': '#e6faee', 
  '200': '#bff1d4', 
  '300': '#99e9ba', 
  '400': '#4dd987', 
  '500': 'var(--color-success)', 
  '600': '#00b44b', 
  '700': '#00963e', 
  '800': '#007832', 
  '900': '#006229'
},
'blue-gray': {
    '50': '#f4f5f5', 
    '100': '#e9ebeb', 
    '200': '#c9cccd', 
    '300': '#a8adaf', 
    '400': '#677074', 
    '500': 'var(--color-blue-gray)', 
    '600': '#222d32', 
    '700': '#1d262a', 
    '800': '#171e22', 
    '900': '#13191b'
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
