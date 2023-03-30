
const ruleJs = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {

      plugins: ["@babel/plugin-transform-runtime"],
      presets: [
        "@babel/preset-env",
        [
          "@babel/preset-react",
          {
            runtime: 'automatic' // 'classic'
          }
        ]
      ]
    }
  }
}

module.exports = ruleJs
