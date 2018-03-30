const Generator = require('yeoman-generator')
const mkdirp = require('mkdirp')
const path = require('path')
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
  }

  initializing () {
    this.log('starting react', this.options.appname)
  }

  configuring () {
    if (path.basename(this.destinationPath()) !== this.options.appname) {
      mkdirp(this.options.appname)
      this.destinationRoot(this.destinationPath(this.options.appname))
    }
    this.config.defaults({ 'app-type': 'react' })
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
    const data = selectKeysFromObject(this.options, ...this.argumentsRequired)
    writeTemplate.call(this, 'package', 'package.json', data)
    writeTemplate.call(this, 'src/index-html', 'src/index.html', data)
    writeTemplate.call(this, 'src/index-js', 'src/index.js', data)
    this.fs.copy(this.templatePath('webpack/'), this.destinationPath('./'))
  }

  install () {
    this.yarnInstall(config.dependencies.production)
      .then(() => this.yarnInstall(config.dependencies.development, { 'dev': true }))
  }

  end () {
    this.log('This is over')
  }
}
