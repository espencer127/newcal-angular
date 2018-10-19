const path = require('path');

output.publicPath = "/"

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: "/",
    path: path.resolve(__dirname, 'dist')
  }
};

