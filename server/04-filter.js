const words = ['spray','limit','elite','exuberant'];
//console.log('original: ', words);


const newArrayPush = [];
for(let i=0; i<words.length;i++){
    if(words[i].length>= 6){
        newArrayPush.push(words[i]);
    }
}
//console.log('NewArray Push:',newArrayPush);

const newArrayFilter = words.filter(item=> item.length>=6);
//console.log('NewArray filter: ',newArrayFilter);

const orders = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
  { customerName: "Nico", total: 10, delivered: false },
];
const ordersDelivered = orders.filter(orden => orden.delivered && orden.total >=100)
console.log('original:',orders);
console.log('Orders Delivered:',ordersDelivered);

const search = (parametro) => {
    return orders.filter(item=> item.customerName.includes(parametro))
}
console.log(search('Nico'));