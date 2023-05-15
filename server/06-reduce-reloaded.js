const items = [1, 3, 2, 3, 3, 1, 10];

const respuesta = items.reduce((obj, item) => {
    if ( !obj[item] ){
        obj[item] = 1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta);

const data = [
    {
        name: 'Nicolas',
        level: "low",
    },
    {
        name: 'Andrea',
        level: "medium"
    },
    {
        name: "Zuleyma",
        level: "high",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "high",
    }
];

const respuesta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if ( !obj[item] ){
        obj[item] = 1;
    }
    else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta2);