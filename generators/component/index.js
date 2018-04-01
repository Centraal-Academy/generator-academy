const Generator = require('yeoman-generator')
const path = require('path')
const upperCamelCase = require('uppercamelcase')
const config = require('./config')
const {
  writeTemplate,
  objectToMap,
  propertiesPresentInObject,
  leftJoinArrays,
  selectKeysFromObject
} = require('../../libs/utils')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.mapArguments = objectToMap(config.metadata)
    this.mapArguments.forEach((argument, key) => this.argument(key, argument.config))
    this.option('function')
  }

  initializing () {
    this.log('generating component')
  }

  configuring () {
    this.options.type = this.options.type ? this.options.type : this.config.get('app-type')
  }

  prompting () {
    this.argumentsRequired = Array.from(this.mapArguments.keys())
    const argumentsPresent = propertiesPresentInObject(this.options, ...this.argumentsRequired)
    const argumentsMissed = leftJoinArrays(this.argumentsRequired, argumentsPresent)

    if (argumentsMissed.length) {
      const questions = argumentsMissed.map(key => this.mapArguments.get(key).question)
      return this.prompt(questions)
        .then((answers) => {
          argumentsMissed.forEach(key => {
            this.options[key] = answers[key]
          })
        })
    } else {
      return true
    }
  }

  writing () {
    this.options.name = upperCamelCase(this.options.name)
    const data = selectKeysFromObject(this.options, ...this.argumentsRequired)
    this.log('running path', this.destinationPath(), path.basename(this.destinationPath()))
    const pathBase = path.basename(this.destinationPath()) === 'src' ? '.' : 'src'
    switch (data.type) {
      case 'react':
        let typeComponent = this.options.function ? 'function' : 'class'
        writeTemplate.call(this, `react/component-${typeComponent}`, `${pathBase}/${this.options.path}/${this.options.name}/index.js`, data)
        break
      default:
        this.log('type unknow')
    }
  }

  end () {
    this.log(`Component ${this.options.name} created`)
  }
}
