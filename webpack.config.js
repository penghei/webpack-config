const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {//单页面应用的话一般来说一个入口就够了
    app: "./src/index.js",
    print: "./src/print.js",
  }, //入口
  devtool: "inline-source-map",//source-map可以指向错误发生的具体位置
  devServer: {//小服务器,可以实现热重载
    static: "./dist",//这里文档有错误,记得使用static而不是contentBase
  },
  plugins: [//插件
    new CleanWebpackPlugin(),//清除dist文件夹下除需要和生成的文件;这里文档有错,不需要参数,上面导入也不是默认导入
    new HtmlWebpackPlugin({//生成html的插件
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name].bundle.js", //编译的输出文件
    path: path.resolve(__dirname, "dist"), //输出位置,__dirname是当前目录名;后面参数是文件夹名
    //path.resolve将path解析为绝对路径
  },
  mode: "development", //不指定会有警告
  module: {
    //引入模块
    rules: [
      //设置规则
      {
        test: /\.css$/i, //通过正则找到后缀为.css的文件
        use: ["style-loader", "css-loader"], //使用csslodader加载css;loader按照顺序依次调用
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, //字体文件
        use: ["file-loader"],
      },
      //后面的类似,就不再写了
    ],
  },
};
