const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] }
];

//const respuesta = users.map(user => user.attributes);
//console.log(respuesta); // Respuesta: [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]

const respuestaMapFlat = users.map((user) => user.attributes).flat();
const respuestaFlatMap = users.flatMap(user => user.attributes);
//console.log("flat", respuestaMapFlat); // flat [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
//console.log("flat-map", respuestaFlatMap); // flat-map [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]


// Ejercicio del reto: obtener las fechas de inicio
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
// Primero el objeto calendars lo convertimos a array utilizando Object.values()
// utilizando Object.keys() indica los atributos que tenga un objeto
const objetoAArray = Object.keys(calendars);
console.log("objetoAArray: ", objetoAArray); // [ 'primaryCalendar', 'secondaryCalendar' ]

// utilizando Object.values() indica los valores que tenga un objeto y ya lo convierte a array
const objetoAArrayValues = Object.values(calendars);
console.log("objetoAArrayValues: ", objetoAArrayValues); 
/*
[
  [
    {
      startDate: 2021-02-01T18:00:00.000Z,
      endDate: 2021-02-01T18:30:00.000Z,
      title: 'Cita 1'
    },
    {
      startDate: 2021-02-01T20:00:00.000Z,
      endDate: 2021-02-01T21:00:00.000Z,
      title: 'Cita 2'
    }
  ],
  [
    {
      startDate: 2021-02-01T15:00:00.000Z,
      endDate: 2021-02-01T15:30:00.000Z,
      title: 'Cita 2'
    },
    {
      startDate: 2021-02-01T12:00:00.000Z,
      endDate: 2021-02-01T13:00:00.000Z,
      title: 'Cita 4'
    }
  ]
]
*/  
// Segundo utilizamos flat para aplanarlo en un solo array
const respuestaFlat = Object.values(calendars).flat();
console.log("respuestaFlat: ", respuestaFlat);
/*
respuestaFlat:  [
  {
    startDate: 2021-02-01T18:00:00.000Z,
    endDate: 2021-02-01T18:30:00.000Z,
    title: 'Cita 1'
  },
  {
    startDate: 2021-02-01T20:00:00.000Z,
    endDate: 2021-02-01T21:00:00.000Z,
    title: 'Cita 2'
  },
  {
    startDate: 2021-02-01T15:00:00.000Z,
    endDate: 2021-02-01T15:30:00.000Z,
    title: 'Cita 2'
  },
  {
    startDate: 2021-02-01T12:00:00.000Z,
    endDate: 2021-02-01T13:00:00.000Z,
    title: 'Cita 4'
  }
]
*/ 

// Tercero utilizamos flatMap para aplanarlo en un solo array
// para obtener solo los valores startDate
// Obs: Con flatMap() solo admite 1 nivel de profundidad a diferencia de flat()
const respuestaFlatMapFechas = Object.values(calendars).flatMap(item => {
    // Aplano los elementos del array
    console.log('item:',item);
    // Transformo el array interno y le paso la fecha
    return item.map(date => date.startDate);
});
// Finalmente obtenemos nuestra solución
// Un array con las fechas directas de cada una de las fechas de inicio
console.log("respuestaFlatMap: ", respuestaFlatMapFechas);
/*
respuestaFlatMap:  [
  2021-02-01T18:00:00.000Z,
  2021-02-01T20:00:00.000Z,
  2021-02-01T15:00:00.000Z,
  2021-02-01T12:00:00.000Z
]
*/

// Ejercicio del reto2
/*
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

Para solucionarlo vas a encontrar una función llamada countWords que tiene un parámetro de entrada:

array: Un array de frases
Dentro del cuerpo de la función countWords debes escribir tu solución.

Ejemplo:

Input: [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

Output: 20
*/
let arrayInput = [
  "Beautiful is better than ugly", //5
  "Explicit is better than implicit", // 10
  "Simple is better than complex", // 15
  "Complex is better than complicated" // 20
];
function countWords(array) {
  // Tu código aquí 👈
  return array
    .flatMap((item) => item.split(" ").length)
    .reduce((sum, item) => (sum += item), 0);
}
console.log("Reto2: ", countWords(arrayInput)); // 20