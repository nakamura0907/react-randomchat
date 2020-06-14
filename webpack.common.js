const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: { url: false },
                  },
                ],        
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ]
}