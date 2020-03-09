const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = {
  entry: [
    path.join(PATH_SOURCE, './index.js')
  ],
  output: {
    path: PATH_DIST,
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  useBuiltIns: 'usage',
                 corejs: 3
                }]
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, './index.html')
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new PrettierPlugin({
        'tabWidth': 4
    }),

    new CopyWebpackPlugin([{
      from: 'src/images/'
    }]),

    new ImageminPlugin({
      pngquant: {
        quality: '70-80'
      },
    })
  ],
  devServer: {
    contentBase: PATH_DIST,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true
    }
  },
  
  resolve: {
    extensions: ['.js', '.scss']
  }
};