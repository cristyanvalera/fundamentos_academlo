// </ #4 Funciones />

/*
  Ejercicio #1
  Desarrolla la lógica de las siguientes funciones.
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

const retornandoUnValor = () => '¡Hola Mundo!';

const nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido;

const sumarNumeros = (a, b) => a + b;

const elAreaDeUnTriangulo = (base, altura) => base * altura / 2;

const elPerimetroDeUnCuadrado = (lado) => 4 * lado;

const saludoConParametros = (nombre, edad, ciudad) => {
  return `Hola, soy ${nombre}, tengo ${edad} años y soy de ${ciudad}.`
}

const convercionDeMonedas = (cantidad, moneda) => cantidad / moneda;

// console.log(convercionDeMonedas(10, 37.2))

/*
  Ejercicio #2
  Responde las siguientes preguntas:
  Reeplaza null por un string en cada respuesta
*/

// ¿Cuáles son algunas de las principales características de una función?
const respuesta1 = 'reutilizable, ayudan a resolver tareas y problemas.'

// ¿Cómo se llaman los valores pasados dentro de los parentesis de una función?
const respuesta2 = 'parámetros'

// ¿Como se llaman los datos que devuelve una función?
const respuesta3 = 'Valores de retorno'

// ¿Cómo se llaman los valores que se pasan en la llamada a la función?
const respuesta4 = 'argumentos'

// ¿Cuál es el valor que devuelve una función si no tiene la palabra reservada "return"?
const respuesta5 = 'undefined'

// NO TOCAR ESTE CÓDIGO
module.exports = {
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
}
