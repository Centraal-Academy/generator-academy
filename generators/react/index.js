const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('appname', { type: String, required: false })
    this.argument('description', { type: String, required: false })
  }

  initializing () {
    this.log('starting react')
  }
}
