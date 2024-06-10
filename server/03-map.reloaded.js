const orders = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
];
//console.log("Original: ", orders);

const respuesta = orders.map(item => item.total);
//console.log('Array with only total: ',respuesta);

const newArray = orders.map(orden =>{
    return{
        ...orden,
    tax: .04
    }
});
//console.log('Array with tax: ',newArray);

arrayProductos=[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 656,
    stock: 20,
  },
];
console.log('Original:',arrayProductos);
const newArrayProductos = arrayProductos.map(item => {
    return {
      ...item,
      taxes: parseInt((item.price * 19) / 100)
    };
} );
//console.log(newArrayProductos);
function addNewAttr(array){
   return array.map(item => {
    const copyItem = {...item};
    copyItem.taxes = Math.trunc(copyItem.price * 0.19);
    return copyItem;
   });
}

console.log(addNewAttr(arrayProductos));

