const { el } = require("date-fns/locale");

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log('for', newArray);

const respuesta1 = elements.concat(otherElements);
console.log('concat: ' , respuesta1);

const respuesta2 = [...elements, ...otherElements];
console.log('spread operator: ', respuesta2);

const respuesta3 = [...elements, 'random'];
console.log('respuesta3:', respuesta3);
elements.push(...otherElements);
console.log('elements: ', elements);