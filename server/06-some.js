/*const numbers = [1, 2, 3, 4];


let respuesta = false;
for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
        respuesta = true;
        break;
    }
}

console.log(respuesta);

const respuesta2 = numbers.some(item=> item % 2 === 0);
console.log(respuesta2);// true

const orders = [
  { customerName: "Nicolas", total: 60, delivered: false },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: false },
  { customerName: "Valentina", total: 240, delivered: false },
  { customerName: "Nico", total: 10, delivered: false },
];

const respuesta3 = orders.some(item => item.delivered === true);
console.log(respuesta3);

*/
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];
const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalOverlapping = require("date-fns/areIntervalsOverlapping");

// Esta es la nueva fecha que quiero agendar
const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};
console.log('isOverlap',isOverlap(newAppointment));
