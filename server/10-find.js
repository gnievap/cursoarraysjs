const numbers = [1, 30, 49, 29, 10, 13];

let respuesta1 = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if ( element === 30 ){
        respuesta1 = element;
        break;
    }
}

console.log('respuesta1 con for: ', respuesta1);

const respuesta2 = numbers.find( item => item === 30 );
console.log('respuesta2 con find: ', respuesta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const respuesta3 = products.find( item => item.id === '🍔' );
  console.log('respuesta3 con find: ', respuesta3);

  const respuesta4 = products.findIndex( item => item.id === '🍔' );
  console.log('respuesta4 con findIndex: ', respuesta4);