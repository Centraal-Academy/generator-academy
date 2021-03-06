/* eslint-env mocha */
const path = require('path')
const helpers = require('yeoman-test')
const assert = require('yeoman-assert')

describe('app:react', function () {
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../../../generators/react'))
    .inTmpDir()
    .withArguments(['react-app', 'react-sample'])
  })

  it('generates a react project', function () {
    assert.file('package.json')
    assert.file('src/index.html')
    assert.file('src/index.js')
    assert.file('webpack.common.js')
    assert.file('webpack.dev.config.js')
    assert.file('webpack.config.js')
  })
})
