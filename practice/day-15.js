//objects
let book = {
    title: "Harry Potter",
    author: "J.K. rowling",
    price: 500
};
console.log(book);

//dot notation
console.log(book.title);

//bracket notation
console.log(book["title"])

//nested object
let stud = {
    name: "Sowmi",
    age: 23,
    address: {
        city: "Ussor",
        district: "Vellore"
    }
};
console.log(stud);
console.log(stud.address.city);
console.log(stud.address.district);


//keys & values
console.log(Object.keys(stud));
console.log(Object.values(book));

//multiple objects
let students = [
    {
        name: "Resh",
        age: 22
    },
    {
        name: "Nandy",
        age: 23
    },
    {
        name: "Saad",
        age:22
    }
];
console.log(students);

//execrise
let product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
};

//1
console.log(Object.keys(product));

//2
console.log(Object.values(product));

//3
console.log(product["brand"]);

//4
product.price = 45000;
console.log(product.price);

//5
product.stock = 10;
console.log(product);