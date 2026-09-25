const score = 100;
let grade;
//if else statement
if (score >= 90)
{
  console.log("A Grade")
}
else if(score >= 75)
{
  console.log("B Grade")
}
else if(score >= 60)
{
  console.log("C Grade")
}
else if(score >= 45)
{
  console.log("D Grade")
}
else
{
  console.log("'Fail'")
}

//switch statement
switch(grade)
{
  case "A" :  
        console.log("Excellent V V good")
    break;
  case "B" :
        console.log("V Good")
    break;
  case "C" :
      console.log("Try to improve")
    break;
  case "D" :
      console.log("Need hard work")
    break
  default:
     console.log("V V bad")
}

//for loop

// pattern *
let num = " ";
for (i=1; i<=10; i++)
{
    console.log(num);
    num = num + "*" ;
}

//reverse loop
let n = " ";
for (a=10; a>=0; a--)
{
    n = n + a + " ";
}
console.log(n);

//while loop
let number = 1;
while (number<=10)
{
    console.log(number);
    number++;
}

//pattern in while loop
let b = " ";
let p = 1;
while (p<= 10)
{
    b = b + " * " ;
    console.log(b);
    p++;
}``