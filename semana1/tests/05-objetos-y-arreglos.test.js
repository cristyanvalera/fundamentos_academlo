const {
  objetoVacio,
  persona,
  urlFacebook,
  urlTwitter,
  usuario,
  arregloVacio,
  comidaDeliciosa,
  comidaSaludable,
  elementoExtraido,
  agregarElementoAlFinalDelArreglo,
  agregarElementoAlInicioDelArreglo,
  extraerElementoAlFinalDelArreglo,
  extraerElementoAlInicioDelArreglo,
  obtenerLargoDelArreglo,
  obtenerElNombreDeLaPersona,
  obtenerLaEdadDeLaPersona,
  agregarUnaNuevaPropiedad,
  eliminarUnaPropiedad,
  verificarSiLaPropiedadExiste,
  nuevoUsuario,
  obtenerNombres,
  obtenerPerfilFacebook
} = require('../05-objetos-y-arreglos/test/task.js')

function normalizar (str) {
  return str.toLowerCase().trim()
}

const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/erik' },
      { cuenta: 'twitter', 'perfil url': 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/georg' },
      { cuenta: 'twitter', 'perfil url': 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/andrea' },
      { cuenta: 'twitter', 'perfil url': 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/oscar' },
      { cuenta: 'twitter', 'perfil url': 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { cuenta: 'facebook', 'perfil url': 'facebook/andrea' },
      { cuenta: 'twitter', 'perfil url': 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]

/* eslint-disable no-undef */
describe('🚨 Test de Objetos y Arreglos', function () {
  test('Declara un arreglo vacío', function () {
    expect(arregloVacio).toEqual([])
  })

  test('Agrega tres elementos al arreglo', function () {
    expect(comidaDeliciosa.length).toEqual(3)
  })

  test('Reemplaza el elemento en la posición 0', function () {
    expect(normalizar(comidaSaludable[0])).toEqual('cereal')
  })

  test('Extrae el color "rosado"', function () {
    expect(elementoExtraido).toEqual('rosado')
  })

  test('Declara un objeto vacio', function () {
    expect(objetoVacio).toEqual({})
  })

  test('Agrega tres propiedades al objeto "persona"', function () {
    const props = ['nombre', 'edad', 'ciudad']

    for (const key in persona) {
      expect(props.includes(key)).toEqual(true)
    }
  })

  test('Accede a las redes sociales de Diego y extrae las urls de su perfiles', function () {
    expect(urlFacebook).toEqual('facebook/diego')
    expect(urlTwitter).toEqual('twitter/diego')
  })

  test('Agrega un método al objeto usuario llamado saludar', function () {
    expect(usuario.saludar()).toEqual('Hola, soy Fernando y tengo 23 años.')
  })

  test('Agregar un elemento al final del arreglo', function () {
    expect(agregarElementoAlFinalDelArreglo([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    expect(agregarElementoAlFinalDelArreglo([5, 6], 7)).toEqual([5, 6, 7])
  })

  test('Agregar un elemento al inicio del arreglo', function () {
    expect(agregarElementoAlInicioDelArreglo([1, 2, 3], 4)).toEqual([4, 1, 2, 3])
    expect(agregarElementoAlInicioDelArreglo([5, 6], 7)).toEqual([7, 5, 6])
  })

  test('Extraer el último elemento del arreglo', function () {
    expect(extraerElementoAlFinalDelArreglo([1, 2, 3])).toEqual(3)
    expect(extraerElementoAlFinalDelArreglo([5, 6])).toEqual(6)
  })

  test('Extraer el primer elemento del arreglo', function () {
    expect(extraerElementoAlInicioDelArreglo([1, 2, 3])).toEqual(1)
    expect(extraerElementoAlInicioDelArreglo([5, 6])).toEqual(5)
  })

  test('Obtener el largo del arreglo', function () {
    expect(obtenerLargoDelArreglo([1, 2, 3])).toEqual(3)
    expect(obtenerLargoDelArreglo([5, 6])).toEqual(2)
  })

  test('Obtener el nombre de la persona', function () {
    expect(obtenerElNombreDeLaPersona({ nombre: 'Juan' })).toEqual('Juan')
    expect(obtenerElNombreDeLaPersona({ nombre: 'Pedro' })).toEqual('Pedro')
  })

  test('Obtener la edad de la persona', function () {
    expect(obtenerLaEdadDeLaPersona({ edad: 20 })).toEqual(20)
    expect(obtenerLaEdadDeLaPersona({ edad: 30 })).toEqual(30)
  })

  test('Agregar una nueva propiedad al objeto', function () {
    const expected = { nombre: 'Juan', edad: 20 }
    const expected2 = { nombre: 'Pedro', edad: 30 }
    const received = agregarUnaNuevaPropiedad({ nombre: 'Juan' }, 'edad', 20)
    const received2 = agregarUnaNuevaPropiedad({ nombre: 'Pedro' }, 'edad', 30)

    expect(received).toEqual(expected)
    expect(received2).toEqual(expected2)
  })

  test('Eliminar una propiedad del objeto', function () {
    const expected = { nombre: 'Juan' }
    const expected2 = { nombre: 'Pedro' }
    const received = eliminarUnaPropiedad({ nombre: 'Juan', edad: 20 }, 'edad')
    const received2 = eliminarUnaPropiedad({ nombre: 'Pedro', edad: 30 }, 'edad')

    expect(received).toEqual(expected)
    expect(received2).toEqual(expected2)
  })

  test('Verificar si existe la propiedad', function () {
    expect(verificarSiLaPropiedadExiste({ nombre: 'Juan', edad: 20 }, 'edad')).toEqual(true)
    expect(verificarSiLaPropiedadExiste({ nombre: 'Pedro', edad: 30 }, 'edad')).toEqual(true)
    expect(verificarSiLaPropiedadExiste({ nombre: 'Pedro', edad: 30 }, 'ciudad')).toEqual(false)
  })

  test('Crear un nuevo usuario', function () {
    const expected = { nombre: 'Juan', edad: 20, password: '1234' }
    const expected2 = { nombre: 'Pedro', edad: 30, password: '4321' }
    const received = nuevoUsuario('Juan', 20, '1234')
    const received2 = nuevoUsuario('Pedro', 30, '4321')

    expect(received).toEqual(expected)
    expect(received2).toEqual(expected2)
  })

  test('Retornar un nuevo arreglo con los nombres de los estudiantes', function () {
    expect(obtenerNombres(usuarios)).toEqual(['Erik', 'Georg', 'Andrea', 'Oscar', 'Daniela'])
  })

  test('Retornar un nuevo arreglo con los perfiles de facebook de cada estudiante', function () {
    expect(obtenerPerfilFacebook(usuarios)).toEqual(['facebook/erik', 'facebook/georg', 'facebook/andrea', 'facebook/oscar', 'facebook/andrea'])
  })
})
