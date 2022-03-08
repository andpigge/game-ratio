const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");

const filename = "[name].[contenthash]";
const loader = MiniCssExtractPlugin.loader;

module.exports = {
  mode: "development",
  context: resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".ts", ".css"],
    alias: {
      "@": resolve(__dirname, "src"),
      "@@": resolve(__dirname, "public"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  entry: { main: "./index.ts" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: `${filename}.js`,
  },
  devServer: {
    static: resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `${filename}.css` }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [
          loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
    ],
  },
};
