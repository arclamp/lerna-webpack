var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'padgraph.js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'PadGraph',
      filename: 'index.html'
    })
  ]
};
