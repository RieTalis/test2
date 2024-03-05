const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtactPlugin = require('mini-css-extract-plugin')
const ghpages = require('gh-pages')

module.exports = {
    context: path.resolve(__dirname, 'src'),

    mode: 'development',

    entry: {
        main: './index.js'
},

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
                template: './index.html'
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtactPlugin({
                filename: '[name].[contenthash].css'
            }),
            
            new CopyWebpackPlugin({
                 patterns: [{
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, 'dist') 
                }] 
            }),
    ],

    devServer: {
        port: 4200
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtactPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtactPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
}