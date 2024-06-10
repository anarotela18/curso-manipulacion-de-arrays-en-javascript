const totals = [1, 2, 3, 4, 5];

let acumulador = 0;
for(let i=0; i<totals.length; i++){
    acumulador = acumulador + totals[i];
}
console.log(acumulador);

const respuesta = totals.reduce((acumulador, item)=>acumulador+item,0);
console.log(respuesta);