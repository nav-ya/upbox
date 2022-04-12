module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'text-primary': 'DM Serif Display',
        'text-secondary': 'DM Sans',
      },
      colors: {
        pink: '#ef8094',
        landing: '#f5f9fe',
        border: '#c4c5c5',
      },
    },
  },
  plugins: [],
}
