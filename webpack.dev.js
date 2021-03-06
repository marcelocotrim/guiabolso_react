const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
  output: {
    path: __dirname,
    filename: './docs/[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './src/components',
    ],
    alias: {
      app: 'index.jsx',
      actions: 'src/actions/index',
      reducers: 'src/reducers/index',
      store: 'src/store/index',
      routes: 'src/routes/index',
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            },
          }
        ],
        exclude: /()node_modules|bower_components/
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map',
};
