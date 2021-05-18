module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: ['./src/index.js', './src/styles/style.scss'],
	// output: {
	// 	path: path.resolve(__dirname, 'dist'),
	// 	// filename: 'js/editor.blocks.js',
	// },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};