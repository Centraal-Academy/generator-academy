/* eslint-env mocha */
const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('test component generator', function () {
  const loadGenerator = () => helpers
    .run(path.join(__dirname, '../../../generators/component'))
    .inTmpDir()

  describe('test component generator inside src', function () {
    before(() => {
      return loadGenerator()
        .withArguments(['awesome-component'])
        .withOptions({ 'without-base-path': false, path: '.' })
    })

    it('generates Awesome Component', function () {
      assert.file('src/AwesomeComponent/index.js')
      assert.fileContent('src/AwesomeComponent/index.js', 'class AwesomeComponent')
    })
  })

  describe('test component generator inside src/pages', function () {
    before(() => {
      return loadGenerator()
      .withArguments(['awesome-component'])
      .withOptions({ 'without-base-path': false, path: 'pages' })
    })

    it('generates a react component', function () {
      assert.file('src/pages/AwesomeComponent/index.js')
      assert.fileContent('src/pages/AwesomeComponent/index.js', 'class AwesomeComponent')
    })
  })

  describe('test component generator inside pages without basepath', function () {
    before(() => {
      return loadGenerator()
      .withArguments(['awesome-component'])
      .withOptions({ 'without-base-path': true, path: 'pages' })
    })

    it('generates a react component', function () {
      assert.file('pages/AwesomeComponent/index.js')
      assert.fileContent('pages/AwesomeComponent/index.js', 'class AwesomeComponent')
    })
  })

  describe('test component generator react', function () {
    before(() => {
      return loadGenerator()
        .withArguments(['awesome-component'])
        .withOptions({ function: true, path: '.' })
        .withPrompts({ type: 'react' })
    })

    it('generates a function with Awesome Component ', function () {
      assert.file('src/AwesomeComponent/index.js')
      assert.fileContent('src/AwesomeComponent/index.js', 'function AwesomeComponent')
    })
  })
})
