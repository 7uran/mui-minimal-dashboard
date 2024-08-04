/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, white 40%, rgb(255,247,245) 60%, #F5FCFD 80%, white 100%)',
      },
      colors: {
        mainColor: '#05AB72',

      }
    },
  },
  plugins: [],
}