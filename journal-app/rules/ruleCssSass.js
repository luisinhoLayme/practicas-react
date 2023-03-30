const ruleCssSass = {
  test: /\.(css|scss$)/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: "sass-loader",
      options: {
        // Prefer `dart-sass`
        implementation: require.resolve("sass"),
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              {
                // Options
                browsers: "last 2 versions",
              },
            ],
          ],
        },
      },
    },
  ]
}
module.exports = ruleCssSass
