// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // adjust path based on your setup
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear', // custom fast spin
      },
    },
  },
  plugins: [],
}
