module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
     { test: /\.scss$/, loaders: ["style", "css", "sass"] },
     { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

