const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const REGEXP_JS = /\.(js|jsx)$/;
const REGEXP_TS = /\.tsx?$/;
const REGEXP_CSS_LESS = /\.(css|less)$/;
const REGEXP_IMAGE = /\.(png|svg|jpe?g|gif|ico)$/;
const REGEXP_FILE = /\.(woff|woff2|eot|ttf|otf)$/;

module.exports = {

    mode: 'development',

    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },

    output: {
        filename: 'dist/js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: REGEXP_JS,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/
            },
            {
                test: REGEXP_CSS_LESS,
                include: /src/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            // 生产环境使用短类名，开发环境使用详细类名
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            // modifyVars,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: REGEXP_IMAGE,
                use: [{ loader: 'file-loader' }]
            },
            {
                test: REGEXP_FILE,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'), // src文件
            filename: 'index.html' // dist文件
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        before(app){
            app.get('/api/some/path', function(req, res) {
              res.json({ code: 0, data: {custom: 'response'} });
            });
        },
        contentBase: path.join(__dirname, "dist"),
        // 自动打开浏览器
        open: true,
        inline: true,
        // 热模块替换
        hot: true,
        // 服务端口号
        port: 9000,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    },

}

