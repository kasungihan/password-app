const path = require("path");

module.exports = {
	entry: "./src/index.js", // Entry point for your application
	output: {
		filename: "app.js", // The output file name
		path: path.resolve(__dirname, "dist"), // Output directory
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Apply Babel to all .js files
				exclude: /node_modules/, // Exclude dependencies
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"], // Use Babel preset-env for transpiling
					},
				},
			},
		],
	},
	mode: "development", // Use 'production' for production builds
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"), // This replaces `contentBase`
		},
		compress: true,
		port: 3000,
	},
};
