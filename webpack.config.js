var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  debug: process.env.NODE_ENV === 'production',
  devtool: process.env.NODE_ENV === 'production'? undefined :'source-map',
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: [
            'transform-es3-property-literals',
            'transform-es3-member-expression-literals'
          ]
        }
      }
    ]
  }
};

