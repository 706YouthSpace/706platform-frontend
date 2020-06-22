'use strict'
module.exports = {
  devServer: {
    port: 9527,
    proxy: {
      '/api': {
        target: `http://localhost:3001/`,
        changeOrigin: true, // needed for virtual hosted sites
      },
    }
  },
  configureWebpack: {
    entry: './src/main.js',
    resolve: {
      extensions: [".vue", ".ts", ".tsx", ".js", ".json"]
    }
  }
}
