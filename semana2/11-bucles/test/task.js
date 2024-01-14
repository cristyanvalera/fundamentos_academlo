// </ #11 Bucles />

/*
  Ejercicio #1
  Realiza los siguientes ejercicios con bucles
  No modifiques los nombres ni los parámetros de las funciones.
  No debes invocar a las funciones.
  No debes crear otras variables (a menos que los requieras). Utiliza los parámetros que reciben las funciones.
  Recuerda utilizar return para devolver valores.
*/

function contadorDeVocales(texto) {
    // Retorna el número de vocales que tiene un texto.
    // Ten en cuenta que una vocal puede estar en mayúscula o minúscula.
    // Ejemplo: in: (texto: 'Hola Mundo') ~ out: => 4
    // Tu código:
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    let minuscula = texto.toLowerCase();

    for (let i = 0; i < minuscula.length; i++) {
        if (vocales.includes(minuscula[i])) {
            contador++;
        }
    }

    return contador;
}

function rangoDeNumeros(inicio, final) {
    // Retorna un rango de números entre el número inicial y el número final.
    // El número inicial siempre será menor que el número final.
    // Ejemplo: in: (inicio: 1, final: 5) ~ out: => [1, 2, 3, 4, 5]
    // Tu código:
    if (inicio > final) {
        return [];
    }

    let rango = [];

    for (let i = inicio; i <= final; i++) {
        rango.push(i);
    }

    return rango;
}

function sumarNumerosDelArreglo(numeros) {
    // Retorna la sumatoria de todos los números de un array.
    // Ejemplo: in: (numeros: [1, 2, 3]) ~ out: => 6
    // Tu código:
    // let suma = 0;

    // for (let i = 0; i < numeros.length; i++) {
    //     suma += numeros[i];
    // }

    // return suma;

    return numeros.reduce((acc, sum) => acc + sum);
}

function multiplosDeN(multiplo, final) {
    // Retorna los múltiplos de un número entre el número inicial y el número final sin incluir ambos números.
    // Ejemplo: in: (multiplo: 20, final: 100) ~ out: => [40, 60, 80]
    // Tu código:
    const multsArr = [];

    for (let i = multiplo + 1; i < final; i++) {
        if (i % multiplo === 0) {
            multsArr.push(i);
        }
    }

    return multsArr;
}

function numeroMasGrande(numeros) {
    // Retorna el número más grande de un array.
    // Ejemplo: in: (numeros: [15, 2, 35, 26]) ~ out: => 35
    // Tu código:
    // let max = numeros[0];

    // for (let i = 1; i < numeros.length; i++) {
    //     if (numeros[i] > max) {
    //         max = numeros[i];
    //     }
    // }

    // return max;

    return numeros.reduce((max, item) => {
        return item > max ? item : max;
    }, 1);
}

function contarColores(colores) {
    // Retorna el número de veces que se repite un color en un array.
    // Ejemplo: in: (colores: ['rojo', 'azul', 'rojo', 'verde', 'azul', 'rojo']) ~ out: => { rojo: 3, azul: 2, verde: 1 }
    // Tu código:
    let contador = {};

    for (let i = 0; i < colores.length; i++) {
        let actual = colores[i];

        if (contador[actual]) {
            contador[actual]++;
        } else {
            contador[actual] = 1;
        }
    }

    return contador;
}

function filtrarPorEdad(usuarios) {
    // Retorna un array con los usuarios que sean mayores de 20 pero menores de 30 años.
    /* Ejemplo: in: (usuarios: [
      { nombre: 'John', edad: 19 },
      { nombre: 'Jane', edad: 21 }
    ]) ~ out: => [{ nombre: 'Jane', edad: 21 }] */
    // Tu código:

    // const filtrados = [];

    // for (const usuario of usuarios) {
    //     if (usuario.edad > 20 && usuario.edad < 30) {
    //         filtrados.push(usuario);
    //     }
    // }

    // return filtrados;

    return usuarios.filter(usuario => {
        return usuario.edad > 20 && usuario.edad < 30;
    });
}

function contarLikesDeUsuarios(usuarios) {
    // Retorna el total de likes que tienen todos los usuarios.
    // Ejemplo: in: (usuarios: [{ nombre: 'John', likes: 2 }, { nombre: 'Jane', likes: 3 }]) ~ out: => 5
    // Tu código:
    // return usuarios.reduce((totalLikes, usuario) => {
    //     return totalLikes + usuario.likes
    // }, 0);

    let total = 0;

    for (const usuario of usuarios) {
        total += usuario.likes;
    }

    return total;
}


function publicarPosts(posts) {
    // Retorna un array con los posts que tienen en su propiedad "estado" el valor de true.
    /* Ejemplo: in: (posts: [
      { titulo: '5 tips para programar mejor', estado: true },
      { titulo: 'La AI avanza muy rapido que da miedo', estado: false }
    ]) ~ out: => [{ titulo: '5 tips para programar mejor', estado: true }] */
    // Tu código:

    return posts.filter(post => post.estado);

    // let publicados = [];

    // for (const post of posts) {
    //     if (post.estado) {
    //         publicados.push(post);
    //     }
    // }

    // return publicados
}

