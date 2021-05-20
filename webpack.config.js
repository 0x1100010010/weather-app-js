module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['./src/index.js', './src/styles/style.scss'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};