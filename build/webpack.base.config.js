const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js' // 不要写死文件名 app.js 
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader'
                }],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:50000,   //表示低于50000字节（50K）的图片会以 base64编码
                            outputPath:"./images",
                            name: "[name].[hash:5].[ext]",
                            // pulbicPath:"./dist/asset/images"
                        }
                    }
                ]
            },
            { //字体文件
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: "[name]-[hash].[ext]",
                    outputPath: './fonts'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