function eliminarProducto(productos, idProducto) {
    // Retorna un array sin el producto que tiene el id que llega por parámetro.
    /* Ejemplo: in: (productos: [
      { id: 1, nombre: 'Mouse' },
      { id: 2, nombre: 'Teclado' }
    ], idProducto: 2) ~ out: => [{ id: 1, nombre: 'Mouse' }] */
    // Tu código:

    return productos.filter(producto => producto.id !== idProducto);

    // const nuevoArr = [];

    // for (const producto of productos) {
    //     if (producto.id !== idProducto) {
    //         nuevoArr.push(producto)
    //     }
    // }

    // return nuevoArr;
}

function buscarPersona(personas, correo) {
    // Retorna un objeto de la persona que tiene el correo que llega por parámetro.
    /* Ejemplo: in: (personas: [
      { nombre: 'John', correo: 'john@mail.com' },
      { nombre: 'Jane', correo: 'jane@mail' }
    ], 'jane@mail.com') ~ out: => { nombre: 'Jane', correo: 'jane@mail' } */
    // Tu código:
    return personas.find(persona => persona.correo === correo);
}

const personas = [
    { nombre: 'John', correo: 'john@mail.com' },
    { nombre: 'Jane', correo: 'jane@mail' }
];

console.log(buscarPersona(personas, 'jane@mail'))

function contarEstudiantesDeUnBootcamp(estudiantes, bootcamps, bootcamp) {
    // Retorna el número de estudiantes que pertenecen a un bootcamp en específico.
    /* Ejemplo: in: (estudiantes: [
      { nombre: 'John', bootcamp_id: 1 },
      { nombre: 'Jane', bootcamp_id: 2 },
      { nombre: 'Joe', bootcamp_id: 1 }
    ],  bootcamps: [
      { id: 1, nombre: 'Academlo' },
      { id: 2, nombre: 'Otros' }
    ], bootcamp: 'Academlo') ~ out: => 2 */
    // Tu código:
    // const bootcampId = bootcamps.find(b => b.nombre === bootcamp).id;

    // return estudiantes.filter(e => e.bootcamp_id === bootcampId).length;

    let contador = 0;

    for (const estudiante of estudiantes) {
        for (const boot of bootcamps) {
            if (estudiante.bootcamp_id === boot.id &&
                boot.nombre === bootcamp) {
                contador++;
            }
        }
    }

    return contador;
}

function serieMasVistas(series) {
    // Retorna el nombre de la serie que tiene más vistas.
    /* Ejemplo: in: (series: {
      'Dark': 50,
      'Game of Thrones': 10,
      'Black Mirror': 100,
      'Stranger Things': 80
    }) ~ out: => 'Black Mirror' */
    // Tu código:
    let max = 0;
    let serie = '';

    for (const prop in series) {
        if (series[prop] > max) {
            max = series[prop];
            serie = prop;
        }
    }

    return serie;
}

function estudiantesPorModulo(personas, modulos) {
    // Retorna un array de objetos con el nombre de la persona, el nombre del módulo y el correo.
    // Ejemplo: in: (personas: [
    //   { nombre: 'Andrea', correo: 'Andrea@mail.com', modulo_id: 1 },
    //   { nombre: 'Diego', correo: 'Diego@mail.com', modulo_id: 2 },
    //   { nombre: 'Jesus', correo: 'Jesus@mail.com', modulo_id: 1 },
    //   { nombre: 'Laura', correo: 'Laura@mail.com', modulo_id: 3 },
    //   { nombre: 'Brayan', correo: 'Brayan@mail.com', modulo_id: 1}
    // ], modulos: [
    //   {id:1, nombre: 'Fundamentos'},
    //   { id:2, nombre: 'React'},
    //   { id:3, nombre: 'Node'}
    // ]) ~ out: => [{ nombre: 'Andrea', modulo: 'Fundamentos', correo: 'Andrea@mail.com', ...}]
    // Tu código:
    return personas.map(persona => {
        const modulo = modulos.find(modulo => modulo.id === persona.modulo_id);

        return {
            nombre: persona.nombre,
            modulo: modulo.nombre,
            correo: persona.correo,
        };
    });
}

/* Para el siguiente investiga sobre un método para arrays llamado arr.sort() */

function ordenaPorEdad(personas) {
    // Retorna un array de personas ordenadas por edad de menor a mayor.
    /* Ejemplo: in: (personas: [
      { nombre: 'Lukas', edad: 20 },
      { nombre: 'Maria', edad: 19 },
      { nombre: 'Marcos', edad: 21 }
    ]) ~ out: => [{ nombre: 'Maria', edad: 19 }, { nombre: 'Lukas', edad: 20 }, { nombre: 'Marcos', edad: 21 }] */
    // Tu código:
    return personas.sort((a, b) => a.edad - b.edad);
}

// NO TOCAR ESTE CÓDIGO
module.exports = {
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
}
