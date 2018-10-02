const path = require('path');
const clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new clean(['test/index.html']),
    new html({
      filename: path.resolve(__dirname, 'test/index.html'),
      template: `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
          </head>
          <body>
          </body>
        </html>
      `
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
