const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenUI5Plugin = require('openui5-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appPath = path.resolve(__dirname, 'webapp');
const buildPath = path.resolve(__dirname, 'dist');

const modules = [
	"bower_components/openui5-sap.ui.core/resources",
	"bower_components/openui5-sap.ui.core/resources/sap/ui/thirdparty",
	"bower_components/openui5-sap.m/resources",
	"bower_components/openui5-sap.ui.support/resources",
	"bower_components/openui5-themelib_sap_belize/resources",
	"node_modules"
];

module.exports = {
	context: appPath,
	entry: {
		app: './app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules|thirdparty/
			},
			{
				test: /sap[/\\]ui[/\\]thirdparty[/\\](?:jquery\.js|jquery-mobile-custom\.js)/,
				use: 'script-loader',
			},
			{
				test: /jquery\.sap\.global\.js$/,
				use: {
					loader: 'exports-loader',
					query: 'jQuery'
				},
			},
			{
				test: /sap[/\\]ui[/\\]Device.js$/,
				use: {
					loader: 'exports-loader',
					query: 'window.sap.ui.Device'
				}
			},
			{
				test: /bower_components[/\\]openui5-sap.*\.js$/,
				use: 'openui5-renderer-loader'
			},
			{
				test: /sap[/\\](?:ui[/\\](?:core|layout)|m)[/\\][A-Z][^/\\]+\.js$/,
				use: {
					loader: 'openui5-theme-loader',
					options: {
						modules,
					}
				}
			},
			{
				test: /\.(?:le|c)ss$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: 'less-loader',
			},
			{
				test: /sap[/\\](?:ui[/\\](?:core|layout)|m)[/\\]themes[/\\][^/\\]+[/\\][A-Z][^/\\]+\.less$/,
				use: {
					loader: 'openui5-theme-base-loader',
					options: {
						modules,
					}
				}
			},
			{
				test: /\.xml$/,
				use: 'openui5-xml-loader',
			},
			{
				test: /\.properties$/,
				use: 'raw-loader',
			}
		]
	},
	output: {
		path: path.resolve(buildPath)
	},
	resolve: {
		modules,
	},
	plugins: [
		new CleanWebpackPlugin([buildPath]),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new OpenUI5Plugin({
			modulePath: "sap/ui/demo/todo",
			libs: ["sap.ui.core", "sap.m"],
			translations: ["en", "de"]
		}),
		new CopyWebpackPlugin([
			{
				from: 'model/todoitems.json',
				to: 'sap/ui/demo/todo/model'
			},
			{
				from: {
					glob: 'sap/ui/core/themes/base/fonts/**'
				},
				context: path.resolve(__dirname, 'bower_components/openui5-sap.ui.core/resources')
			},
			{
				from: {
					glob: 'sap/{ui/core,m}/themes/sap_belize/library-parameters.json'
				},
				context: path.resolve(__dirname, 'bower_components/openui5-themelib_sap_belize/resources')
			}
		]),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			generateStatsFile: true,
			openAnalyzer: false,
		})
	],
	devtool: 'source-map',
	mode: 'development'
};
