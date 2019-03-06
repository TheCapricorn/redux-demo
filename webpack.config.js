const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:'./app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Development',
          template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      },
      resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".js", ".json"]
    },
}