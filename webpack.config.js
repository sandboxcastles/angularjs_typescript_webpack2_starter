'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// Replaces .babelrc
let babelOptions = {
    "presets": ["env"]
};

const webpackConfig = {
    entry: {
        app: './src/app/app.module.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001,
        open: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                // Takes any scss files found and compiles them to css
                test:/\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
                })
            },
            {
                // Used to be able to use require() for templates
                test: /\.html$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, 'src/index.html')
                ],
                use: ['raw-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader:'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typescript Webpack Sample',
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/app.bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}

module.exports = webpackConfig;