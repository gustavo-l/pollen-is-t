const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    cache: true,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10,
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }
})
