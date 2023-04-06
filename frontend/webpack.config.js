const path = require("path");

module.exports = {
    entry : "./src/Index.js",
    output : {
        path : path.join(__dirname, "public"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader"
            },
            {
                test:/\.s?css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test:/\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    mode : "development",
    devtool : "inline-source-map"
}