// </ #9 Operadores de Lógicos />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios de operadores lógicos
  Reeplaza null por el valor correspondiente en cada operación
*/

// null || false || 'hola' || 23 || 'string' || 0
const ejemplo1 = 'hola'

// 0 && false && 'hola' && 23 && 'string' && 0
const ejemplo2 = 0 

// null || 0 || '' || false
const ejemplo3 = false

// '0' && true && 25 && 'null'
const ejemplo4 = 'null'

// '' || 25 && 'hola' || true
const ejemplo5 = 'hola'

/*
Ejercicio #2
  Realiza las siguientes funciones de operadores lógicos
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function puedeIngresarAlPais (visa, pasaporte) {
  // La función recibe dos booleanos, visa y pasaporte, OJO!!! ambos son requeridos.
  // Si visa y pasaporte son true, retorna true.
  // De lo contrario, retorna false.
  // Ejemplo: in: (visa: true, pasaporte: true) ~ out: => true
  // Tu código:
  return visa && pasaporte
}

function puedeIngresarAlEvento (edad, permiso) {
  // La función recibe dos booleanos, edad y permiso
  // Para ingresar a un evento, la edad debe ser mayor o igual a 18, o tener permiso de un adulto.
  // Si no tiene la edad requerida y tampoco el permiso, retorna false.
  // Ejemplo: in: (edad: 20, permiso: true) ~ out: => true
  // Tu código:
  return edad >= 18 || permiso
}

function mensajeDeBienvenida (nombre) {
  // La función recibe un string, nombre.
  // Tu labor es retornar un mensaje de bienvenida, si el nombre es válido. De lo contrario, retornar un mensaje con el nombre como 'visitante'.
  // Ejemplo: in: (nombre: 'Juan') ~ out: => 'Bienvenido Juan'
  // Ejemplo: in: () ~ out: => 'Bienvenido visitante'
  // Tu código:
  return nombre
    ? `Bienvenido ${nombre}`
    : 'Bienvenido visitante'
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  ejemplo1,
  ejemplo2,
  ejemplo3,
  ejemplo4,
  ejemplo5,
  puedeIngresarAlPais,
  puedeIngresarAlEvento,
  mensajeDeBienvenida
}
