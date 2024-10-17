module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#347928',      // A dark green color
        secondary: '#C0EBA6',    // A light green color
        accent: '#FFFBE6',       // A soft, light cream color
        highlight: '#FCCD2A',    // A bright yellow color
      },
    },
  },
  plugins: [],
}
