const path = require('path')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

const options = {
  stylesDir: path.join(__dirname, './'),
  antDir: path.join(__dirname, '../../node_modules/antd'),
  varFile: path.join(__dirname, './variables.less'),//覆盖antd变量文件
  mainLessFile: path.join(__dirname, './main.less'),//自己的样式
  themeVariables: [
    '@primary-color',
    '@btn-primary-bg',
    '@menu-dark-item-active-bg',
    '@link-color',
    "@icon-color",
    '@border-radius-base',
    '@border-color-base'
  ],
  indexFileName: 'index.html',
  generateOnce: false,
  lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  publicPath: ""
}

module.exports = new AntDesignThemePlugin(options);
