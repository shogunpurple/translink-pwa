const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'translink-pwa.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.ASSET_PATH || '/' 
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'async' }),
    new MiniCssExtractPlugin({ filename: `[name].css` }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\/translink/,
        handler: 'NetworkFirst'
      }]
    }),
    new CopyPlugin([ 
      'manifest.json',
      { from: 'assets', to: 'assets' }
    ])
  ]
};
