const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  target: 'web',

  cache: true,

  node: {
    fs: 'empty',
  },

  entry: {
    app: path.join(__dirname, 'app.js'),
    common: [
      'react',
      'redux',
      'react-redux',
      'redux-devtools',
      'redux-thunk',
    ],
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
  },

  output: {
    path: path.join(__dirname, 'tmp'),
    publicPath: '',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory&stage=0&optional=runtime'],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/layout.html',
      inject: true,
    }),
    new webpack.NoErrorsPlugin(),
  ],

  debug: true,

  devtool: 'source-map',

  devServer: {
    contentBase: './tmp',
    historyApiFallback: true,
  },
};
