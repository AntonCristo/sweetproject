const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
      importLoaders: 2,
      sourceMap: false, // turned off as causes delay
  }
}

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules:[
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ "babel-loader"]
          },
          {
            test: /\.(png|svg|jpg|gif)$/i,
            use: ['file-loader']
          },
          {
            test: /\.html$/,
            use: ["html-loader"]
          },
          {
            test: /\.(sa|sc|c)ss$/,
            exclude: /\.module\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader', "sass-loader"]
           },
           {
            test: /\.module\.(sa|sc|c)ss$/,
            use: ['style-loader', CSSModuleLoader, "sass-loader"]
           }
          // {
          //   test: /\.css$/i,
          //   use: ['style-loader', 'css-loader']
          // }
      ]
  },
  devServer: {
    contentBase: __dirname+"\\dist\\",
    port: 8082,
  },
  devtool:"cheap-module-source-map",
  plugins: [
    new htmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
        favicon:"./public/favicon.ico"
      }),
  ]
};