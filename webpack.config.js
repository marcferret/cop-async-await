const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        openPage: 'index.html',
        disableHostCheck: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/, // include .jsx files
                exclude: [/node_modules/], // exclude any and all files in the node_modules folder
                loader: 'babel-loader',
            },
        ]
    }
};
