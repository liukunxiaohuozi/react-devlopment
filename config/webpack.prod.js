/**
 * 生产环境
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
  /**
   * @MiniCssExtractPlugin 用于生产环境打包css文件输出
   */
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
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
    new HtmlWebpackPlugin({
      title: "my webpack",
      template: "public/index.html"
      // filename:'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
