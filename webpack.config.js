module.exports = [{
	entry: './src/appWrapper.js',
	output: {
		filename: './out/bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	devtool: 'source-map'
}, {
	entry: './src/test.js',
	output: {
		filename: './out/test.js'
	}
}];