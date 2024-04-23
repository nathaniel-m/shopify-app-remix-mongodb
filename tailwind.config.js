/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white':'#FFF',
        'gray': '#CACACA',
        'gray-50': '#f7f7f7',
        'gray-100': '#e3e3e3',
        'gray-200': '#c8c8c8',
        'gray-300': '#a4a4a4',
        'gray-400': '#818181',
        'gray-500': '#666666',
        'gray-600': '#515151',
        'gray-700': '#3e3e3e',
        'gray-800': '#383838',
        'gray-900': '#313131',
        'black':'#000',
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fdd6ab',
        '300': '#fcb975',
        '400': '#f9913e',
        '500': '#f77118',
        '600': '#e8570e',
        '700': '#c1410d',
        '800': '#a03614',
        '900': '#7b2c13',
        '950': '#431407',
      }, 
      fontFamily: {
        'Pacifico': ['Pacifico', 'system-ui']
      },
      backgroundImage: {
      'hero-dk': "url('../bg-dk.jpg')",
      'hero-lt': "url('../bg-lt.jpg')",
    },
  },
},
  plugins: [],
}

