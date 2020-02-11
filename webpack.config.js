const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production',
    entry: {
        wheels:'./lib/index.tsx'
    },
    output:{
        path: path.resolve(__dirname, 'dist/lib'),
        library:'Luan',
        libraryTarget:'umd'
            // __dirname + '/dist' //macOS和Linux写法
            // __dirname + '\\dist' // windows写法

    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Wheels React',
            template:'index.html'
        })
    ]
}