'use strict';

process.env.NODE_ENV = 'production';

const baseWebpackConfig = require('../webpack.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: true,
    minimizer: [],//允许你通过提供一个或多个定制过的 TerserPlugin 实例，覆盖默认压缩工具(minimizer)。
    runtimeChunk: true,//管理运行时模块依赖文件
    //分离打包
    // splitChunks: {
    //   chunks: 'all'//所有node_modules里的东西都放到vendors~main.js的文件中去,vendors.js 承受着和开始 main.js 文件同样的问题——部分的修改会意味着重新下载所有的文件
    // },
    splitChunks: {//https://juejin.im/post/5cdfb48fe51d4510ac6721b7
      chunks: 'all',
      // minSize:0,//把所有文件都分离出来(默认小于30kb文件不分离减少script请求)
      cacheGroups: {//cacheGroups是我们用来制定规则告诉 Webpack 应该如何组织 chunks 到打包输出文件的地方
        vendor: {//自定义打包规则，匹配所有node_modules所有包打包出对应包名文件
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        // 'react-pack': {//打包react
        //   test: /react/,
        //   name: 'react-pack',
        // },
      }
    },
  },
  plugins: [
    new CleanWebpackPlugin(),

  ]
});

webpack(prodWebpackConfig, (err, stats) => {
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to false will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  );
});
