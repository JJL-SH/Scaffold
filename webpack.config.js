const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  // 定义文件输出名字
  filename: '[name].[hash].css'
})

module.exports = {
  entry: {
    // 入口文件
    app: Path.resolve(__dirname, 'src/app.js'),
    // 提取第三方库，打包成vendors文件
    vendors: ['react']
  },
  output: {
    // 输出路径
    path: Path.resolve(__dirname, 'dist'),
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
          loader: 'css-loader',
          options: {
            // 使用sourcemap
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            // 使用sourcemap
            sourceMap: true
          }
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
  devtool: "source-map",
  plugins: [
    // 使用自动生成index.html文件并把打包文件引入
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 清空打包目录
    new CleanWebpackPlugin(['dist']),
    // 提取css文件
    extractSass,
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: false,
    host: 'localhost',
    port: 3000
  }
}