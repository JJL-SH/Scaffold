const CONFIG = require('./config/config');

const webpack = require('webpack');
const path = require('path');
const url = require('url');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const imageminWebpackPlugin = require('imagemin-webpack-plugin').default;

const extractSass = new extractTextWebpackPlugin({
  // 定义文件输出名字
  filename: '[name].[hash].css'
})

module.exports = {
  entry: {
    // 入口文件
    app: [
      path.resolve(__dirname, 'src/app.js')
    ],
    // 提取第三方库，打包成vendors文件
    vendors: CONFIG.vendors
  },
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 出入文件名称
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      })
    }, {
      test: /\.(jpg|jpeg|png)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'url-loader',
        options: {
          // 大于 20kb 的图片将存储到图片文件夹，小于的则使用css呈现
          limit: 1024 * 20,
          outputPath: 'images/'
        }
      }]
    }, {
      test: /\.(ttf|eot|woff|woff2|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          // 大于一兆的字体文件需要提取出来保存
          limit: 1024 * 1024,
          outputPath: 'fonts/'
        }
      }]
    }]
  },
  plugins: [
    // 使用自动生成index.html文件并把打包文件引入
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 指定公共 bundle 的名字，与 entry 中的 vendors 对应
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    // 清空打包目录
    new cleanWebpackPlugin(['dist']),
    // 提取css文件
    extractSass,
    // 图片压缩
    new imageminWebpackPlugin({
      // disabled: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '95-100'
      }
    })
  ]
}