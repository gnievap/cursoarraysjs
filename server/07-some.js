const numbers = [1, 2, 3, 4];

let respuesta1 = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if ( element % 2 === 0){
        respuesta1 = true;
        break;
    }
}
console.log(respuesta1);

const respuesta2 = numbers.some(item => item % 2 === 0);
console.log('respuesta2: ', respuesta2);

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

const respuesta3 = orders.some( item => item.delivered );
console.log('respuesta3: ', respuesta3);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con el jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap: ', isOverlap(newAppointment));