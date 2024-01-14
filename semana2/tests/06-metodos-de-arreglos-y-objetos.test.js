const {
  regresaElUltimoElemento,
  combinaDosArreglos,
  aplanarArreglo,
  odenarDeMayorAmenor,
  agregarElementoSinModificarOriginal,
  eliminarElementoSinModificarOriginal,
  contarCantidadDeArticulos,
  palindromo,
  unirCadenaDeTexto,
  invieteElOrdenDeLaCadena,
  buscarCoincidencias
} = require('../12-metodos-de-arreglos-y-objetos/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Métodos de Arreglos', function () {
  it('El Último Elemento', function () {
    expect(regresaElUltimoElemento([1, 2, 3])).toBe(3)
    expect(regresaElUltimoElemento([1, 2, 3, 4, 5])).toBe(5)
    expect(regresaElUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(9)
  })

  it('Combina Dos Arreglos', function () {
    expect(combinaDosArreglos([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(combinaDosArreglos([1, 2, 3], [4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(combinaDosArreglos([1, 2, 3, 4, 5], [6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Aplanar Arreglo', function () {
    expect(aplanarArreglo([[1, 2], [3, 4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6])
    expect(aplanarArreglo([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(aplanarArreglo([[1, 2, 3, 4, 5], [6, 7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('De Mayor a Menor', function () {
    expect(odenarDeMayorAmenor([1, 3, 2])).toEqual([3, 2, 1])
    expect(odenarDeMayorAmenor([1, 3, 2, 4, 5, 6, 7, 8, 9])).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
    expect(odenarDeMayorAmenor([1, 3, 2, 4, 5, 6, 7, 8, 9, 10])).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })

  it('Agregar Elemento Sin Modificar Original', function () {
    const { nuevoArreglo, arregloOriginal } = agregarElementoSinModificarOriginal([1, 2, 3], 4)
    expect(nuevoArreglo).toEqual([1, 2, 3, 4])
    expect(arregloOriginal).toEqual([1, 2, 3])
  })

  it('Eliminar Elemento Sin Modificar Original', function () {
    const { nuevoArreglo, arregloOriginal } = eliminarElementoSinModificarOriginal([1, 2, 3, 4], 3)
    expect(nuevoArreglo).toEqual([1, 2, 4])
    expect(arregloOriginal).toEqual([1, 2, 3, 4])
  })

  it('Contar Cantidad De Articulos', function () {
    expect(contarCantidadDeArticulos([{ qty: 1 }, { qty: 2 }, { qty: 3 }])).toBe(6)
    expect(contarCantidadDeArticulos([{ qty: 1 }, { qty: 2 }, { qty: 3 }, { qty: 4 }, { qty: 5 }])).toBe(15)
    expect(contarCantidadDeArticulos([{ qty: 1 }, { qty: 2 }, { qty: 3 }, { qty: 4 }, { qty: 5 }, { qty: 6 }, { qty: 7 }, { qty: 8 }, { qty: 9 }])).toBe(45)
  })

  it('Palindromo', function () {
    expect(palindromo('ana')).toBe(true)
    expect(palindromo('anitalavalatina')).toBe(true)
  })

  it('Unir Cadena De Texto', function () {
    expect(unirCadenaDeTexto(['hola', 'mundo'])).toBe('hola mundo')
    expect(unirCadenaDeTexto(['hola', 'mundo', 'cruel'])).toBe('hola mundo cruel')
  })

  it('Inviete El Orden De La Cadena', function () {
    expect(invieteElOrdenDeLaCadena('hola')).toBe('aloh')
    expect(invieteElOrdenDeLaCadena('hola mundo')).toBe('odnum aloh')
  })

  it('Buscar Coincidencias', function () {
    expect(buscarCoincidencias([4, 2, 3], [3, 4, 5])).toEqual([4, 3])
    expect(buscarCoincidencias([6, 8, 2, 5, 3], [2, 5, 9, 8, 1])).toEqual([8, 2, 5])
  })
})
