const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { REGEXP_JS, REGEXP_TS, REGEXP_CSS_LESS, REGEXP_IMAGE, REGEXP_FILE } = require('./regExp');

// const SpreedWebpackPlugin = require('speed-measure-webpack-plugin');

// const smp = new SpreedWebpackPlugin();

// const MockApi = require('./src/mock/mocker');

module.exports = {
    // node: {
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty'
    // },

    mode: 'development',

    // target: 'web',

    entry: {
        // app: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')]
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        // filename: 'public/js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
        // publicPath: '/',
        // pathinfo: false
    },

    // cache: {
    //     type: 'filesystem',
    //     cacheDirectory: 'node_modules/.cache/webpack'
    // },
    // devtool: 'cheap-module-eval-source-map',
    // watchOptions: {
    //     // 每500毫秒检查一次变动
    //     poll: 500,

    //     // 监听大量文件系统会导致大量的 CPU 或内存占用，排除node_modules对降低cpu负载
    //     ignored: /node_modules/
    // },
    devServer: {
        // before(app) {
        //     MockApi(app);
        // },
        // 允许访问的机器列表
        // allowedHosts: [HOST, 'localhost', '127.0.0.1'],

        // 提供静态资源的文件夹
        contentBase: './dist',

        // 自动打开浏览器
        open: true,

        // 热模块替换
        hot: true,

        // 服务端口号
        port: 8000,

        // ip地址，`0.0.0.0` 支持 `localhost`、`127.0.0.1`、ip访问
        // host: HOST,

        // html5路由
        historyApiFallback: true,

        // 编译错误、警告显示在浏览器上
        // overlay: {
        //     errors: true
        // },

        // 请求代理
        // proxy: PROXY
    },

    plugins: [
        // HTML文件的创建
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'), // src文件
            filename: 'index.html' // dist文件
        }),

        // 模块热替换
        new webpack.HotModuleReplacementPlugin(),

        // 优化 moment 包大小，去除本地化内容
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        //  提供模块中间缓存，完成二次构建加速
        // new HardSourceWebpackPlugin({
        //     cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/hard-source/[confighash]'),
        //     configHash: function getConfigHash(webpackConfig) {
        //         return require('node-object-hash')({ sort: false }).hash(webpackConfig);
        //     },
        //     environmentHash: {
        //         root: process.cwd(),
        //         directories: [],
        //         files: ['package-lock.json', 'yarn.lock']
        //     },
        //     info: {
        //         mode: 'none',
        //         level: 'debug'
        //     },
        //     cachePrune: {
        //         maxAge: 2 * 24 * 60 * 60 * 1000,
        //         sizeThreshold: 50 * 1024 * 1024
        //     }
        // }),

        // 路径大小写检查
        // new CaseSensitivePathsPlugin()
        // new webpack.DefinePlugin({
        //     // window.ENV = 'production'
        //     ENV: JSON.stringify('development')
        // }),
        // // 第三，告诉 Webpack 使用了哪些动态链接库
        // new webpack.DllReferencePlugin({
        //     // 描述 react 动态链接库的文件内容
        //     manifest: require(path.resolve(__dirname, 'dist/public/dll/vendor.manifest.json'))
        // })
    ],
    module: {
        rules: [
            {
                test: REGEXP_JS,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    // {
                    //     loader: require.resolve('eslint-loader'),
                    //     options: {
                    //         eslintPath: require.resolve('eslint')
                    //     }
                    // }
                ],
                exclude: /node_modules/
            },
            // {
            //     test: REGEXP_TS,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: {
            //                 cacheDirectory: true
            //             }
            //         },
            //         {
            //             loader: 'ts-loader',
            //             options: {
            //                 transpileOnly: true
            //             }
            //         }
            //     ],
            //     include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/pages')]
            // },
            // {
            //     test: REGEXP_CSS_LESS,
            //     include: [path.resolve(__dirname, 'src')],
            //     use: [
            //         {
            //             loader: 'style-loader'
            //             // options: { sourceMap }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 // sourceMap,
            //                 // modules,
            //                 // 生产环境使用短类名，开发环境使用详细类名
            //                 url: true,
            //                 import: true,
            //                 esModule: true,
            //                 modules: {
            //                     compileType: 'module',
            //                 mode: 'local',
            //                 auto: true,
            //                 exportGlobals: true,
            //                 localIdentName: '[path][name]__[local]--[hash:base64:5]',
            //                 localIdentContext: path.resolve(__dirname, 'src'),
            //                 localIdentHashPrefix: 'my-custom-hash',
            //                 namedExport: true,
            //                 exportLocalsConvention: 'camelCase',
            //                 exportOnlyLocals: false,
            //                 }
            //             }
            //         },
            //         {
            //             loader: 'less-loader',
            //             options: {
            //                 webpackImporter: false,
            //                 lessOptions: {
            //                     javascriptEnabled: true
            //                 }
            //             }
            //         }
            //     ]
            // },
            {
                test: REGEXP_CSS_LESS,
                // include: [
                //     path.resolve(__dirname, 'node_modules/antd/lib'),
                //     path.resolve(__dirname, 'node_modules/ant-design-pro'),
                //     path.resolve(__dirname, 'node_modules/react-draft-wysiwyg')
                // ],
                use: [
                    {
                        loader: 'style-loader'
                        // options: { sourceMap }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // sourceMap,
                            // modules,
                            // 生产环境使用短类名，开发环境使用详细类名
                            modules: {
                                auto: false,
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            webpackImporter: false,
                            lessOptions: {
                                modifyvars: {
                                    'font-size-base': '13px',
                                    // "primary-color": "#4cc0c1",
                                    'table-padding-vertical': '6px',
                                    'table-padding-horizontal': '6px'
                                },
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: REGEXP_FILE,
                include: path.resolve(__dirname, 'src/assets'),
                use: ['file-loader']
            }
        ]
    },
    // resolve: ALIAS
};
