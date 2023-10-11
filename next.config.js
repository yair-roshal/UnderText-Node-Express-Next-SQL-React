const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  output: 'standalone',

  env: {
    PORT: process.env.PORT,
  },
}
