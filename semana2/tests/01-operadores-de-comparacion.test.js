const {
  ejemplo1,
  ejemplo2,
  ejemplo3,
  ejemplo4,
  ejemplo5,
  sonIguales,
  tienenMismaLongitud,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar
} = require('../07-operadores-de-comparacion/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Operadores de Comparación', function () {
  test('18 == "18" ¿Cúal es el resultado?', function () {
    expect(ejemplo1).toBe(true)
  })

  test('true < false ¿Cúal es el resultado?', function () {
    expect(ejemplo2).toBe(false)
  })

  test('null <= 0 ¿Cúal es el resultado?', function () {
    expect(ejemplo3).toBe(true)
  })

  test('"tierna" >= "tierra" ¿Cúal es el resultado?', function () {
    expect(ejemplo4).toBe(false)
  })

  test('0 != "" ¿Cúal es el resultado?', function () {
    expect(ejemplo5).toBe(false)
  })

  test('¿Son iguales?', function () {
    expect(sonIguales(15, 15)).toBe(true)
    expect(sonIguales('25', '25')).toBe(true)
  })

  test('¿Tienen la misma longitud?', function () {
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true)
  })

  test('¿Es menor que 90?', function () {
    expect(menosQueNoventa(15)).toBe(true)
    expect(menosQueNoventa(100)).toBe(false)
  })

  test('¿Es mayor que 50?', function () {
    expect(mayorQueCincuenta(75)).toBe(true)
    expect(mayorQueCincuenta(25)).toBe(false)
  })

  test('¿Es un número par?', function () {
    expect(esPar(4)).toBe(true)
    expect(esPar(5)).toBe(false)
  })

  test('¿Es un número impar?', function () {
    expect(esImpar(4)).toBe(false)
    expect(esImpar(5)).toBe(true)
  })
})
