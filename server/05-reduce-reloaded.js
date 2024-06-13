/*
const items = [1, 3, 2, 3];
const rta1 = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});
console.log(rta1);
*/
const data = [
  { name: "Nicolas", level: "low" },
  { name: "Andrea", level: "medium" },
  { name: "Zulema", level: "hight" },
  { name: "Santiago", level: "low"  },
  { name: "Valentina", level: "medium" },
  { name: "Lucia", level: "hight" },
];
const respuesta = data
.map( item => item.level)
.reduce((obj,item) => {
  if(!obj[item]){
    obj[item] = 1;
  }else{
    obj[item] = obj[item] + 1;
  }
  return obj; 
},{});
//console.log(respuesta);


// Practical Excersice: count par range
// 1 - 5 = 5
// 6 - 8 = 23
// 9 - 10 = 5
const list = [];
for(let i=0; i<5; i++){
  list.push(Math.floor(Math.random() * 11));
}
// console.log("Array of numbers:", list);
const respuestaList = list.reduce((obj,value)=>{
  if(value < 6){
    obj["1-5"] = obj["1-5"] + 1;
  
  }else if(value < 9){
    obj["6-8"] = obj["6-8"] + 1;
 
  }else{
    obj["9-10"] = obj["9-10"] + 1;
  }
  return obj;
},{
  "1-5":0,
  "6-8": 0,
  "9-10": 0
});
//console.log("Result: ",respuestaList);

// Practices 2: Sum the total of array elements 
arrayOfNumbers = [1,1,10];
const respuestaArray = arrayOfNumbers.reduce((acumulador,item)=>{
  if(item){
    acumulador = acumulador + item;
  }
  return acumulador;
},0);
//console.log(respuestaArray); // Respuesta: 12
function calcSum(numbers){
  return numbers.reduce((acumulador,item)=>{ acumulador+= item; return acumulador; }, 0)
}
const valor = calcSum(arrayOfNumbers);
console.log(valor); // Respuesta: 12