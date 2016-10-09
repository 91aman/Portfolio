module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './build/app.js'
    },
    //devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react!svg-react'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { test: /\.jpg/, loader: "url-loader?limit=10000000000" }
        ]
    },
    node: {
        // console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
