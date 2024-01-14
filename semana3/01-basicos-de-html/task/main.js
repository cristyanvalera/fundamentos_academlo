function findMostCommonAge(students) {
    const ages = {};

    for (const student of students) {
        const age = student.age;

        if (! ages[age]) {
            ages[age] = 1;
        } else {
            ages[age]++;
        }
    }

    return Object.keys(ages).reduce((max, age) => {
        return ages[age] > ages[max]
            ? age
            : max;
    });
}

// Ejemplo de uso
const students = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 25 },
    { name: 'José', age: 23 },
    { name: 'Georg', age: 21 },
    { name: 'Georg', age: 21 },
    { name: 'Georg', age: 21 },
];

console.log(findMostCommonAge(students))