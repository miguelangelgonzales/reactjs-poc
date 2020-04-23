const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function (env, argv) {
  const plugins_dist = [
    new HtmlWebpackPlugin({ template: "./src/index.html"}), 
  argv.FORCE_CLEAN && new CleanWebpackPlugin(),
].filter(Boolean);
  return {
  output: {
    filename: "bundle-[contenthash].js"
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.(css)$/i,
            use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: plugins_dist,
  }
};