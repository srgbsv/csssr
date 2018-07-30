var webpack = require("webpack");
var	path	=	require('path');

module.exports = {
    entry: {
        app: "./test.jsx.js"
    },
    output: {
        filename: "./bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,  // Match both .js and .jsx
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    }
};

