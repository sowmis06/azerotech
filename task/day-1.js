//variable
var price = 145
var product = "dairy milk"
var tax = 1.28
console.log("product:",product)
var total = price + tax 
console.log("Total:",total)

var fruitname = "Apple"
var count = 50
var price = 20
var total = count * price
console.log("fruitname:",fruitname)
console.log("total price:",total)


//post increment and decrement
let a=15
let b=a++
console.log(b)
console.log(a)
let c=12
let d=c--
console.log(c)


//pre increment and decrement
let e=13
let f=++e
console.log(f)



//functions
function hp()
{
    console.log("this is hp laptop")
}
hp()


// functions add
function add(x,y)
{
    var add=x+y
    console.log("ADD:",add)
}
add(10,23)

var factor= "Kamal"
var fplayer= "Dhoni"
var fmovie= "Sivam"
function favourite()
{
    console.log("Favourite Actor:",factor)
    console.log("Favourite player:",fplayer)
    console.log("Favourite movie:",fmovie)
}
favourite( )


//function area
function area(len,bre)
{
    var area=len*bre
    console.log("Area:",area)
}
var len=23
var bre=14
area(23,14)

//return function
function add(a,b)
{
    return a+b
}
var cat= add(15,25)
console.log("Add:",cat)



//if-else function
let homework = true
if (false)
{
    console.log("Great job")
}
else{
    console.log("finish ur homework before playing")
}


//logical and , or
var season = "winter"
if (season== "spring")
    {
      console.log("Enjoy the blooming flowers.")
}
else if(season == "summer")
{
    console.log("Have fun in the sun.")
}    
else if(season == "autumn")
{
    console.log("Admire the colorful leaves")
}
else
{
    console.log("Bundle up and stay warm")

}

