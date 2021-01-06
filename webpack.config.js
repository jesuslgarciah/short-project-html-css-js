const path = require('path');

module.exports = {
  "mode": "none",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules : [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
}