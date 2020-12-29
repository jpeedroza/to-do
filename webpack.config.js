const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/', 'script.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },

  plugins:[
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: path.join(__dirname, '/src/', 'index.html')})
  ],

  module: {
    rules: [
      // SCSS loader
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      // HTML loader
      {
        test: /\.html$/,
        exclude: [/node_modules/, path.resolve('./src/index.html')],
        use: { loader: 'html-loader' }
      },
      // IMG loader
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img'
          }
        },
      },
      // Babel loader
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: true,
    open: true,
    onListening: (server) => {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    }
  }
}
