const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  validarNumero,
  numeroRandom,
  redondear
} = require('../09-numeros/test/task.js')

describe('🚨 Test de Números', function () {
  test('Notación exponencial de: 100000 => ??', function () {
    expect(example1).toBe(100000)
  })

  test('Notación exponencial de: 85000000000 => ??', function () {
    expect(example2).toBe(85000000000)
  })

  test('Notación exponencial de: 0.0025 => ??', function () {
    expect(example3).toBe(0.0025)
  })

  test('Notación exponencial de: 0.000001 => ??', function () {
    expect(example4).toBe(0.000001)
  })

  test('Devolver un entero 256', function () {
    expect(example5).toBe(256)
  })

  test('Math.ceil(6.15) === ??', function () {
    expect(example6).toBe(true)
  })

  test('Math.round(85.35) === ??', function () {
    expect(example7).toBe(true)
  })

  test('Math.floor(4.99) === ??', function () {
    expect(example8).toBe(true)
  })

  test('Math.round(10.5) === ??', function () {
    expect(example9).toBe(true)
  })

  test('Math.ceil(12.72) === ??', function () {
    expect(example10).toBe(true)
  })

  test('Math.floor(0.9) === ??', function () {
    expect(example11).toBe(true)
  })

  test('¿Es un NaN?', function () {
    expect(validarNumero(1)).toBe(false)
    expect(validarNumero(NaN)).toBe(true)
  })

  test('Número random', function () {
    expect(numeroRandom(1, 10)).toBeGreaterThanOrEqual(1)
    expect(numeroRandom(1, 10)).toBeLessThanOrEqual(10)
  })

  test('Redondear', function () {
    expect(redondear(1.23456, 2)).toBe(1.23)
    expect(redondear(1.23456, 3)).toBe(1.235)
    expect(redondear(1.23456, 4)).toBe(1.2346)
  })
})
