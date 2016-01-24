var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry:{
        "index" : [path.resolve(__dirname, 'src/js/index/init.js')]
    },
    output: {
        path: path.join(__dirname,'build/js'),
        publicPath: "js/",
        filename: '[name].js'
    },
    module: {
        loaders: [{
          test: /\.(png|jpg|gif)$/,
          loader: 'url?limit=125000'
        },{
          test: /\.css$/, // Only .css files
          loader: 'style-loader!css-loader' // Run both loaders
        },{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader!jsx-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
        }]
    },
    resolve: {
        //配置别名，在项目中可缩减引用路径
        alias: {
            jquery:  "../../bower_components/jquery/dist/jquery.min.js",
            react: "../../bower_components/react/react.js"
        }
    },
    plugins: [
        //提供全局的变量，在模块中使用无需用require引入
        /*new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            // nie: "nie"
        }),*/
        //将公共代码抽离出来合并为一个文件
        //new CommonsChunkPlugin('common.js'),
        //js文件的压缩
        /*new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            //favicon:'./src/img/favicon.ico', //favicon路径
            filename:'../index.html',    //生成的html存放路径，相对于 path
            template:'./src/index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
               }
         })
    ]
};

module.exports = config;
