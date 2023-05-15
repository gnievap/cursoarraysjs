const words = [ 'spray', 'limit', 'elite', 'exuberant' ];

// creación de un filter usando un for clásico
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if ( item.length >= 6 ) {
        newArray.push(item);
    }
}
console.log('words: ' + words);
console.log('newArray: ' + newArray);

const respuesta1 = words.filter(item => item.length >= 6);
console.log('words: ' + words);
console.log('respuesta1: ' + respuesta1);

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
    },
    {
        customerName: 'Nicolas',
        total: 2322,
        delivered: false,
    }
];

const respuesta2 = orders.filter(item => item.delivered);
console.log('orders: ', orders);
console.log('respuesta2: ',  respuesta2);

const respuesta3 = orders.filter(item => item.delivered && item.total >= 100);
console.log('respuesta3: ',  respuesta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log( search('Nico') );