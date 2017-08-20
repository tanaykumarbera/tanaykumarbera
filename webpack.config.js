var path = require('path');
var LessPluginGroupMediaQueries = require('less-plugin-group-css-media-queries');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.yml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' }
        ]
      }, {
        test: /\.less$/,
        use: [
          { loader: 'css-loader',
            options: {
              minimize: isProduction
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'less-loader',
            options: {
              plugins: [ LessPluginGroupMediaQueries ]
            }
          }
        ]
      }, {
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-template-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".hbs", ".less", ".yml"]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      globals: {
        window: {},
        document: {}
      },
      paths: [
        '/index.html',
        '/eror.html'
      ]
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: false,
    open: true,
    host: '0.0.0.0',
    port: '7002'
  }
}
