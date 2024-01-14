const {
  obtenerLongitud,
  ultimoCaracter,
  obtenerIndiceDelUltimoEspacio,
  obtenerIndiceDelSegundoEspacio,
  extraeLaPrimeraPalabra,
  reemplazaLaPalabraPorOtra,
  fraseEnMayusculas,
  nombreCompleto,
  enCamelCase
} = require('../06-cadenas/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Cadenas', function () {
  it('Obtener longitud de la cadena', function () {
    expect(obtenerLongitud('Hola')).toEqual(4)
    expect(obtenerLongitud('JavaScript')).toEqual(10)
  })

  it('El último carácter de la cadena', function () {
    expect(ultimoCaracter('Hola')).toEqual('a')
    expect(ultimoCaracter('JavaScript')).toEqual('t')
  })

  it('El índice (posición) del último espacio en blanco', function () {
    expect(obtenerIndiceDelUltimoEspacio('Estoy aprendiendo JavaScript')).toEqual(17)
    expect(obtenerIndiceDelUltimoEspacio('Fundamentos del desarrollo web')).toEqual(26)
  })

  it('El índice del segundo espacio en blanco', function () {
    expect(obtenerIndiceDelSegundoEspacio('Me encanta el módulo de fundamentos')).toEqual(10)
    expect(obtenerIndiceDelSegundoEspacio('JavaScript es tremendo')).toEqual(13)
  })

  it('La primera palabra de la frase', function () {
    expect(extraeLaPrimeraPalabra('Hola mundo')).toEqual('Hola')
    expect(extraeLaPrimeraPalabra('JavaScript es tremendo')).toEqual('JavaScript')
  })

  it('Reemplazar las palabras', function () {
    expect(reemplazaLaPalabraPorOtra('JavaScript es tremendo', 'tremendo', 'genial')).toEqual('JavaScript es genial')
    expect(reemplazaLaPalabraPorOtra('JavaScript es tremendo', 'JavaScript', 'Python')).toEqual('Python es tremendo')
  })

  it('Frase en mayúsculas', function () {
    expect(fraseEnMayusculas('En Academlo soy feliz')).toEqual('EN ACADEMLO SOY FELIZ')
    expect(fraseEnMayusculas('JavaScript es tremendo')).toEqual('JAVASCRIPT ES TREMENDO')
  })

  it('Nombre completo', function () {
    expect(nombreCompleto('Ada', 'Lovelace')).toEqual('Ada Lovelace')
    expect(nombreCompleto('Alan', 'Turing')).toEqual('Alan Turing')
  })

  it('La frase en camelCase', function () {
    const expected = 'miNombreEsDiego'
    const expected2 = 'miNombreEsLaura'

    expect(enCamelCase('Mi nombre es Diego')).toEqual(expected)
    expect(enCamelCase('Mi nombre es Laura')).toEqual(expected2)
  })
})
