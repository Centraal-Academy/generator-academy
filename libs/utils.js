const propertiesPresentInObject = (object, ...properties) =>
  properties.filter(property => typeof object[property] !== 'undefined')

const getPropertiesFromObject = (object, ...properties) =>
  properties.map(property => object[property])
  .filter(property => typeof property !== 'undefined')

function selectKeysFromObject (object, ...keys) {
  const copyObject = {}
  keys.forEach(key => {
    copyObject[key] = object[key]
  })
  return copyObject
}
function writeTemplate (templatePath, destinationPath, data) {
  this.fs.copyTpl(
    this.templatePath(templatePath),
    this.destinationPath(destinationPath),
    data
  )
}

function objectToMap (object, filter) {
  const map = new Map()
  for (let key in object) {
    if (filter) {
      if (filter(object[key])) {
        map.set(key, object[key])
      }
      continue
    }
    map.set(key, object[key])
  }
  return map
}

function mapKeysToArray (map, ...keys) {
  return keys.map(key => map.get(key))
}

function leftJoinArrays (arrayA, arrayB) {
  return arrayA.filter((element) => arrayB.indexOf(element) === -1)
}

module.exports = {
  getPropertiesFromObject,
  leftJoinArrays,
  mapKeysToArray,
  objectToMap,
  propertiesPresentInObject,
  selectKeysFromObject,
  writeTemplate
}
