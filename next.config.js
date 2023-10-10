const path = require('path')
 
module.exports = {
    
 
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

      
    //   -  12.2.x or later
    output: 'standalone',

    // Next 12.1.x or earlier
    // experimental: {
    //     outputStandalone: true,
    //   }

    env: {
        PORT: process.env.PORT,
    },
}
