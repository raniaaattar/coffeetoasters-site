module.exports = {
    content: [
      './*.html', 
    ],
    theme: {
      extend: {
        fontFamily: {
          'fraunces': ['"Fraunces"', 'serif'],
        },
        fontSize: {
            '72pt': '72pt', 
          },
          lineHeight: {
            '72': '72px', 
          },
          gradients: { 
              '0deg,#FEFCF7_0.01%,#FEFCF7_100%': 'linear-gradient(0deg, #FEFCF7 0.01%, #FEFCF7 100%)',
            },
            zIndex: {
              '10': '10',
            }
      },
    },
    plugins: [],
  }