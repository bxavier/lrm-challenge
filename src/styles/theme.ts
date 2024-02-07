export default {
  baseSize: 16,
  grid: 12,
  gutterWidth: 1,
  container: {
    sm: 46,
    md: 61,
    lg: 76,
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
  },
  border: {
    radius: '0.4rem',
  },
  fonts: {
    family: {
      primary: 'Nunito, sans-serif',
      secondary: 'Source Sans Pro, sans-serif',
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    sizes: {
      h1: '2rem',
      h2: '1.8rem',
      h3: '1.5rem',
      h4: '1.3rem',
      h5: '1rem',
      h6: '0.8rem',
      subheading1: '1.2rem',
      subheading2: '1rem',
      body1: '1rem',
      body2: '0.8rem',
    },
  },
  colors: {
    primary: '#6D28D9',
    secondary: '#F5F3FF',
    black: '#000',
    white: '#fff',
    neutral: {
      100: '#F3F4F6',
      200: '#EFF0F5',
      300: '#D1D5DB',
      400: '#6B7280',
      500: '#333945',
    },
    error: '#EF4444',
    success: '#10B981',
    warning: '#FBBF24',
  },
} as const;
