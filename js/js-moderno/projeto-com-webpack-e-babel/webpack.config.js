const path = require("path");

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        }, port: 8000
    }, mode: "production",
    entry: {
        main: "./src/main.js"
    }, output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.min.js"
    }
}