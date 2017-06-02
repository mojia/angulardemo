var webpack = require('webpack');
var path = require('path');

var basePath = path.join(__dirname, 'src');

console.log('basePath:' + basePath)

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './bundle.js'
    },

    resolve: {
        modules: ['node_modules', './src'],
        extensions: [".jsx", ".json", ".js", ".ts"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};

