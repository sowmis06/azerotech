let products = [
    { name: "Laptop", price: 50000},
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Headphones", price: 3000 }
];

//filter
let great = products.filter(function(prod){
    return prod.price > 2000;
});
console.log(great);

//reduce
let total = products.reduce(function(sum,prod){
    return sum + prod.price;
},0);
console.log(total);

//filter & reduce
let expensive = products.filter(function(prod){
    return prod.price > 2000;
});
console.log(expensive);
 tot = expensive.reduce(function(sum,prod){
    return sum + prod.price;
},0);
console.log(tot);


