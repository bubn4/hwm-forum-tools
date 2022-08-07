const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const dev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'hwm-forum-tools.user.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '',
    },
    host: '127.0.0.1',
    allowedHosts: 'all'
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: 'hwm-forum-tools - heroeswm.ru',
        author: 'Бубна',
        match: 'https://www.heroeswm.ru/forum_messages.php*',
        namespace: 'bubna',
        grant: 'none',
        version: dev ? `[version]-build.[buildNo]` : `[version]`
      }
    })
  ],
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
}
