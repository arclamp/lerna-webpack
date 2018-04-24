var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'umd',
    path: path.resolve('dist'),
    filename: 'left-paddy.js'
  }
};
