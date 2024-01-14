const {
  ejemplo1,
  ejemplo2,
  ejemplo3,
  ejemplo4,
  ejemplo5,
  puedeIngresarAlPais,
  puedeIngresarAlEvento,
  mensajeDeBienvenida
} = require('../08-operadores-logicos/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Operadores Lógicos', function () {
  test('null || false || \'hola\' || 23 || \'string\' || 0', function () {
    expect(ejemplo1).toBe('hola')
  })

  test('0 && false && \'hola\' && 23 && \'string\' && 0', function () {
    expect(ejemplo2).toBe(0)
  })

  test('null || 0 || \'\' || false', function () {
    expect(ejemplo3).toBe(false)
  })

  test('\'0\' && true && 25 && \'null\'', function () {
    expect(ejemplo4).toBe('null')
  })

  test('\'\' || 25 && \'hola\' || true', function () {
    expect(ejemplo5).toBe('hola')
  })

  test('¿Puede ingresar al país?', function () {
    expect(puedeIngresarAlPais(true, true)).toBe(true)
    expect(puedeIngresarAlPais(true, false)).toBe(false)
    expect(puedeIngresarAlPais(false, true)).toBe(false)
    expect(puedeIngresarAlPais(false, false)).toBe(false)
  })

  test('¿Puede ingresar al evento?', function () {
    expect(puedeIngresarAlEvento(18, true)).toBe(true)
    expect(puedeIngresarAlEvento(18, false)).toBe(true)
    expect(puedeIngresarAlEvento(17, true)).toBe(true)
    expect(puedeIngresarAlEvento(17, false)).toBe(false)
  })

  test('Mensaje de bienvenida', function () {
    expect(mensajeDeBienvenida('Juan')).toBe('Bienvenido Juan')
    expect(mensajeDeBienvenida('')).toBe('Bienvenido visitante')
  })
})
