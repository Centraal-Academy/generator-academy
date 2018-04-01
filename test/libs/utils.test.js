/* eslint-env mocha */
const utils = require('../../libs/utils')
const configArgumentFixture = require('../fixtures/react-config')
const expect = require('chai').expect

describe('test utils suite', function () {
  describe('test getPropertiesFromObject method', function () {
    it('should return array with values of appname and description properties in object', function () {
      const object = {
        appname: 'appname',
        description: 'description'
      }
      const result = utils.getPropertiesFromObject(object, 'appname', 'description')
      expect(result).to.eql(['appname', 'description'])
    })

    it('should return array with name properties only if is present in the object', function () {
      const object = {
        appname: 'react-app'
      }
      const result = utils.getPropertiesFromObject(object, 'appname', 'description')
      expect(result).to.eql(['react-app'])
    })
  })
  describe('test objectToMap method', function () {
    it('should return a map with appname key if is in the object', function () {
      const map = utils.objectToMap(configArgumentFixture.metadata)
      const hasKey = map.has('appname')
      expect(hasKey).to.eq(true)
    })

    it('should return a map without atributtes if the filter return false evaluating attribute', function () {
      const filterOnlyArgument = (property) => property.type === 'argument'
      const object = { appname: { type: 'argument' }, path: { type: 'option' } }
      const map = utils.objectToMap(object, filterOnlyArgument)
      const hasKey = map.has('object')
      expect(hasKey).to.eq(false)
    })
  })

  describe('test mapPropertiesToArray method', function () {
    it('should return a array with keys specified in parameters', function () {
      const map = new Map()
      map.set('key', 'value')
      const array = utils.mapKeysToArray(map, 'key')
      expect(array).to.eql(['value'])
    })
  })

  describe('test leftJoinArrays method', function () {
    it('should return a array with elemenst specified in first parameter but not in second', function () {
      const arrayA = ['a', 'b', 'c']
      const arrayB = ['b']
      const result = utils.leftJoinArrays(arrayA, arrayB)
      expect(result).to.have.lengthOf(2)
    })
  })

  describe('test propertiesPresentInObject method', function () {
    it('should return a array with keys if those are present in object', function () {
      const object = { a: 'a', b: 'b', c: 'c' }
      const result = utils.propertiesPresentInObject(object, 'a', 'b')
      expect(result).to.have.lengthOf(2)
    })
  })
})
