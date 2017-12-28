const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenUI5Plugin = require('openui5-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const appPath = path.resolve(__dirname, 'webapp');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	context: appPath,
	entry: {
		app: './app.js',
		vendor: [
			'script-loader!sap/ui/thirdparty/URI',
			'sap/ui/thirdparty/jquery',
			'sap/ui/thirdparty/jqueryui/jquery-ui-position',
			'sap/ui/Device',
			'jquery.sap.global'
		]
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
				use: 'openui5-theme-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
				}),
			},
			{
				test: /sap[/\\](?:ui[/\\](?:core|layout)|m)[/\\]themes[/\\][^/\\]+[/\\][A-Z][^/\\]+\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'less-loader', 'openui5-theme-base-loader']
				}),
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
		path: path.resolve(buildPath),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: ''
	},
	resolve: {
		"modules": [
			"bower_components/openui5-sap.ui.core/resources",
			"bower_components/openui5-sap.ui.core/resources/sap/ui/thirdparty",
			"bower_components/openui5-sap.m/resources",
			"bower_components/openui5-sap.ui.support/resources",
			"bower_components/openui5-themelib_sap_belize/resources",
			"node_modules"
		]
	},
	plugins: [
		new CleanWebpackPlugin([buildPath]),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new OpenUI5Plugin({
			modulePath: "sap/ui/demo/todo",
			libs: ["sap.ui.core", "sap.m"],
			translations: ["en", "de"]
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		new ExtractTextPlugin('style.[contenthash].css'),
		new OptimizeCssAssetsPlugin(),
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
		])
	],
	devtool: 'source-map'
};
