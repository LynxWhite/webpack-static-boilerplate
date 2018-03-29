const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true, // respond to 404s with index.html
        contentBase: './public'
    }
})