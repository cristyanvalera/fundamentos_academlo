/*
=================================
  * Cadenas de texto (string) *
=================================
*/
// - Las cadenas de texto son un tipo de dato que nos permite almacenar texto. Pero en realidad, las cadenas de texto son un arreglo de caracteres.

// => Declaración de una cadena de texto:
// - Comillas simples y dobles:
const nombre = 'Jesús'
const apellido = "Fernández"

// => Concatenación:
// - La concatenación es la unión de dos o más cadenas de texto.
// - Para concatenar cadenas de texto se utiliza el operador +.
// Ejemplo:
const nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// => Caracteres especiales:
// - Son caracteres que no se pueden escribir directamente en una cadena de texto.
// - Para escribir caracteres especiales se utilizan secuencias de escape (\).
// - Algunos caracteres especiales son: \n, \t, \', \", \\.
// Ejemplo:
console.log('Hola\nMundo')
console.log('\tHola\nMundo')
console.log('Hola "Mundo"')
console.log("Hola 'Mundo'")
console.log('Hola \'Mundo\'')


const edad = 30
const ciudad = 'México'
console.log('Hola, soy' + ' ' + nombre + ', tengo' + ' ' + edad + ' años ' + ' y soy de' + ' ' + ciudad + '.')

console.log('Hola, soy Fernando, tengo 23 años y soy de Lima.')

// => Template strings:
// - Los template strings son cadenas de texto que nos permiten interpolar valores de variables dentro de una cadena de texto.
// - Para utilizar template strings se utilizan las comillas invertidas (`backticks`).
// - Para interpolar valores de variables dentro de una cadena de texto se utiliza ${marcadores}.
// Ejemplo:
// Interpolación
console.log(`Hola, soy ${nombre}, tengo ${edad} años y soy de ${ciudad}.`)
console.log(`  'Hola"
 soy
 Jesús
 Fernández
`)

// => Acceder a un caracter:
// - Para acceder a un caracter de una cadena de texto se utilizan los corchetes [].
// - Los caracteres tienen un índice que empieza desde 0. Es la posición del caracter dentro de la cadena de texto.
// Ejemplo:
let texto = 'Hola Mundo'
/* 
  <---------------------------------------> 
    H   o   l   a       M   u   n   d   o
    0   1   2   3   4   5   6   7   8   9
  <--------------------------------------->
*/
console.log(texto[3])
console.log(texto[4])
console.log(texto[10])

// => Longitud de una cadena de texto:
// - Para obtener la longitud de una cadena de texto se utiliza la propiedad length.
// Ejemplo:
console.log(texto.length)
// Obtenemos el último caracter
console.log(texto[texto.length - 1])

// => Inmutabilidad:
// - Las cadenas de texto son inmutables, es decir, no se pueden modificar.
// Ejemplo:
console.log(texto)
console.log(texto[0])
// texto[0] = 'h'
console.log(texto)
const str = 'h'
console.log(str + texto[1] + texto[2])

// => Métodos de cadenas de texto:
// - Los métodos nos sirven para trabajar con cadenas de texto. Estos métodos no modifican la cadena de texto original, sino que devuelven una nueva cadena de texto.

// Métodos de Búsqueda:
// - Nos sirven para buscar un caracter o una cadena de texto dentro de otra cadena de texto.
let frase = 'Me encanta programar en JavaScript en Academlo'

// str.indexOf(valor, índice/posición):
// - Devuelve la posición de la primera ocurrencia o -1 si no se encuentra.
// Ejemplo:
console.log(frase.indexOf('JavaScript'))
console.log(frase.indexOf('Raton'))
console.log(frase.indexOf('en', 22))

// str.lastIndexOf(valor,índice/posición):
// - Lo mismo que indexOf pero comienza la búsqueda desde el final. Devuelve -1 si no se encuentra.
// Ejemplo:
console.log(frase.lastIndexOf('JavaScript'))
console.log(frase.lastIndexOf('Raton'))
console.log(frase.lastIndexOf('en', 34))

// str.includes(valor,índice/posición):
// - Devuelve true si encuentra el valor, de lo contrario devuelve false.
// Ejemplo:
console.log(frase)
console.log(frase.includes('Mango'))
console.log(frase.includes('Academlo'))
console.log(frase.includes('en', 36))

// str.startsWith(valor, índice/posición):
// - Devuelve true si el valor se encuentra al inicio de la cadena de texto, de lo contrario devuelve false.
// Ejemplo:
console.log(frase)
console.log(frase.startsWith('Me'))
console.log(frase.startsWith('me'))
console.log(frase.startsWith('encanta', 3))

// str.endsWith(valor,índice/posición):
// - Devuelve true si el valor se encuentra al final de la cadena de texto, de lo contrario devuelve false.
// Ejemplo:
console.log(frase.endsWith('Academlo'))

// Métodos de Manipulación:
// - Nos sirven para manipular y transformar cadenas de texto.

// str.slice(incio:índice/posición, final:índice/posición):
// - Extrae un fragmento de la cadena de texto desde inicio hasta final (final no incluido).
// Ejemplo:
texto = 'Hola Mundo'
//            -3-2-1 
console.log(texto)

console.log(texto.slice()) // Una copia del string completo
console.log(texto.slice(2)) // Comienza desde 2 hasta final
console.log(texto.slice(0, 4)) // El final no esta incluido
console.log(texto.slice(-3))

const sumValues = (numbers) => numbers.reduce((suma, numero) => suma + numero, 0);

console.log(sumValues([1, 6]))