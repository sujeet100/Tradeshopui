const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const commonConfig = require('./webpack.common.config');

const APP_DIR = path.resolve(__dirname, 'src');
const STYLE_DIR = path.join(APP_DIR, '/styles');

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      path.join(APP_DIR, 'index.js')
    ]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        include: STYLE_DIR,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({ browsers: ['ie 11', 'ff 45', 'last 2 versions'] })
              ],
            }
          },
          { loader: 'sass-loader?sourceMap', query: { outputStyle: 'expanded' } },
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
