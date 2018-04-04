/* eslint-env mocha */
const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('app:polymer', function () {
  before(() =>
    helpers.run(path.join(__dirname, '../../../generators/polymer'))
      .inTmpDir()
      .withArguments(['polymer-app', 'polymer-sample'])
  )

  it('generates a polymer project', function () {
    assert.file('package.json')
    assert.file('src/index.html')
    assert.file('src/index.js')
    assert.file('webpack.common.js')
    assert.file('webpack.dev.config.js')
    assert.file('webpack.config.js')
  })

  it('package has appname', function () {
    assert.fileContent('package.json', '"name": "polymer-app"')
  })

  it('index.js has AppElement class', function () {
    assert.fileContent('src/index.js', 'class AppElement')
  })
})
