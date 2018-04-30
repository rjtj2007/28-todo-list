const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.jsx',
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],
  module: {
    rules: [
      {test: /\.(jsx?$)/, loader: ["babel-loader"], exclude: /node_modules/},
      {test: /\.s?css$/, loader: ["style-loader", "css-loader", "sass-loader"]},
    ]
  }
}


module.exports = config;