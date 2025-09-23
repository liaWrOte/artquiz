import HtmlWebpackPlugin from "html-webpack-plugin";
var path = require('path');
const dependencies = require("./package.json").dependencies;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 4000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    // publicPath: '/'
  },
  module: {
    rules:[
      {
          loader: 'babel-loader',
          test: /\.js$|jsx/,
          exclude: /node_modules/,
      },
      // Images
      {
          test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
          use: [
          {
              loader: 'file-loader',
              options: { outputPath: 'images/' },
          },
          ],
      },
      // SCSS
      {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      // mp3
      {
          test: /\.mp3$/,
          loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "Remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Quiz" : './src/components/App'
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};

//https://oskari.io/blog/react-module-federation/