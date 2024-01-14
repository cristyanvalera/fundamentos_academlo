function getEmails(users) {
    return users.map(user => user.email);
}

function mergeData(users, attendances) {
    // Crear un objeto para mapear los usuarios por su correo electrónico
    const usersMap = {};

    users.forEach(user => {
        usersMap[user.email] = user;
    });
    
    // Mezclar los arreglos y agregar la propiedad de asistencia
    const mergedArray = attendances.map(attendance => ({
        ...usersMap[attendance.email],
        attendance: attendance.attendance
    }));

    return mergedArray;
}

function orderStudentsByScore(students) {
    return students.sort((a, b) => {
        if (a.score > b.score) return 1;
        if (a.score === b.score) return 0;
        if (a.score < b.score) return -1;
    });
}

function findMostCommonAge(students) {
    // const ages = {};

    // for (const student of students) {
    //     const age = student.age;

    //     if (ages[age] === undefined) {
    //         ages[age] = 1;
    //     } else {
    //         ages[age]++;
    //     }
    // }

    // let mostCommonAge = undefined;
    // let mostCommonCount = 0;

    // for (const [age, count] of Object.entries(ages)) {
    //     if (count > mostCommonCount) {
    //         mostCommonAge = age;
    //         mostCommonCount = count;
    //     }
    // }

    // return mostCommonAge;

    // const ageFrequency = {};

    // // Iterar sobre el arreglo de estudiantes y contar la frecuencia de cada edad
    // students.forEach(student => {
    //     const { age } = student;
    //     ageFrequency[age] = (ageFrequency[age] || 0) + 1;
    // });

    // // Encontrar la edad con la frecuencia máxima
    // let mostCommonAge;
    // let maxFrequency = 0;

    // for (const age in ageFrequency) {
    //     if (ageFrequency[age] > maxFrequency) {
    //         mostCommonAge = age;
    //         maxFrequency = ageFrequency[age];
    //     }
    // }

    // // Convertir la edad a un número (puede ser una cadena si lo necesitas)
    // return mostCommonAge ? parseInt(mostCommonAge) : null;

    // Objeto con las frecuencias de edad
    const ageFrequency = {};

    students.forEach(({ age }) => {
        // Verifico que la edad ya esté dentro del objeto ageFrecuency,
        // sino le asigno el valor de 0, y a cualquier valor que tenga,
        // le sumo 1.
        ageFrequency[age] = (ageFrequency[age] || 0) + 1;
    });

    // Evalúo cual valor de edad se repite más
    const mostCommonAge = Object.keys(ageFrequency).reduce((maxAge, age) =>
        ageFrequency[age] > ageFrequency[maxAge] ? age : maxAge
    );

    return mostCommonAge ? parseInt(mostCommonAge) : null;
}

const students = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
];

console.log(findMostCommonAge(students))

const findUsers = (users, name) => {
    return users.find(user => user.name.toLowerCase() === name.toLowerCase());
}

const users = [
    { name: 'Jesús', gender: 'male', age: 22 },
    { name: 'Luis', gender: 'male', age: 22 },
    { name: 'Andrés', gender: 'male', age: 49 },
    { name: 'María', gender: 'female', age: 35 }
];

console.log(findUsers(users, 'María'));

const sumValues = (numbers) => {
    return numbers.reduce((acc, sum) => acc + sum)
}

const numbers = [21, 12, 1981];

console.log(sumValues(numbers))

module.exports = {
    getEmails,
    mergeData,
    orderStudentsByScore,
    findMostCommonAge
}