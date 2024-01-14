const {
  stringType,
  numberType,
  booleanType,
  undefinedType,
  nullType,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6
} = require('../02-tipos-de-datos/test/task.js')

function normalize (str) {
  return str?.toLocaleLowerCase()?.trim()
}

/* eslint-disable no-undef */
describe('🚨 Test de Tipos de Datos', function () {
  test('1. Agrega un valor de tipo "string"', function () {
    expect(typeof stringType).toEqual('string')
  })

  test('2. Agrega un valor de tipo "number"', function () {
    expect(typeof numberType).toEqual('number')
  })

  test('3. Agrega un valor de tipo "boolean"', function () {
    expect(typeof booleanType).toEqual('boolean')
  })

  test('4. Agrega un valor de tipo "undefined"', function () {
    expect(typeof undefinedType).toEqual('undefined')
  })

  test('5. Agrega un valor de tipo "null"', function () {
    expect(typeof nullType).toEqual('object')
  })

  test('6. ¿Que tipo es?: "Hola Mundo"', function () {
    expect(normalize(example1)).toMatch(/^.*(string|cadena|cadena de texto|texto).*$/)
  })

  test('7. ¿Que tipo es?: 52.5984', function () {
    expect(normalize(example2)).toMatch(/^.*(number|número|numero|números|numeros|dígito|digito|dígitos|digitos).*$/)
  })

  test('8. ¿Que tipo es?: true', function () {
    expect(normalize(example3)).toMatch(/^.*(boolean|boleano).*$/)
  })

  test('9. ¿Que tipo es?: null', function () {
    expect(normalize(example4)).toMatch(/^.*(null|nulo|vacío|valor vacío|desconocido|valor desconocido|object|objeto).*$/)
  })

  test('10. ¿Que tipo es?: NaN', function () {
    expect(normalize(example5)).toMatch(/^.*(number|número|numero|números|numeros|dígito|digito|dígitos|digitos).*$/)
  })

  test('11. ¿Que tipo es?: undefined', function () {
    expect(normalize(example6)).toMatch(/^.*(undefined|indefinido|valor no asignado|no asignado).*$/)
  })
})
