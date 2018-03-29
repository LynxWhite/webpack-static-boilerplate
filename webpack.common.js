const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/index.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.styl'],
        alias: {}
    },
    
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
    
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: path.resolve(__dirname, './src/resources/icons/favicon.ico'),
            inject: false,
            title: 'Production'
        })
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/bundle.js'
    },
}