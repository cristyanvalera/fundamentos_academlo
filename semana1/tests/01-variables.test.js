const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6
} = require('../01-variables/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Variables', function () {
  it('1. ¿Es correcto?: let 1erTema', function () {
    expect(example1).toBe(false)
  })

  it('2. ¿Es correcto?: const = nombreDeUsuario', function () {
    expect(example2).toBe(false)
  })

  it('3. ¿Es correcto?: const $mi_variable$', function () {
    expect(example3).toBe(true)
  })

  it('4. ¿Es correcto?: letEdad', function () {
    expect(example4).toBe(false)
  })

  it('5. ¿Es correcto?: const class', function () {
    expect(example5).toBe(false)
  })

  it('6. ¿Es correcto?: let _nombre', function () {
    expect(example6).toBe(true)
  })
})
