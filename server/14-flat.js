const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9]
];

const newArray1 = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray1.push(element);
    }
}

const newArray2 = matriz.flat(3);

console.log('con for: ', newArray1);
console.log('con flat: ', newArray2);