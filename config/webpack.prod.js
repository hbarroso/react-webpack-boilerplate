const path = require('path');
const Merge = require('webpack-merge');
const webpack = require('webpack');
const CommonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, '../public/dist'),
        filename: '[name].[chunkhash].min.js',
        publicPath: '/dist/'
    },    
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),        
        new CleanWebpackPlugin(['public/dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
    ]
});