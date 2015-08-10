var webpack               = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");
var path                  = require("path");


var webpackConfig = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:9191", // WebpackDevServer host and port
      "webpack/hot/only-dev-server",
      "./examples/index"
    ],
  },
  devServer: {
    contentBase: "./examples"
  },
  output: {
    filename: "app.bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader?optional=runtime&stage=0"]},
      {test: /\.json$/, loader: "json-loader"},
      {test: /\.css$/,  loaders: ["style-loader", "css-loader"]},
      {test: /\.styl$/, loaders: ["style-loader", "css-loader!stylus-loader"]},
      {test: /\.png/, loader: "file-loader?mimetype=image/png"},
      {test: /\.jpg/, loader: "file"},
      {test: /\.gif/, loader: "file"}
    ]
  },
  resolve: {
    // Needed so you can require("a") instead of require("a.jsx")
    extensions: ["", ".js", ".jsx", ".json", ".styl"],
    // Let us do things like require("app/stores/Channel")
    root: __dirname,
    alias: {
      "react": path.join(__dirname, "node_modules/react"),
      "react-dev-monitor": path.join(__dirname, "src/index")
    }
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};


module.exports = webpackConfig;
