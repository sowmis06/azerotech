//Array 
let names = ["Sowmi","Resh","Nanthini"];
console.log(names);

//push
names.push("Ismail");
console.log(names);

//pop
names.pop(2);
console.log(names);

//unshift --> values addes at first
names.unshift("jaya");
console.log(names);

//shift --> removes the first value
names.shift();
console.log(names);

//splice --> replace the value
names.splice(1,1,"ismail");
console.log(names);



// Shopping list
let shoppinglist = ["Milk","Dairy Milk","Soap","Shampoo"];
console.log("SHOPPING LIST");
console.log("-------------");
console.log("Intial List");
//foreach and arrow function
shoppinglist.forEach((item,index) =>{
    console.log(index + 1 , ". ",item);
}
)
//push
shoppinglist.push("Wheat Flour");
console.log("\nAfter Push");
//for loop
for(let i=0; i<shoppinglist.length; i++)
{
    console.log(i + 1,". ",shoppinglist[i]);
}

//pop
shoppinglist.pop();
shoppinglist.forEach((itmes,index) =>
{
    console.log(index + 1, ". ",items);
});