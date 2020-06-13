const path = require('path')
const resolve = require('./config/resolve.config')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');//css 分离

const themePlugin = require('./src/theme/theme.js')

const ENV = process.env.NODE_ENV
const hashType = ENV === 'development' ? 'hash' : 'chunkhash'

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/[name].[${hashType}].js`,
    chunkFilename: `js/[name]-chunk.[${hashType}].js`
  },
  resolve,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // MiniCssExtractPlugin or style-loader
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              hmr: ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader', // MiniCssExtractPlugin or style-loader
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              hmr: ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name]-[contenthash:8].css`,
      chunkFilename: `css/[name]-chunk-[contenthash:8].css`,
      ignoreOrder: true, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      template: ENV === 'development' ? './src/template/index.html' : './src/template/index-prd.html'
    }),
    themePlugin
  ]

}