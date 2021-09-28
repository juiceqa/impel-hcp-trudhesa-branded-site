const path = require("path")
const webpack = require("webpack")
const WebpackLighthousePlugin = require("webpack-lighthouse-plugin")

module.exports = {
    plugins: [
        new WebpackLighthousePlugin({
            url: "https://trudhesahcp.com/",
            saveArtifacts: true,
            perf: true,
            disableCPUThrottling: false,
        }),
    ],
    entry: "./src/index.ts",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
}