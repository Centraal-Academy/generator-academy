const Generator = require('yeoman-generator')
const utils = require('../../libs/utils')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('type', { type: String, required: false })
    this.argument('appname', { type: String, required: false })
    this.argument('description', { type: String, required: false })
  }

  prompting () {
    const argumentList = utils.getPropertiesFromObject(
      this.options,
      'appname',
      'description'
    )

    if (this.options.type) {
      this.composeWith(
        require.resolve(`../${this.options.type}`),
        {arguments: argumentList}
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
          require.resolve(`../${answers.type}`),
          {arguments: argumentList})
      })
  }
}
