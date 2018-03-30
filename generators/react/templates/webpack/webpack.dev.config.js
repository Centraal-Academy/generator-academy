const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const config = merge(common, {
  devServer: {
    compress: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
