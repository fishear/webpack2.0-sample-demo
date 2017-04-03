var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: __dirname + '/app/main.js',
	output:{
		path: __dirname + '/build',
		filename: "[name]-[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules!postcss-loader'
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
				 require('autoprefixer')()
				]
			}
		}),
		new webpack.BannerPlugin({banner: 'Copyright Flying Fish'}),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tpl.html"
		}),
    	new webpack.optimize.UglifyJsPlugin(),
    	new ExtractTextPlugin("style.css")
	],
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		colors: true, //终端输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	}
}

//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。