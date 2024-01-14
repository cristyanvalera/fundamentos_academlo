// </ #12 Métodos de arreglos y objetos />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios con arreglos
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function regresaElUltimoElemento(arr) {
    // Retrona el último elemento de un arreglo.
    // Ejemplo: in: (arr: [1, 2, 3]) ~ out: => 3
    // Tu código:
    return arr.at(-1);
}

function combinaDosArreglos(arr, arr2) {
    // Retrona un array que contenga los elementos de dos arrays.
    // Ejemplo: in: (arr: [1, 2, 3], arr2: [4, 5, 6]) ~ out: => [1, 2, 3, 4, 5, 6]
    // Tu código:
    return [...arr, ...arr2];
}

function aplanarArreglo(arr) {
    // Retrona un array que contenga los elementos de un arreglo de arreglos.
    // Ejemplo: in: (arr: [[1, 2], [3, 4], [5, 6]]) ~ out: => [1, 2, 3, 4, 5, 6]
    // Tu código:
    return arr.flat();
}

function odenarDeMayorAmenor(arr) {
    // Retrona un array que contenga los elementos de un arreglo ordenados de mayor a menor.
    // Ejemplo: in: (arr: [1, 3, 2]) ~ out: => [3, 2, 1]
    // Tu código:
    return arr.sort((a, b) => b - a);
}

function agregarElementoSinModificarOriginal(arr, elemento) {
    // Retrona un nuevo arreglo que contenga los elementos de un arreglo y un elemento adicional al final.
    // Ejemplo: in: (arr: [1, 2, 3], elemento: 4) ~ out: => { nuevoArreglo: [1, 2, 3, 4], arregloOriginal: [1, 2, 3] }
    // Tu código:
    return {
        nuevoArreglo: [...arr, elemento],
        arregloOriginal: arr
    }
}

function eliminarElementoSinModificarOriginal(arr, elemento) {
    // Retrona un nuevo arreglo que contenga los elementos de un arreglo sin un elemento específico.
    // Ejemplo: in: (arr: [1, 2, 3, 4], elemento: 3) ~ out: => { nuevoArreglo: [1, 2, 4], arregloOriginal: [1, 2, 3, 4] }
    // Tu código:
    return {
        nuevoArreglo: arr.filter(i => i !== elemento),
        arregloOriginal: arr
    }
}

function contarCantidadDeArticulos(arr) {
    // De un arreglo de objetos, donde cada objeto es un artículo, retorna la cantidad total de artículos.
    // Ejemplo: in: (arr: [{ qty: 1 }, { qty: 2 }, { qty: 3 }]) ~ out: => 6
    // Tu código:

    // let count = 0;
    // for (const art of arr) {
    //     count += art.qty
    // }
    // return count;
    
    return arr.reduce((acc, a) => acc + a.qty, 0);
}

function palindromo(texto) {
    // Retrona true si el texto es un palíndromo, de lo contrario retorna false.
    // Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
    // Ejemplo: in: (texto: 'anita lava la tina') ~ out: => true
    // Tu código:
    const trimmedText = texto.replace(/\s/g, '');

    const reversed = trimmedText.split('').reverse().join('');

    return trimmedText === reversed;
}


function unirCadenaDeTexto(arr) {
    // Retrona un texto que contenga los elementos de un arreglo separados por un espacio.
    // Ejemplo: in: (arr: ['JavaScript', 'es', 'genial']) ~ out: => 'JavaScript es genial'
    // Tu código:

    // let itemStr = '';

    // for (const item of arr) {
    //     itemStr += item + ' ';
    // }

    // return itemStr.trim();
    
    return arr.reduce((acc, item) => acc + item + ' ', '').trim();
}

function invieteElOrdenDeLaCadena(texto) {
    // Retrona un texto en orden inverso.
    // Ejemplo: in: (texto: 'Hola mundo') ~ out: => 'odnum aloH'
    // Tu código:
    return texto.split('').reverse().join('');
}

function buscarCoincidencias(arr, arr2) {
    // Retrona un arreglo que contenga los elementos que se repiten en dos arreglos.
    // Ejemplo: in: (arr: [4, 2, 3], arr2: [3, 4, 5]) ~ out: => [4, 3]
    // Nota: Los arreglos no necesariamente tienen la misma longitud.
    // Tu código:

    // const total = [];

    // for (let i = 0; i < arr.length; i++) {
    //     const el1 = arr[i];

    //     for (let j = 0; j < arr2.length; j++) {
    //         const el2 = arr2[j];

    //         if (el1 === el2) {
    //             total.push(el1)
    //         }
    //     }
    // }

    // const total = [];

    // for (const i of arr) {
    //     for (const j of arr2) {
    //         if (i === j) {
    //             total.push(i);
    //         }
    //     }
    // }

    // return total;

    return arr.filter(i => arr2.includes(i));
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
    regresaElUltimoElemento,
    combinaDosArreglos,
    aplanarArreglo,
    odenarDeMayorAmenor,
    agregarElementoSinModificarOriginal,
    eliminarElementoSinModificarOriginal,
    contarCantidadDeArticulos,
    palindromo,
    unirCadenaDeTexto,
    invieteElOrdenDeLaCadena,
    buscarCoincidencias
}
