const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('type', { type: String, required: true })
  }

  end () {
    this.log('Hasta la vista baby')
  }
}
