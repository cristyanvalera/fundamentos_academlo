const {
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  exponenciacion,
  postIncremento,
  preIncremento,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  valorDeX,
  valorDeY,
  valorDeZ,
  valorDeX2
} = require('../03-operadores-basicos/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de los Operadores Básicos', function () {
  test('Suma: 25 + ? === 33', function () {
    expect(suma).toEqual(true)
  })

  test('Resta: ? - 12 === 21', function () {
    expect(resta).toEqual(true)
  })

  test('Multiplicación: 8 * ? === 64', function () {
    expect(multiplicacion).toEqual(true)
  })

  test('División: ? / 5 === 5', function () {
    expect(division).toEqual(true)
  })

  test('Módulo: 23 % ? === 2', function () {
    expect(modulo).toEqual(true)
  })

  test('Exponenciación: 3 ** ? === 27', function () {
    expect(exponenciacion).toEqual(true)
  })

  test('Post Incremento: incremento++ === ?', function () {
    expect(postIncremento).toEqual(true)
  })

  test('Pre Incremento: ++incremento === ?', function () {
    expect(preIncremento).toEqual(true)
  })

  test('¿Cuál es el resultado? 5 + 3 * 2', function () {
    expect(example1).toEqual(true)
  })

  test('¿Cuál es el resultado? 3 * 2 / 2', function () {
    expect(example2).toEqual(true)
  })

  test('¿Cuál es el resultado? 3 * (10 - 5) / 2', function () {
    expect(example3).toEqual(true)
  })

  test('¿Cuál es el resultado? "1" + 2 + 2', function () {
    expect(example4).toEqual(true)
  })

  test('¿Cuál es el resultado? 1 + 2 + "2"', function () {
    expect(example5).toEqual(true)
  })

  test('¿Cuál es el resultado? 1 + +"2" + "2"', function () {
    expect(example6).toEqual(true)
  })

  test('¿Cuál es el resultado? "b" + "a" + +"a" + "a"', function () {
    expect(example7).toEqual(true)
  })

  test('¿Cuál es el valor de x?', function () {
    expect(valorDeX).toEqual(true)
  })

  test('¿Cuál es el valor de y?', function () {
    expect(valorDeY).toEqual(true)
  })

  test('¿Cuál es el valor de z?', function () {
    expect(valorDeZ).toEqual(true)
  })

  test('¿Cuál es el valor de x2?', function () {
    expect(valorDeX2).toEqual(true)
  })
})
