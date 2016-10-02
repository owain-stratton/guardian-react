var path = require('path');
var webpack = require('webpack');

module.exports = {
   devTool: 'source-map',
   entry: [
      'webpack-hot-middleware/client',
      './client/script'
   ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
   ],
   module: {
      loaders: [
         {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'client')
         },
         {
            test: /\.scss$/,
            include: path.join(__dirname, 'client'),
            loaders: ['style', 'css', 'sass']
         }
      ]
   }
};
