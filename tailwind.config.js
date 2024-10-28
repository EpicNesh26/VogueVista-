

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './about.html',
    './cart.html',
    './collection.html',
    './shop.html'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  
        'sm': '425px',  
        'md': '768px',   
        'lg': '1024px',
        'xla': '1350px',
        'bxl': '1450px',
        'cxl': '1736px',
        'xlg': '1920px',
        'dxl': '2136px',
        'exl': '2300px'
      },
      fontFamily: {
        Inter: ['"Inria Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-background': "url('/Images/man-1866574_1920.jpg')",
        'dark-background': "url('/Images/aaa.jpg')",
        'Another-bg': "url('/Images/AUGDA.jpg')",

      }
    },
  },
  plugins: [],
}
