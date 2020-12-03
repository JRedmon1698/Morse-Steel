const path = require('path');

const SRC_FILE = path.resolve(__dirname, 'client', 'src', 'index.js');
const OUT_FILE = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  entry: ['@babel/polyfill', SRC_FILE],
  output: {
    path: OUT_FILE,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
};
