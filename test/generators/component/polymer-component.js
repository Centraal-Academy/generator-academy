/* eslint-env mocha */
const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('test component generator - polymer', function () {
  const loadGenerator = () => helpers
    .run(path.join(__dirname, '../../../generators/component'))
    .inTmpDir()

  describe('test component generator with polymer inside src', function () {
    before(() =>
      loadGenerator()
        .withArguments(['awesome-component'])
        .withOptions({ 'without-base-path': false, path: '.', type: 'polymer' })
    )

    it('generates Awesome Component', function () {
      assert.file('src/awesome-component/awesome-component.js')
      assert.fileContent('src/awesome-component/awesome-component.js', 'class AwesomeComponent')
    })
  })
})
