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
  }
}
