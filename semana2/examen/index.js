// Examen #1
const reverseText = (text) => {
    return text.split('').reverse().join('');
}

// Examen #2
const sumTwoArrays = (array, array2) => {
    return array.concat(array2).reduce((acc, sum) => acc + sum, 0);
}

// Examen #3
const getNMultiples = (number, totalMultiples) => {
    const multiplos = [];

    for (let i = 1; i <= totalMultiples + 1; i++) {
        const multiplo = number * i;

        if (multiplo !== number) {
            multiplos.push(multiplo);
        }
    }

    return multiplos;
}

// Examen #4
const findMostCommonLetter = (text) => {
    const caracteres = text.split('');
    const contador = [];
    let moda = '';
    let conteoModa = 0;

    for (const caracter of caracteres) {
        contador[caracter] = contador[caracter] || 0;
        contador[caracter]++;
    }

    for (const [clave, valor] of Object.entries(contador)) {
        if (valor > conteoModa) {
            moda = clave;
            conteoModa = valor;
        }
    }

    return moda;
}

module.exports = {
    reverseText,
    sumTwoArrays,
    getNMultiples,
    findMostCommonLetter
}