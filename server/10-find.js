// Ejercicio: revisa si existe el elemento 30
const numbers = [1, 30, 49, 29, 10 , 13];

let respuesta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        respuesta = element;
        break;
    }
}
console.log('for:',respuesta);

const respuesta2 = numbers.find(item => item ===30);
console.log('find:',respuesta2);


// Ejercicio: Revisa si existe el id:Hamburguesa, si existe devuelve el objeto que lo contiene
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const respuestaHamburguesa = products.find((producto) => producto.id == "🍔");
console.log('Hamburguesa: ', respuestaHamburguesa);

const respuestaHamburguesaIndex = products.findIndex((producto) => producto.id == "🍔");
console.log("HamburguesaIndex: ", respuestaHamburguesaIndex);