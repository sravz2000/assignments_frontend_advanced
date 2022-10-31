var proModule= require("./productModule");
let p1=proModule.getProducts();
for(let item  of  p1)
{
product1=`Product Number :  ${item.prono},   Product Name  :  ${item.pname} , Category :  ${item.pcat}, Price : ${item.price}`;
console.log(product1);
}

let p2=proModule.getProductsByCat();
console.log(p2);

let p3=proModule.getProductsByPrice(10000,30000);
console.log(p3);

let p4=proModule.getProductsByOutOfStock();
console.log(p4);

let p5=proModule.getProductsByInStock();
console.log(p5);