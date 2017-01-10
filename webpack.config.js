const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
  // ,
  //  plugins: [
  //   new ExtractTextPlugin('../stylesheets/style.css', {
  //     allChunks: true
  //   })
  // ]
};



// {
//     devtool: 'source-map',
//     entry: [
//         // 'webpack-hot-middleware/client',
//         './src/client/index'
//     ],
//     output: {
//         path: path.resolve(__dirname, 'src/build'),
//         filename: 'bundle.js',
//         publicPath: 'src/build/'
//     },
//     externals: {
//         jquery: "jQuery"
//     },
//     module: {
//         rules: [
//             // js
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader',
//             },
//             // CSS
//             {
//                 // use: ['style-loader', 'css-loader'],
//                 //use and loader are equivalent the reason extractextplugin needs loader is due to legacy issues
//                 loader: ExtractTextPlugin.extract({
//                     loader: 'css-loader'
//                 }),
//                 test: /\.css$/
//             }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin(),
//         new ExtractTextPlugin('style.css')
//     ]
// };
