// </ #6 Cadenas de texto />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios de cadenas de texto (strings)
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function obtenerLongitud (cadena) {
  return cadena.length
}

function ultimoCaracter (cadena) {
  return cadena.at(-1)
}

function obtenerIndiceDelUltimoEspacio (cadena) {
  return cadena.lastIndexOf(' ')
}

function obtenerIndiceDelSegundoEspacio (cadena) {
  const primerEspacio = cadena.indexOf(' ');

  return cadena.indexOf(' ', primerEspacio + 1);
}

function extraeLaPrimeraPalabra (frase) {
  return frase.split(' ')[0]
}

function reemplazaLaPalabraPorOtra (frase, palabraAReemplazar, palabraNueva) {
  return frase.replace(palabraAReemplazar, palabraNueva)
}

function fraseEnMayusculas (frase) {
  return frase.toUpperCase()
}

function nombreCompleto (nombre, apellido) {
  return `${nombre} ${apellido}`
}

function enCamelCase (frase) {
  const palabras = frase.split(' ');

  const primeraPalabra = palabras.shift().toLowerCase();
  
  const restoPalabras = palabras.map((palabra) => palabra[0].toUpperCase() + palabra.slice(1));
  
  return `${primeraPalabra}${restoPalabras.join('')}`;
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
  obtenerLongitud,
  ultimoCaracter,
  obtenerIndiceDelUltimoEspacio,
  obtenerIndiceDelSegundoEspacio,
  extraeLaPrimeraPalabra,
  reemplazaLaPalabraPorOtra,
  fraseEnMayusculas,
  nombreCompleto,
  enCamelCase
}
