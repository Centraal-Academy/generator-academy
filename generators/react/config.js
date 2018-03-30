module.exports = {
  metadata: {
    appname: {
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'appname',
        message: 'Application name',
        default: 'react-app'
      }
    },
    description: {
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'description',
        message: 'Application description',
        default: 'scaffolding react app'
      }
    }
  },
  dependencies: {
    production: ['react', 'react-dom', 'react-router-dom'],
    development: [
      'babel-core',
      'babel-loader',
      'babel-plugin-transform-object-rest-spread',
      'babel-preset-env',
      'babel-preset-react',
      'css-loader',
      'style-loader',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-merge',
      'html-webpack-plugin',
      'webpack-bundle-analyzer'
    ]
  }
}
