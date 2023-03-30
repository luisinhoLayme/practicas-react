
const ruleImages = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'static/images/[name][hash][ext][query]'
  }
}

module.exports = ruleImages
