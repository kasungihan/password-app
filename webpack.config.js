const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
			{
				test: /\.scss$/,
				use: [
					"style-loader", // Injects styles into DOM
					"css-loader", // Turns CSS into CommonJS
					"sass-loader", // Compiles Sass to CSS
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html", // Generates HTML from a template
		}),
	],
	mode: "development", // Use 'production' for production builds
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"), // This replaces `contentBase`
		},
		compress: true,
		port: 3000,
	},
};
