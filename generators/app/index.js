const Generator = require('yeoman-generator')
const config = require('./config')
const utils = require('../../libs/utils')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.option('type', { type: String, required: false })
    this.argument('appname', { type: String, required: false })
    this.argument('description', { type: String, required: false })
  }

  prompting () {
    const argumentList = utils.getPropertiesFromObject(
      this.options,
      'appname',
      'description'
    )
    const typeMetadata = config.metadata.type
    const type = this.options.type

    const resolve = require.resolve

    if (type && typeMetadata.range.includes(type)) {
      this.composeWith(
        resolve(`../${type}`),
        { arguments: argumentList }
      )
      return true
    }

    return this.prompt([{
      type: 'list',
      name: 'type',
      message: 'What do you wanna use?',
      choices: ['polymer', 'react'],
      default: 'react'
    }])
      .then((answers) => {
        this.composeWith(
          resolve(`../${answers.type}`),
          { arguments: argumentList }
        )
      })
  }
}
