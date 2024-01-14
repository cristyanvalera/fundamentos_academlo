// Ejercicio #09
const mergeData = (users, attendances) => {
    const nuevoArreglo = []

    for (const user of users) {
        for (const attendance of attendances) {
            if (user.email === attendance.email) {
                nuevoArreglo.push({
                    name: user.name,
                    email: user.email,
                    attendance: attendance.attendance
                })
            }
        }
    }

    return nuevoArreglo
}

// Ejercicio #13
const getApplications = (users) => {
    return users.filter(user => user.application !== null);
};

// Ejercicio #14
const sumEvens = (start, end) => {
    let sum = 0;

    for (i = start + 1; i < end; i++) {
        const number = i;

        if (number % 2 === 0) {
            sum += number;
        }
    }

    return sum;
};

// Ejercicio #15
const multiplosN = (multiplo, final) => {
    const multiplos = [];

    for (let n = multiplo + 1; n < final; n++) {
        if (n % multiplo === 0) {
            multiplos.push(n);
        }
    }

    return multiplos;
};

// Ejercicio #17
const countStudents = (students, countries, countryName) => {
    const country = countries.find(c => c.name === countryName);

    return students.filter(s => s.country_id === country.id).length

    // let count = 0;

    // for (const country of countries) {
    //     for (const student of students) {
    //         if (country.name === countryName &&
    //             student.country_id === country.id) {
    //             count++;
    //         }
    //     }
    // }

    // return count;
};

module.exports = {
    getApplications,
    sumEvens,
    multiplosN,
    countStudents,
    mergeData
}