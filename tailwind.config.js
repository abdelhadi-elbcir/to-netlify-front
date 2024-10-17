module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008DDA',      // A dark green color
        secondary: '#41C9E2',    // A light green color
        accent: '#ACE2E1',       // A soft, light cream color
        highlight: '#F7EEDD',    // A bright yellow color
      },
    },
  },
  plugins: [],
}
