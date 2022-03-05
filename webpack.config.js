const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './source/index.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, './distribution'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        ],
    },
};