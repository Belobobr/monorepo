const path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const production = {
    name: "production",
    mode: "production",
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: '@tripeverywheree/uikit',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx?$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env",
                            "react"
                        ]
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'react'
        }
    },
    devtool: "source-map",
}

const development = {
    ...production,
    name: "development",
    mode: "development",
    devtool: "source-map",
}

module.exports = [production, development];