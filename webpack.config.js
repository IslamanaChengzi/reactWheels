const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode:'production',
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
    resolve:{
        extensions:['.ts','.tsx','.js','.jsx'],
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:'Wheels React',
    //         template:'index.html'
    //     })
    // ],
    // externals:{
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React'
    //     },
    //     'react-dom':{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:'React-dom'
    //     }
    // }
}