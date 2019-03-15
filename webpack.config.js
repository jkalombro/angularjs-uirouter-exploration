module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/src/js',
        filename: 'app.bundle.js'
    },
    mode: 'production',
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}