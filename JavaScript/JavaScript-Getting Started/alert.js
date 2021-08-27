"use strict";

alert("This is an alert message")

let name1= prompt("The prompt message is: \nPlease enter your name:")
console.log("You have entered " + name1)

let subject = prompt("Please enter your selected subject name","JavaScript")
console.log("Your selected subject is " + subject)

let a = prompt("Enter a number to get its square value")
let b= a*a
alert("Square value of " + a + " is : "+ b)

let output = confirm("Confirmation message: \nReady to move to next demo?")
if(output){
    console.log("You pressed OK")
}
else{
    console.log("You pressed cancel")
}

