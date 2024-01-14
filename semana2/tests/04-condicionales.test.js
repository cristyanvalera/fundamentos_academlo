const {
  positivoNegativo,
  asignarCalificacion,
  iniciarSesion,
  carritoDeCompras,
  losDeLaMitad,
  dobleONada,
  soloMinusculas,
  parOImpar,
  pizzaNapolis
} = require('../10-condiconales/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Condicionales', function () {
  it('Positivo o Negativo', function () {
    expect(positivoNegativo(2)).toBe('positivo')
    expect(positivoNegativo(-2)).toBe('negativo')
    expect(positivoNegativo(0)).toBe('cero')
  })

  it('Calificaciones', function () {
    expect(asignarCalificacion(0)).toBe('Insuficiente')
    expect(asignarCalificacion(6)).toBe('Suficiente')
    expect(asignarCalificacion(7)).toBe('Bien')
    expect(asignarCalificacion(9)).toBe('Excelente')
    expect(asignarCalificacion(10)).toBe('Excelente')
    expect(asignarCalificacion(11)).toBe('Nota inválida')
  })

  it('Inicio de sesión', function () {
    expect(iniciarSesion('admin', '12345')).toBe('Bienvenido admin')
    expect(iniciarSesion(null, '12345')).toBe('Debes ingresar tu usuario')
    expect(iniciarSesion('admin', null)).toBe('Debes ingresar tu contraseña')
    expect(iniciarSesion('admin', '1234')).toBe('Contraseña incorrecta')
    expect(iniciarSesion('pepe', '12345')).toBe('Usuario incorrecto')
  })

  it('Agrega al carrito', function () {
    const expected = { manzanas: 1 }
    const expected2 = { manzanas: 2 }
    const expected3 = { manzanas: 1, peras: 2 }

    expect(carritoDeCompras('manzanas', {})).toEqual(expected)
    expect(carritoDeCompras('manzanas', { manzanas: 1 })).toEqual(expected2)
    expect(carritoDeCompras('peras', { manzanas: 1, peras: 1 })).toEqual(expected3)
  })

  it('Los de la mitad', function () {
    expect(losDeLaMitad([1, 2, 3, 4, 5, 6])).toEqual([3, 4])
    expect(losDeLaMitad([1, 2, 3, 4, 5])).toEqual(3)
  })

  it('Doble o nada', function () {
    expect(dobleONada(8)).toBe(16)
    expect(dobleONada(11)).toBe(11)
    expect(dobleONada(10)).toBe(20)
  })

  it('Solo minusculas', function () {
    expect(soloMinusculas('Hola mundo')).toBe('Hay mayúsculas')
    expect(soloMinusculas('hola mundo')).toBe('Todas son minúsculas')
    expect(soloMinusculas('hola Mundo')).toBe('Hay mayúsculas')
  })

  it('Par o impar', function () {
    expect(parOImpar(8)).toBe('8 es par')
    expect(parOImpar(11)).toBe('11 es impar')
    expect(parOImpar(10)).toBe('10 es par')
  })

  it('Pizza Nápolis', function () {
    expect(pizzaNapolis('pepperoni')).toBe('El precio de la pizza pepperoni es de $100')
    expect(pizzaNapolis('veggie')).toBe('No tenemos la pizza veggie')
    expect(pizzaNapolis('cuatro quesos')).toBe('El precio de la pizza cuatro quesos es de $250')
  })
})
