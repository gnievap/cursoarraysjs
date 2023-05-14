const letters = ['a', 'b', 'c'];

//for básico para recorrer el array
console.log('Con el for clásico: ');
for ( let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}

console.log('Con ForEach: ');

// Mismo recorrido, con métodos de array
letters.forEach(item => console.log(item));