const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.js',

  output: {
    library: 'Supernova',
    libraryTarget: 'umd',
    path: __dirname + '/build',
    filename: 'index.js',
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      {
        test:   /\.(scss|sass|css)$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000&name=fonts/[hash].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}