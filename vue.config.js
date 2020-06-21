'use strict'
module.exports = {
  configureWebpack: {
    entry: './src/main.js',
    resolve: {
      extensions: [".vue", ".ts", ".tsx", ".js", ".json"]
    }
  }
}
