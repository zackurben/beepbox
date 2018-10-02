const path = require('path');
const clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './test/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test'),
    publicPath: ''
  },
  plugins: [
    new clean(['test/index.html', 'test/main.js']),
    new html({
      filename: path.resolve(__dirname, 'test/index.html'),
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
};
