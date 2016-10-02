var path = require('path');
var webpack = require('webpack');

module.exports = {
   devTool: 'source-map',
   entry: [
      './client/script'
   ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.definePlugin({
         'process.env': {
            'NODE_ENV': "'production'"
         }
      }),
      new webpack.optimize.UglifyJsPlugin({
         compressor: {
            warnings: false
         }
      })
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
