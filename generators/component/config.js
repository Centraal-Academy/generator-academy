module.exports = {
  metadata: {
    name: {
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'name',
        message: 'Component\'s name',
        default: 'my-component'
      }
    },
    path: {
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'input',
        name: 'path',
        message: 'Component\'s path',
        default: 'components'
      }
    },
    type: {
      config: {
        type: String,
        required: false
      },
      question: {
        type: 'list',
        name: 'type',
        message: 'Type of component',
        choices: ['react'],
        default: 'react'
      }
    }
  }
}
