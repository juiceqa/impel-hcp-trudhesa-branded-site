const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js', '.coffee.spec']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};

const options = {
  webpackOptions
};

module.exports = wp(options);
