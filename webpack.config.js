module.exports = {
    entry: './src/script.js',
    output: {
        path: './dist/',
        filename: 'gianniAccordion.min.js'
    },
    module: {
        preLoaders: [
            {
            test: /\.jsx?$/,
            exclude: /libs/,
            loaders: []
            }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
