const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');
const ngcWebpack = require('ngc-webpack');
const path = require('path');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'production';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    // devtool: 'source-map', // Enable source maps. Please note that this will slow down the build
    entry: {
        polyfills: './src/main/webapp/app/polyfills',
        global: './src/main/webapp/content/css/global.css',
        main: './src/main/webapp/app/app.main-aot'
    },
    output: {
        path: utils.root('build/www'),
        filename: 'app/[name].[hash].bundle.js',
        chunkFilename: 'app/[id].[hash].chunk.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            loaders: 'tslint-loader',
            exclude: ['node_modules', new RegExp('reflect-metadata\\' + path.sep + 'Reflect\\.ts')]
        },
        {
            test: /\.ts$/,
            use: [
                { loader: 'angular2-template-loader' },
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'tsconfig-aot.json'
                    },
                }
            ],
            exclude: ['node_modules/generator-jhipster']
        }]
    },
    plugins: [
        new ExtractTextPlugin('[hash].styles.css'),
        new Visualizer({
            // Webpack statistics in target folder
            filename: '../stats.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            // sourceMap: true, // Enable source maps. Please note that this will slow down the build
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                keep_fnames: true,
                screw_i8: true
            }
        }),
        new ngcWebpack.NgcWebpackPlugin({
            disabled: false,
            tsConfig: utils.root('tsconfig-aot.json'),
            resourceOverride: ''
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
});
