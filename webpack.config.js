const path=require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports={
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
                {
                    test: /\.(js|jsx|mjs)$/,
                    include:resolveApp('src') ,
                    loader: require.resolve('babel-loader'),
                    options: {
                    compact: true,
                    },
                
                },
            ]
    },

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
        extensions: [ ".js", ".json",".jsx"]
    },
}