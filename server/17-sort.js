const months = ["March", "Jan", "Feb", "Dec"];
console.log('Months:', months.sort()); // Months: [ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];
console.log('Numbers: ',numbers.sort()); // Numbers:  [ 1, 100000, 21, 30, 4 ]

console.log('Numbers menor to mayor: ', numbers.sort((a, b)=> a - b)); // Numbers menor to mayor:  [ 1, 4, 21, 30, 100000 ]

console.log('Numbers mayor to menor: ', numbers.sort((a, b) => b - a) ); // Numbers mayor to menor:  [ 100000, 30, 21, 4, 1 ]

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
console.log('Words en Navegadores actuales: ',words.sort());
/*
 Words:  [
  'adieu',
  'banana',
  'café',
  'communiqué',
  'premier',
  'réservé',
  'éclair'
]
*/
console.log('Words en Navegadores como Internet Explorer: ', words.sort((a,b) => a.localeCompare(b)));
/*
Words en Navegadores como Internet Explorer:  [
  'adieu',
  'banana',
  'café',
  'communiqué',
  'éclair',
  'premier',
  'réservé'
]
*/
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
console.log('Objetos del mayor total a menor total: ',orders.sort((a,b) => b.total - a.total));
/*
Objetos del mayor total a menor total:  [
  { customerName: 'Santiago', total: 1840, delivered: true },
  { customerName: 'Nicolas', total: 600, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true },
  { customerName: 'Zulema', total: 120, delivered: false }
]
*/

// Reto: Ordenar por la fecha mas reciente
const ordersReto = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    datePurchased: "2021-11-28 12:00:00",
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    datePurchased: "2021-10-29 12:00:00",
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    datePurchased: "2021-10-30 12:00:00",
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    datePurchased: "2021-10-30 9:00:00",
  },
];
let resultadoReto = ordersReto.sort((a, b) => new Date(a.datePurchased) - new Date(b.datePurchased));
let arrayResultadoReto = resultadoReto.map(item => item.datePurchased)
console.log("Ordenar por fecha más reciente: ", resultadoReto);
/*
Ordenar por fecha más reciente:  [
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    datePurchased: '2021-10-29 12:00:00'
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    datePurchased: '2021-10-30 9:00:00'
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    datePurchased: '2021-10-30 12:00:00'
  },
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    datePurchased: '2021-11-28 12:00:00'
  }
]  
]
*/
console.log("Array solo fechas ordenadas por la más reciente: ", arrayResultadoReto);
/*
]
Array solo fechas ordenadas por la más reciente::  [
  '2021-10-29 12:00:00',
  '2021-10-30 9:00:00',
  '2021-10-30 12:00:00',
  '2021-11-28 12:00:00'
]
*/