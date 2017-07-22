const path = require('path');
const webpack = require('webpack');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',     // 2 -> Creates styles nodes from JS Strings
                    'css-loader',       // 1 -> Translate CSS into CommonJS
                    'sass-loader'       // 0 -> Translate SASS to CSS
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            { 
                test: /\.ejs$/, 
                use: ['ejs-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackHarddiskPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.resolve(__dirname, '../src/index.ejs'),
            filename: '../index.html',
            alwaysWriteToDisk: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'common'],
            minChunks: Infinity,            
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        function () {
        this.plugin('done', stats => {
            require('fs').writeFileSync(
                path.join(__dirname, '../public/dist/manifest.json'),
                JSON.stringify(stats.toJson().assetsByChunkName)
            )
        });
        }
    ]
}
