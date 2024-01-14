const {
  contadorDeVocales,
  rangoDeNumeros,
  sumarNumerosDelArreglo,
  multiplosDeN,
  numeroMasGrande,
  contarColores,
  filtrarPorEdad,
  contarLikesDeUsuarios,
  publicarPosts,
  eliminarProducto,
  buscarPersona,
  contarEstudiantesDeUnBootcamp,
  serieMasVistas,
  estudiantesPorModulo,
  ordenaPorEdad
} = require('../11-bucles/test/task.js')

/* eslint-disable no-undef */
describe('🚨 Test de Bucles', function () {
  it('Contador de vocales', function () {
    expect(contadorDeVocales('Hola Mundo')).toBe(4)
    expect(contadorDeVocales('Me encanta JavaScript')).toBe(7)
    expect(contadorDeVocales('El modulo de fundamentos es genial')).toBe(13)
  })

  it('Rango de números', function () {
    expect(rangoDeNumeros(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(rangoDeNumeros(5, 10)).toEqual([5, 6, 7, 8, 9, 10])
  })

  it('Sumar números del arreglo', function () {
    expect(sumarNumerosDelArreglo([1, 2, 3])).toBe(6)
    expect(sumarNumerosDelArreglo([5, 10, 15])).toBe(30)
  })

  it('Multiplos de N', function () {
    expect(multiplosDeN(20, 100)).toEqual([40, 60, 80])
    expect(multiplosDeN(10, 50)).toEqual([20, 30, 40])
  })

  it('El número más grande', function () {
    expect(numeroMasGrande([15, 2, 35, 26])).toBe(35)
    expect(numeroMasGrande([100, 200, 300, 400])).toBe(400)
  })

  it('Contador de colores', function () {
    const received = ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo']
    const expected = { rojo: 3, azul: 2, verde: 1 }

    const received2 = ['rojo', 'rojo', 'rojo', 'rojo']
    const expected2 = { rojo: 4 }

    expect(contarColores(received)).toEqual(expected)
    expect(contarColores(received2)).toEqual(expected2)
  })

  it('Filtrar por edad, mayor que 20 y menor que 30', function () {
    const received = [
      { nombre: 'Jesús', edad: 19 },
      { nombre: 'Andres', edad: 21 },
      { nombre: 'Brayan', edad: 25 }
    ]

    const expected = [{ nombre: 'Andres', edad: 21 }, { nombre: 'Brayan', edad: 25 }]

    const received2 = [
      { nombre: 'Jesús', edad: 19 },
      { nombre: 'Andres', edad: 21 },
      { nombre: 'Brayan', edad: 25 },
      { nombre: 'Benja', edad: 30 }
    ]
    const expected2 = [{ nombre: 'Andres', edad: 21 }, { nombre: 'Brayan', edad: 25 }]

    expect(filtrarPorEdad(received)).toEqual(expected)
    expect(filtrarPorEdad(received2)).toEqual(expected2)
  })

  it('Contador de likes', function () {
    const received = [
      { nombre: 'John', likes: 2 },
      { nombre: 'Jane', likes: 3 }
    ]
    const received2 = [
      { nombre: 'John', likes: 2 },
      { nombre: 'Jane', likes: 3 },
      { nombre: 'John', likes: 5 }
    ]

    expect(contarLikesDeUsuarios(received)).toEqual(5)
    expect(contarLikesDeUsuarios(received2)).toEqual(10)
  })

  it('Publicar posts', function () {
    const received = [{ titulo: 'Articulo #1', estado: true }]
    const expected = [{ titulo: 'Articulo #1', estado: true }]

    const received2 = [
      { titulo: 'Articulo #1', estado: false },
      { titulo: 'Articulo #2', estado: true }
    ]
    const expected2 = [{ titulo: 'Articulo #2', estado: true }]

    expect(publicarPosts(received)).toEqual(expected)
    expect(publicarPosts(received2)).toEqual(expected2)
  })

  it('Eliminar producto', function () {
    const received = [{ id: 1, nombre: 'Mouse' }, { id: 2, nombre: 'Teclado' }]
    const expected = [{ id: 1, nombre: 'Mouse' }]

    const received2 = [
      { id: 1, nombre: 'Mouse' },
      { id: 2, nombre: 'Teclado' },
      { id: 3, nombre: 'Monitor' }
    ]
    const expected2 = [{ id: 1, nombre: 'Mouse' }, { id: 3, nombre: 'Monitor' }]

    expect(eliminarProducto(received, 2)).toEqual(expected)
    expect(eliminarProducto(received2, 2)).toEqual(expected2)
  })

  it('Buscar persona', function () {
    const received = [
      { nombre: 'Marcos', correo: 'marcos@mail.com' },
      { nombre: 'Luis', correo: 'luis@mail.com' }
    ]
    const email = 'marcos@mail.com'
    const expected = { nombre: 'Marcos', correo: 'marcos@mail.com' }

    const received2 = [
      { nombre: 'Andres', correo: 'andres@mail.com' },
      { nombre: 'Luis', correo: 'luis@mail.com' },
      { nombre: 'Brayan', correo: 'brayan@mail.com' }
    ]
    const email2 = 'luis@mail.com'
    const expected2 = { nombre: 'Luis', correo: 'luis@mail.com' }

    expect(buscarPersona(received, email)).toEqual(expected)
    expect(buscarPersona(received2, email2)).toEqual(expected2)
  })

  it('Contar estudiantes de un bootcamp', function () {
    const received = [
      { nombre: 'Andres', bootcamp_id: 1 },
      { nombre: 'Brayan', bootcamp_id: 2 },
      { nombre: 'Jesús', bootcamp_id: 1 }]

    const received2 = [
      { nombre: 'Jesús', bootcamp_id: 1 },
      { nombre: 'Brayan', bootcamp_id: 1 },
      { nombre: 'Andres', bootcamp_id: 1 }]

    const bootcamps = [
      { id: 1, nombre: 'Academlo' },
      { id: 2, nombre: 'Otros' }
    ]

    const bootcamp = 'Academlo'

    expect(contarEstudiantesDeUnBootcamp(received, bootcamps, bootcamp)).toBe(2)
    expect(contarEstudiantesDeUnBootcamp(received2, bootcamps, bootcamp)).toBe(3)
  })

  it('Serie más vistas', function () {
    const received = {
      'Game of Thrones': 100,
      'Breaking Bad': 150,
      'Stranger Things': 30
    }

    const received2 = {
      'Game of Thrones': 100,
      'Breaking Bad': 150,
      'Stranger Things': 30,
      Dark: 200
    }

    expect(serieMasVistas(received)).toEqual('Breaking Bad')
    expect(serieMasVistas(received2)).toEqual('Dark')
  })

  it('Estudiantes por módulo', function () {
    const received = [
      { nombre: 'Andrea', correo: 'andrea@mail.com', modulo_id: 1 },
      { nombre: 'Diego', correo: 'diego@mail.com', modulo_id: 2 },
      { nombre: 'Jesus', correo: 'jesus@mail.com', modulo_id: 1 },
      { nombre: 'Laura', correo: 'laura@mail.com', modulo_id: 3 },
      { nombre: 'Brayan', correo: 'brayan@mail.com', modulo_id: 1 }
    ]

    const modulos = [
      { id: 1, nombre: 'Fundamentos' },
      { id: 2, nombre: 'React' },
      { id: 3, nombre: 'Node' }
    ]

    const expected = [{
      nombre: 'Andrea',
      modulo: 'Fundamentos',
      correo: 'andrea@mail.com'
    },
    { nombre: 'Diego', modulo: 'React', correo: 'diego@mail.com' },
    {
      nombre: 'Jesus',
      modulo: 'Fundamentos',
      correo: 'jesus@mail.com'
    },
    { nombre: 'Laura', modulo: 'Node', correo: 'laura@mail.com' },
    {
      nombre: 'Brayan',
      modulo: 'Fundamentos',
      correo: 'brayan@mail.com'
    }]

    expect(estudiantesPorModulo(received, modulos)).toEqual(expected)
  })

  it('Ordena por edad', function () {
    const received = [
      { nombre: 'Andrea', edad: 20 },
      { nombre: 'Diego', edad: 25 },
      { nombre: 'Jesus', edad: 18 },
      { nombre: 'Laura', edad: 30 },
      { nombre: 'Brayan', edad: 22 }
    ]

    const expected = [
      { nombre: 'Jesus', edad: 18 },
      { nombre: 'Andrea', edad: 20 },
      { nombre: 'Brayan', edad: 22 },
      { nombre: 'Diego', edad: 25 },
      { nombre: 'Laura', edad: 30 }
    ]

    expect(ordenaPorEdad(received)).toEqual(expected)
  })
})
