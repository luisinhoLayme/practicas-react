const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// rules
const ruleCssSass = require('./rules-webpack/ruleCssSass');
const ruleJs = require('./rules-webpack/ruleJs');
const ruleImages = require('./rules-webpack/ruleImages');
const ruleOthers = require('./rules-webpack/ruleOthers');


const rules = [ ruleJs, ruleCssSass, ruleImages, ruleOthers ]


module.exports = (env, { mode }) => {
  const isProduction = mode === 'production'
  return {
    // entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction
        ? '[name][contenthash].js'
        : 'main.js',
      clean: true,
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true
    },
    module: { rules },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html',
        inject: 'body',
        scriptLoading: 'module',
        publicPath: '/'
      }),
      !isProduction && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
  }
}
