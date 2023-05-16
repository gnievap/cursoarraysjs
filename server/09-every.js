const numbers = [1, 30, 49, 29, 10, 13];

let respuesta1 = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40 ){
        respuesta1 = false;
    }
}
console.log('respuesta1: ', respuesta1);

const respuesta2 = numbers.every(item => item <= 40 );
console.log('respuesta2: ', respuesta2);

// Reto

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 8,
    },
  ];

const respuesta3 = team.every( item => item.age <= 15 );
console.log('respuesta3: ', respuesta3);
const mensaje = respuesta3 
? "Equipo admitido, todos los integrantes son menores de 15 años "
: "Equipo no admitido, hay algunos integrantes mayores de 15 años"
console.log(mensaje);