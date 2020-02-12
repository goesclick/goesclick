module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['env', 'react'] }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'sass-loader' }]
      }
    ]
  }
};
