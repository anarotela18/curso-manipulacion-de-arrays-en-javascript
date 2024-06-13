const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < matriz.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
//console.log('for: ',newArray);
/*
 Respuesta: for:  [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
const matriz2 = [
  [1, 2, 3],
  [4, 5, 6,[1,2],[1,2]],
  [7, 8, 9],
];

// Solucion con flat
// Se debe indicar el nivel de profundidad
const respuestaFlat = matriz2.flat(3);
//console.log('flat: ',respuestaFlat);

// Solucion al reto
const matrizReto = [ 
    0,
  [1, 2, 3],
  [4, 5, [6, 7, 8, [9,10]]],
  [[11 , 12, [13, 14], 15], 16],
];

function aplanarMatriz(matrizR) {
  let array = [];
  for(element of matrizR){
    if(Array.isArray(element)){
        array = array.concat(aplanarMatriz(element));
    }else{
        array.push(element);
    }
  }
  return array;
}

const newArrayReto = aplanarMatriz(matrizReto);

console.log('Reto:',newArrayReto);
/*
Reto: [
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16
]
*/