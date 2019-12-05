const { resolve } = require('path')

module.exports = {
  extensions: ['.js', '.jsx', '.tsx', '.ts', 'css'],
  alias: {
    '@': resolve(__dirname, '..', 'src/'),
    '@S': resolve(__dirname, '..', 'static/'),
    '@utils': resolve(__dirname, '..', 'src/utils/')
  }
}