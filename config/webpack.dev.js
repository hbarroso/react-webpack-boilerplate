const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
    output: {
        path: path.resolve(__dirname, '../public/dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },    
    devServer: {
        contentBase: path.join(__dirname, "../public"),
        publicPath: "/dist/",
        watchContentBase: true,
        compress: true,
        port: 9000,
        overlay: true,
    }
});