var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {  //npm install style-loader css-loader
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'babel-loader'
                },
                {
                  loader: 'react-svg-loader',
                  query: {
                    svgo: {
                      plugins: [{removeTitle: false}],
                      floatPrecision: 2
                    }
                  }
                }
              ]
            }
        ]
    },
    output: {
        path: __dirname+'/public',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
