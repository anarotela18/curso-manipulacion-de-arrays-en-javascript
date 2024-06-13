const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

// Vamos a trabajar con elementos mutables
const myProducts = [];

//console.log("products", products);
//console.log("myProducts", myProducts);
//console.log("-".repeat(10));

const productIndex = products.findIndex((item) => item.id === "🍔");
if(productIndex !== -1){
    // push muta el array original
    myProducts.push(products[productIndex]);
    // Si quiero eliminar el elemento encontrado del array original
    // primero debo obtener su posicion en este caso la hamburguesa esta en la posicion 1
    // y como segundo parametro le digo cuantos quiero eliminar a partir de esa posicion, y le digo que solo 1 solo quiero eliminar la hamburguesa.
    products.splice(productIndex,1)
}
//console.log("products", products);
//console.log("myProducts", myProducts);

// Ejemplo2: Update
const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
//console.log("original: ", productsV2);
 const updateHotCakes = {
   id: "🥞",
   changes: {
     price: 200,
     description: "delicioso",
   },
 };

//  Busca en el array productsV2 el elemento que tenga el ID de HotCakes
const productIndexHotCakes = productsV2.findIndex(
  item => item.id === updateHotCakes.id
);
//console.log("productIndexHotCakes: ", productIndexHotCakes); // 2
// Aqui modifico el array original y le coloco los nuevos valores
// Tener en cuenta usar el spread operator para:
// mantener los valores originales y modificar los nuevos valores
// caso contrario sobreescribiria todo
productsV2[productIndexHotCakes] = {
    ...productsV2[productIndexHotCakes], 
    ...updateHotCakes.changes
}
//console.log('modificado: ',productsV2);
/*
modificado:  [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  {
    title: 'Hot cakes',
    price: 200,
    id: '🥞',
    description: 'delicioso'
  }
]*/
// Ejercicio del reto 2
const productsOriginal = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
console.log('original: ',productsOriginal);
/*
original:  [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
*/
const updateHotCakesActualizado = {
  id: "🥞",
  changes: {
    title: 'Hot Cakes Modificado',
    price: 1000,
    description: 'Hot Cakes Descripcion actualizado'
  }
};
const productIndexOriginal = productsOriginal.findIndex(item =>item.id === updateHotCakesActualizado.id);
const productsArrayNuevo = productsOriginal.map((item) => {
  if (item.id === updateHotCakesActualizado.id) {
    return {
      ...item,
      ...updateHotCakesActualizado.changes,
    };
  }
  return { ...item };
});
console.log("productsArrayNuevo: ", productsArrayNuevo);
/*
productsArrayNuevo:  [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  {
    title: 'Hot Cakes Modificado',
    price: 1000,
    id: '🥞',
    description: 'Hot Cakes Descripcion actualizado'
  }
]
*/