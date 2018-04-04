const Generator = require('yeoman-generator')
const path = require('path')
const upperCamelCase = require('uppercamelcase')
const dashify = require('dashify')
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
    const filterArgument = (object) => object.type === 'argument'
    this.mapArguments = objectToMap(config.metadata, filterArgument)
    this.mapArguments.forEach((argument, key) => this.argument(key, argument.config))
    const filterNoArgument = (object) => object.type !== 'argument'
    objectToMap(config.metadata, filterNoArgument)
      .forEach((option, key) => this.option(key, option.config))
  }

  initializing () {
    this.log('generating component')
  }

  configuring () {
    this.options.type = this.options.type ? this.options.type : (this.config.get('app-type') || 'react')
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
    let basePath

    if (this.options['without-base-path']) {
      basePath = '.'
    } else {
      basePath = path.basename(this.destinationPath()) === 'src' ? '.' : 'src'
    }

    switch (this.options.type) {
      case 'react':
        let typeComponent = this.options.function ? 'function' : 'class'
        writeTemplate.call(this, `react/component-${typeComponent}`,
          `${basePath}/${this.options.path}/${this.options.name}/index.js`, data)
        break
      case 'polymer':
        data.dashName = dashify(data.name)
        writeTemplate.call(this, `polymer/component`,
        `${basePath}/${this.options.path}/${data.dashName}/${data.dashName}.js`, data)
        break
      default:
        this.log('type unknow')
    }
  }

  end () {
    this.log(`Component ${this.options.name} created`)
  }
}
