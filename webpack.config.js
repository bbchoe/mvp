var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


// do i need to specify directory location for the CSS file?

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./app/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname,'app/public/assets/styles.css'),
      }
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   include: path.join(__dirname,'app/public/assets/styles.css'),
      //   // query: {
      //   //   modules: true,
      //   //   localIdentName:'[name]__[local]__[hash:base64:5]'
      //   // }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
