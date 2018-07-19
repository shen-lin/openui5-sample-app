const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenUI5Plugin = require('openui5-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const appPath = path.resolve(__dirname, 'webapp');
const buildPath = path.resolve(__dirname, 'dist');

const rootPaths = [
	"node_modules/ui5_1.54/resources/sap/ui/core", "node_modules/ui5_1.54/resources/sap/m", "node_modules/ui5_1.54/resources/sap/ui/thirdparty", // workaround for signals dependency in hasher
	"node_modules/ui5_1.54/resources/sap/ui/support",
	"node_modules/ui5_1.54/resources",
	"node_modules"
];

module.exports = {
	context: appPath,
	entry: './app.js',
	mode: process.env.NODE_ENV === "production"
		? "production"
		: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}, {
				test: /ui5_1.54[/\\].*\.js$/,
				use: {
					loader: "openui5-renderer-loader",
					options: {
						filterRegEx: /[/\\]resources[/\\](.*)\.js$/
					}
				}
			}, {
				test: [
					/jquery-ui-position.js$/,
					// The following has to be fixed in the UI5 core
					/includeStylesheet.js$/,
					/Mobile.js$/,
					/Selection.js$/,
					/F6Navigation.js$/
				],
				use: {
					loader: "imports-loader",
					query: "jQuery=sap/ui/thirdparty/jquery"
				}
			}, {
				test: /jquery-mobile-custom.js$/,
				use: {
					loader: "imports-loader",
					query: "this=>window"
				}
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.less$/,
				use: 'less-loader'
			}, {
				test: /\.xml$/,
				use: 'openui5-xml-loader'
			}, {
				test: /\.properties$/,
				use: 'raw-loader'
			}
		]
	},
	output: {
		path: path.resolve(buildPath)
	},
	resolve: {
		modules: rootPaths,
		extensions: ['.js', '.properties', '.json', '.xml', '.css']
	},
	plugins: [
		new CleanWebpackPlugin([buildPath]),
		new HtmlWebpackPlugin({template: 'index.html'}),
		new OpenUI5Plugin({
			modulePath: "sap/ui/demo/todo",
			rootPaths,
			libs: [
				"sap.ui.core", "sap.m"
			],
			translations: ["en", "de"]
			// Avoid error parsing library.source.less file in SAPUI5. Removed {code}theme:
			// "sap_belize"{code}
		}),
		new webpack.NormalModuleReplacementPlugin(
			/^sap\/ui\/thirdparty\/URI$/,
			"urijs"
		),
		new CopyWebpackPlugin([
			{
				from: 'model/todoitems.json',
				to: 'sap/ui/demo/todo/model'
			}, {
				context: path.resolve(__dirname, "node_modules/ui5_1.54/resources/sap/ui/core"),
				from: {
					glob: "sap/ui/core/themes/base/fonts/**"
				}
			}, {
				context: path.resolve(
					__dirname,
					"node_modules/ui5_1.54/resources/themelib_sap_belize/src"
				),
				from: {
					glob: "sap/ui/core/themes/sap_belize/fonts/**"
				}
			}
		]),
		new BundleAnalyzerPlugin(
			{analyzerMode: 'static', generateStatsFile: true, openAnalyzer: false}
		)
	],
	devtool: 'source-map'
};
