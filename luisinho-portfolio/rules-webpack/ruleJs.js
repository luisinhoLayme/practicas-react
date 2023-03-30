
const ruleJs = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
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
