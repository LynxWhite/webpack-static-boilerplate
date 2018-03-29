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
        extensions: ['.js', '.jsx', '.json', '.styl'],
        alias: {}
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
            },
            {
                test: /\.(png|jpg|svg|ico|cur|ani)$/,
                use: ['file-loader?name=images/[name].[ext]']
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [HtmlPlugin],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true, // respond to 404s with index.html
    }
};
