const path = require('path')
 
module.exports = {
    //   -  12.2.x or later
    output: 'standalone',

    // Next 12.1.x or earlier
    // experimental: {
    //     outputStandalone: true,
    //   }

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    env: {
        PORT: process.env.PORT,
    },
}
