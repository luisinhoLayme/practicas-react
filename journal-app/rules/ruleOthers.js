
const ruleOthers = {
  test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'static/fonts/[name][hash][ext][query]'
  }
}

module.exports = ruleOthers
