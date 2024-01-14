const {
  retornandoUnValor,
  nombreCompleto,
  sumarNumeros,
  elAreaDeUnTriangulo,
  elPerimetroDeUnCuadrado,
  saludoConParametros,
  convercionDeMonedas,
  respuesta1,
  respuesta2,
  respuesta3,
  respuesta4,
  respuesta5
} = require('../04-funciones/test/task.js')

function normalizar (str) {
  return str.toLowerCase().trim()
}

/* eslint-disable no-undef */
describe('🚨 Test de Funciones', function () {
  test('Debes retornar un valor', function () {
    expect(retornandoUnValor()).toEqual('¡Hola Mundo!')
  })

  test('Retornar el nombre completo de una persona', function () {
    expect(nombreCompleto('Jesús', 'Fernández')).toEqual('Jesús Fernández')
    expect(nombreCompleto('Brayan', 'Quiroz')).toEqual('Brayan Quiroz')
  })

  test('Sumar dos números y retornar el resultado', function () {
    expect(sumarNumeros(5, 7)).toEqual(12)
    expect(sumarNumeros(3, 2)).toEqual(5)
  })

  test('Retornar el área de un triángulo', function () {
    expect(elAreaDeUnTriangulo(5, 7)).toEqual(17.5)
    expect(elAreaDeUnTriangulo(3, 2)).toEqual(3)
  })

  test('Retornar el perímetro de un cuadrado', function () {
    expect(elPerimetroDeUnCuadrado(5)).toEqual(20)
    expect(elPerimetroDeUnCuadrado(3)).toEqual(12)
  })

  test('Retornar saludo con los parámetros', function () {
    expect(saludoConParametros('Fernando', 23, 'Lima')).toEqual('Hola, soy Fernando, tengo 23 años y soy de Lima.')
    expect(saludoConParametros('Juan', 30, 'Arequipa')).toEqual('Hola, soy Juan, tengo 30 años y soy de Arequipa.')
  })

  test('Convertir la cantidad ingresada a dólares', function () {
    const dolar = 16.69
    const quanty1 = 100
    const quanty2 = 50

    expect(convercionDeMonedas(quanty1, dolar)).toEqual(quanty1 / dolar)
    expect(convercionDeMonedas(quanty2, dolar)).toEqual(quanty2 / dolar)
  })

  test('¿Cuáles son algunas de las principales características de una función?', function () {
    expect(normalizar(respuesta1)).toMatch(/^.*(reutilizable|reutilizables|resolver|tarea|tareas|problema|problemas).*$/)
  })

  test('¿Cómo se llaman los valores pasados dentro de los parentesis de una función?', function () {
    expect(normalizar(respuesta2)).toMatch(/^.*(parámetros|parametros).*$/)
  })

  test('¿Como se llaman los datos que devuelve una función?', function () {
    expect(normalizar(respuesta3)).toMatch(/^.*(valores de retorno|valor retornado).*$/)
  })

  test('¿Cómo se llaman los valores que se pasan en la llamada a la función?', function () {
    expect(normalizar(respuesta4)).toMatch(/^.*(argumento|argumentos).*$/)
  })

  test('¿Cuál es el valor que devuelve una función si no tiene la palabra reservada \'return\'?', function () {
    expect(normalizar(respuesta5)).toMatch(/^.*(undefined|indefinido).*$/)
  })
})
