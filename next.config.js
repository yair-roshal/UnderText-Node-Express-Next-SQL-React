const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    env: {
        PORT: process.env.PORT,
    },



    // Next 12.1.x or earlier

    experimental: {
        outputStandalone: true,
      },
          // output: 'standalone'  -  12.2.x or later

}
 