const { resolve } = require('path')

module.exports = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', 'css'],
  alias: {
    '@': resolve(__dirname, '..', 'src/'),
    '@static': resolve(__dirname, '..', 'static/'),
    '@mock': resolve(__dirname, '..', 'mock/'),
    '@utils': resolve(__dirname, '..', 'src/utils/'),
    '@services': resolve(__dirname, '..', 'src/services/')
  }
}