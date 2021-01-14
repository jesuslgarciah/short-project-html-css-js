const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./index.html", to: ""},
        { from: "./styles.css", to: ""}
      ],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
}