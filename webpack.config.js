const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: path.resolve(__dirname, './src/resources/icons/favicon.ico'),
    inject: false
})

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [HtmlPlugin]
};
