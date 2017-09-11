const path = require('path')

module.exports = {
  entry: './src/index.js', // input
  // all the processing machinery in between
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
}
