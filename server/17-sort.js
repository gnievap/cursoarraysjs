const months = ["March", "Jan", "Feb", "Dec"];
//ordenando months, de acuerdo a orden alfabético
months.sort();
console.log('months: ',months);


const numbers = [1, 30, 4, 21, 100000];
numbers.sort( (a, b) => a - b );  // ordenación descendente: b-a
console.log('numbers: ', numbers);


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// words.sort(); Ordenación por defecto
words.sort( (a, b) => a.localeCompare(b));
console.log('words: ', words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort( (a, b) => b.total-a.total);
console.log('orders: ', orders);