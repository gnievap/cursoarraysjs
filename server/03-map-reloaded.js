const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zuleyma',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    }
];
console.log('original: ', orders);
const respuesta1 = orders.map( item => item.total);
console.log('respuesta1: ', respuesta1);

// const respuesta2 = orders.map( item => {
//     item.tax = .19;
//     return item;
// });
// console.log('original: ', orders);
// console.log('respuesta2: ', respuesta2);

const respuesta3 = orders.map( item => {
    return {
        ...item,
        tax: .19
    };
});
console.log('original: ', orders);
console.log('respuesta3: ', respuesta3);

