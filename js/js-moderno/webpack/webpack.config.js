const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }, port: 8000
    },
    entry: {
        main: "./src/index.js",
    }, mode: "development", module: {
        rules: [{
            test: /.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    }, plugins: [
        new MiniCssExtractPlugin()
    ]
}