/**
 *  antd-theme-generator 编译  
 *  配置文件 theme.js 引入 antd默认文件和自己覆盖的文件
 *  生成 theme.less
 *  html 引入 less.js theme.less  (HtmlWebpackPlugin  theme 开启)
 *  配置 lees javscript
 * 
 *  build
 *  先 build 后 node config/theme.js
 * 
 */
const openTheme = true //开启主题

module.exports = {
  openTheme
}

if (!openTheme) return

const path = require('path');
const fs = require("fs")
const { generateTheme, } = require('antd-theme-generator');

const options = {
  stylesDir: path.join(__dirname, '../src/theme'),
  antDir: path.join(__dirname, '../node_modules/antd'),
  varFile: path.join(__dirname, '../src/theme/variables.less'),//覆盖antd变量文件
  mainLessFile: path.join(__dirname, '../src/theme/main.less'),//自己的样式
  themeVariables: [ //需要动态切换的主题变量
    '@primary-color',
    '@btn-primary-bg',
    '@menu-dark-item-active-bg',
    '@link-color',
    "@icon-color",
    '@border-radius-base',
    '@border-color-base',
  ],
  indexFileName: 'index.html',
  outputFilePath: createOutPutFile(fs, path), //生成页面引入的主题变量文件
}


generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  });


function createOutPutFile (fs, path) {
  const exists = fs.existsSync(path.join(__dirname, '../dist/theme/'))
  if (!exists) {
    fs.mkdirSync('dist/');
    fs.mkdirSync('dist/theme');
  }

  return path.join(__dirname, '../dist/theme/theme.less')
}