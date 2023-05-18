const elements = ["Fire", "Air", "Water"];

let respuesta1 = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    respuesta1 = respuesta1 + element + separator;
}
console.log("respuesta 1: " + respuesta1);

const respuesta2 = elements.join('--');
console.log("respuesta 2: " + respuesta2);

const title = 'Curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);