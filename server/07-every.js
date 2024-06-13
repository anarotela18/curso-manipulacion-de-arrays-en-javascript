// Si es que todos los elementos del array son menores o iguales de 40
const numbers = [1, 30, 49, 29, 10 ,13];

let respuesta = true;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        respuesta = false
    } 
}
console.log('for: ', respuesta);

const respuesta2 = numbers.every( item => item <=40);
console.log("every: ", respuesta2);


// Ejercicio del reto: 
// Recorrer este array de equipo con every y preguntar si todos los 
// jugadores son menores a 15 años
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
    age: 19,
  },
];
const admitir = team.every( jugador => jugador.age<15);
console.log(admitir);

if (admitir === false) {
  console.log("Equipo no admitido! hay algunos jugadores mayores a 15 años");
} else {
  console.log("Equipo admitido");
}

const arrayEjemplo = [2, 4, 6, 8];
const respuestaPar = arrayEjemplo.every(item=> item%2===0)
console.log('Respuesta par:',respuestaPar);