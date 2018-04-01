module.exports = {
  metadata: {
    function: {
      type: 'option',
      config: {
        default: false,
        type: Boolean,
        required: false
      }
    },
    name: {
      type: 'argument',
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
    'without-base-path': {
      type: 'option',
      config: {
        default: false,
        type: Boolean,
        required: false
      }
    },
    path: {
      type: 'option',
      config: {
        default: 'components',
        type: String,
        required: false
      }
    },
    type: {
      type: 'option',
      config: {
        type: String,
        required: false
      }
    }
  }
}
