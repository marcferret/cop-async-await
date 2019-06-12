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
            // EXPOSE-LOADER
            {
                test: /chef\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'Chef',
                }],
            },
            // BABEL
            {
                test: /\.js$/, // include .jsx files
                exclude: [/node_modules/], // exclude any and all files in the node_modules folder
                use: [
                    { loader: 'babel-loader'},
                ],
            },
        ]
    }
};
