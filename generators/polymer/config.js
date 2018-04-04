module.exports = {
  metadata: {
    appname: {
      type: 'argument',
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'appname',
        message: 'Application name',
        default: 'polymer-app'
      }
    },
    description: {
      type: 'argument',
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'description',
        message: 'Application description',
        default: 'Project polymer scaffolding'
      }
    }
  },
  dependencies: {
    production: ['@polymer/polymer', '@webcomponents/webcomponentsjs'],
    development: [
      'babel-core',
      'babel-loader',
      'babel-plugin-transform-object-rest-spread',
      'babel-preset-env',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-merge',
      'html-webpack-plugin',
      'webpack-bundle-analyzer'
    ]
  }
}
