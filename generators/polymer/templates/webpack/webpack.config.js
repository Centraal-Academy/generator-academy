const merge = require('webpack-merge')
const common = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = merge(common, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})

module.exports = config
