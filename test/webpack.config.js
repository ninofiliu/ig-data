const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPLugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    target: 'web',
    plugins: [
        new CleanWebPackPLugin(['dist']),
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`
        })
    ],
    resolve: {
        extensions: ['.js', '.html']
    }
}