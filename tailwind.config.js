module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008DDA',   
        secondary: '#41C9E2',   
        accent: '#ACE2E1',       
        highlight: '#F7EEDD',    
      },
    },
  },
  plugins: [],
}
