const elements = [1,1,2,2];
const otherElements = [3, 3, 4, 4];

// Se debe usar el ... el spread operator 
// ya que elements se esta haciendo referencia en memoria
const newArrayFor  = [...elements];

for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArrayFor.push(element)
}
//console.log('for: ',newArrayFor);
/* Respuesta: for:  [
  1, 1, 2, 2,
  3, 3, 4, 4
]
*/
const newArrayConcat = elements.concat(otherElements);
//console.log("concat: ", newArrayConcat); 
/* Respuesta: concat:  [
  1, 1, 2, 2,
  3, 3, 4, 4
]
*/

// Si estas trabajando con un arrays de Objs igual una forma de copiar cada elemento sin la referencia podría ser:
//const newArray = myArray.map(a => ({…a}));


// Otra opcion podria ser con el spread operator
// Pero se debe tener cuidado porque solo lo va a hacer bien 
// si es que es un array
const newArraySpreadOperator = [...elements, ...otherElements];
//console.log('newArraySpreadOperator: ',newArraySpreadOperator);

const newArraySpreadOperatorString = [...elements,...'random'];
//console.log('String: ',newArraySpreadOperatorString); 
/* String:  [
  1,   1,   2,   2,   'r',
  'a', 'n', 'd', 'o', 'm'
]*/


// Ejemplo de uso con push
// De esta manera inserta directamente el array de otherElements
//elements.push(otherElements);
//console.log("elements: ", elements); 
/*
elements:  [ 1, 1, 2, 2, [ 3, 3, 4, 4 ] ]
*/
// De esta manera inserta cada uno de los items
elements.push(...otherElements);
console.log("elements ... : ", elements); 
/*
elements ... :  [
  1, 1, 2, 2,
  3, 3, 4, 4
]
  */