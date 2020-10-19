const product = {count: 3, price: 12.55, type:"ropa"};

let total;

if (product.count > 0){
    total = product.count * product.price;
}else {
    total = 0;
}
console.log (total);

let totalIva 
switch(product.type){
    case "alimentacion": totalIva = 0.10; break;
         case "libro": totalIva = 0.04; break;
             default: totalIva =0.21; break;
}

console.log (totalIva);

let iva;
iva = total * totalIva;
console.log(iva);

let totalFinal;
totalFinal = total + iva;
console.log(totalFinal);