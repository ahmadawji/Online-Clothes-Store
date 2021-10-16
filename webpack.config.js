var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "",
    filename: "main.js",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",

  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "/dist"),
    },
    port: 1239,
    compress: true,
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    open: true,
  },

  module: {
    rules: [{
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true, //will be true in production mode
        },
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }

      },
      {
        test: /\.css$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: './images/[hash][ext][query]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: './fonts/[hash][ext][query]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
};