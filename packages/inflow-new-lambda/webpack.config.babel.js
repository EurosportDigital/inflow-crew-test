const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: ['./src'],
  resolve: {
    modules: ['node_modules'],
  },
  output: {
    path: path.resolve('build'),
    libraryTarget: 'commonjs2',
    filename: `index.js`,
  },
  optimization: {
    minimize: true,
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
