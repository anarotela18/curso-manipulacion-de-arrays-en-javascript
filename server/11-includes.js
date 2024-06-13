// Ejercicio: Buscar si existe en el array el elemento: dog
const pets = ['cat','dog','bat'];
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}
//console.log('for: ', includeInArray);
const respuesta2 = pets.includes('dog');
//console.log('includes: ',respuesta2);

let array = ["ana", "santi", "nico", "anastasia"];
function filterByTerm(array, term) {
  let arrayTerm = array.filter(word =>{
    return word.includes(term);
  });
  return arrayTerm;
}
console.log(filterByTerm(array, "ana"));
