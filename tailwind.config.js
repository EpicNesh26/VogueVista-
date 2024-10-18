// /** @type {import('tailwindcss').Config} */
// module.exports = {

//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx,html}',
//   ],
//   theme: {
//     screens: {
//       'xla': '1350px',
//       'bxl': '1450px',
//       'cxl': '1736px',
//       'xlg': '1920px',
//       'dxl': '2136px'
//     },

//     extend: {

//     },

//     fontFamily: {
//       Inter: ['"Inria Sans", sans-serif;']
//     },
//     backgroundImage: {
//       'custom-background': "url('/Images/man-1866574_1920.jpg')",
//       'dark-background': "url('/Images/aaa.jpg')",
//       'Another-bg': "url('/Images/AUGDA.jpg')"
//     }
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      screens: {
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
        'Another-bg': "url('/Images/AUGDA.jpg')"
      }
    },
  },
  plugins: [],
}
