/**
 * 开发环境
 */
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    //录入index文件，指向的是根目录index文件
    index: "./src/index.js"
  },

  output: {
    /**
     * 执行编译--输出dist文件
     * @path 打包输出dis文件夹
     * @filename 打包输出dist文件夹下js文件夹 name可更改为指定文件名称 chunkHash为哈希值 增加目的为上线时根据哈希不同更新代码 清除缓存
     */
    path: path.resolve(process.cwd(), "dist"),
    filename: "js/[name][chunkHash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", {
          loader: 'less-loader',
          options:  { javascriptEnabled: true }
      }]
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", {
          loader: 'less-loader',
          options:  { javascriptEnabled: true }
      }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 80,
          name: "static/images/[name].[ext]",
          publicPath: "/"
        }
      },
      {
        test: /\.js|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    /**
     * 打包输出index.html文件
     * @title 配置html文件标题
     * @template 配置输出路径
     */
    new HtmlWebpackPlugin({
      title: "my webpack",
      template: "public/index.html"
      // filename:'index.html'
    }),
    /**
     * 打包输出index.html文件
     * @filename 输出css文件 name后边可跟哈希值
     * @
     */
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  /**
   * 启动服务 配置端口
   * @port 端口配置
   * @open 启动是否自动打开浏览器
   * @historyApiFallback 使用H5 history路由模式
   *  具体请参考 https://webpack.js.org/configuration/dev-server/#devserverproxy
   */
  devServer: {
    port: 3004,
    // host:'192.168.1.212',
    open: true,
    contentBase:path.resolve(__dirname,'../src/assets'),
    historyApiFallback: true,
    proxy: {
      // "/api": {
      //   target: "域名",
      //   changeOrigin: true,
      //   pathRewrite: { "^/api": "" }
      // }
    }
  }
};
