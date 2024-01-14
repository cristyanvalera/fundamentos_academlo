// </ #7 Números />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios con números.
  Reemplaza null por el código necesario para completar el ejercicio.
*/
// Utiliza la notación exponencial para representar los siguientes números:
// Notación exponencial de: 100000 => ??
const example1 = 10e4

// Notación exponencial de: 85000000000 => ??
const example2 = 85e9

// Notación exponencial de: 0.0025 => ??
const example3 = 2.5e-3

// Notación exponencial de: 0.000001 => ??
const example4 = 1e-6

// Algo está mal con el siguiente código, ¿puedes arreglarlo?
const entero = '256.5px' // No puedes modificar esta línea
// Devolver un entero 256
const example5 = parseInt(entero, 10)

// Math.ceil(6.15) === ??
const example6 = Math.ceil(6.15) === 7

// Math.round(85.35) === ??
const example7 = Math.round(85.35) === 85

// Math.floor(4.99) === ??
const example8 = Math.floor(4.99) === 4

// Math.round(10.5) === ??
const example9 = Math.round(10.5) === 11

// Math.ceil(12.72) === ??
const example10 = Math.ceil(12.72) === 13

// Math.floor(0.9) === ??
const example11 = Math.floor(0.9) === 0

/*
  Ejercicio #2
  Realiza las siguientes funciones de números
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function validarNumero (numero) {
  // La función recibe un número y debe devolver true si es NaN, de lo contrario, false.
  // Ejemplo: in: (numero: 1) ~ out: => false
  // Ejemplo: in: (numero: NaN) ~ out: => true
  // Tu código:
  if (numero) {
    return false
  } 
  return true
}

function numeroRandom (inicio, final) {
  // La función recibe dos números y debe devolver un número aleatorio entre ambos números.
  // Ejemplo: in: (inicio: 1, final: 10) ~ out: => 5
  // Tu código:
  return Math.random() * (final - inicio) + inicio;
}

function redondear (numero, decimales) {
  // La función recibe un número y debe devolver un número redondeado a la cantidad de decimales indicada.
  // Ejemplo: in: (numero: 1.23456, decimales: 2) ~ out: => 1.23
  // Tu código:
  return Math.round(numero * 10 ** decimales) / 10 ** decimales;
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  validarNumero,
  numeroRandom,
  redondear
}
