// Ejercicio: Concatenar los elementos con un separador '--'
const elements = ['fire','air','water'];
let respuestaFinal = '';
const separador = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if(index == elements.length -1){
        respuestaFinal = respuestaFinal + element;
    }else{
        respuestaFinal = respuestaFinal + element + separador;
    }
}
//console.log("for:", respuestaFinal); // for: fire--air--water

const respuestaJoin = elements.join('--');
//console.log("join: ",respuestaJoin);
 

// Ejercicio de split
const title =  'Curso de manipulacion de arrays';
//const urlFinal = title.split(" "); //Output: [ 'Curso', 'de', 'manipulacion', 'de', 'arrays' ]
//const urlFinal = title.split(" ").join('-'); //Output: Curso-de-manipulacion-de-arrays
const urlFinal = title.split(' ').join('-').toLowerCase(); 
console.log(urlFinal); //Output: curso-de-manipulacion-de-arrays