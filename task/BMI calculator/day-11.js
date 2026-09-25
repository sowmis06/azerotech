//age

function calculateAge(){
let birthdate = Number(document.getElementById("birthdate").value);
let currentdate = Number(document.getElementById("currentdate").value);
let age = currentdate - birthdate;
document.getElementById("result").innerHTML = "Ur age is" + age;
}

//BMI
function calculateBMI(){
let weight = Number(document.getElementById("weight").value);
let height = Number(document.getElementById("height").value);
let heightMeter = height / 100;
let BMI = weight / (heightMeter*heightMeter);
BMI = BMI.toFixed(2);
let bmiresult =" ";

//if else
    if(BMI < 18.5)
    {
        bmiresult = "Under Weight";
    }
    else if(BMI < 25)
    {
      bmiresult = "Normal Weight";  
    }
    else if(BMI < 30)
    {
        bmiresult = "Overweight";
    }
    else
    {
        bmiresult = "Obesity";
    }
document.getElementById("BMIresult").innerHTML = "Ur BMI is" + BMI + "<br>" + bmiresult;
}