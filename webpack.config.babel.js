const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const dir = path.resolve(__dirname) + '/app';
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = (env, argv) => ({
  //   mode: 'development',
  entry: {
    app: dir + '/src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: './bundles/',
    path: dir + '/../public/bundles',
  },
  watchOptions: {
    poll: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_(.*)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        components: {
          test: /^[\\/]src[\\/]components[\\/]/,
          name: 'components',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    edge: "16",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: dir + '/src/index.html', to: dir + '/../public/index.html' },
      { from: dir + '/assets', to: dir + '/../public/assets' },
    ]),
    new HtmlWebpackPlugin({
      title: 'Page Title',
      filename: 'index.html',
      template: './app/src/index.html',
      scriptLoading: 'defer',
    }),
  ],
})
