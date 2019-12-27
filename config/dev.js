'use strict';

process.env.NODE_ENV = 'development';
const baseWebpackConfig = require('../webpack.config.js');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  devtool: 'eval-source-map',
  devServer: {
    quiet: true, // open quiet necessary for FriendlyErrorsPlugin / stats and quiet onley one
    // stats: {
    //   modules: false,
    //   children: false,
    //   chunks: false,
    //   chunkModules: false
    // },
    historyApiFallback: true,
    contentBase: './',
    compress: false,
    hot: true,
    host: 'localhost',
    port: 9000,
    overlay: { warnings: false, errors: true },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': 'api' // 重写接口
        }
      }
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:9000`]
      },
      clearConsole: true,
      onErrors: (severity, errors) => {
        //severity  error/warning
        return severity + ': ' + errors[0].name;
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
