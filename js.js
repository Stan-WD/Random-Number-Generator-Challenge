var userNumber = prompt("Please enter a number:");

userNumber = parseInt(userNumber);

var finalResult = Math.floor(Math.random()*userNumber)+1;

alert("The randomly generated number which is between 1 and " + userNumber + " is, " + finalResult + ".");

console.log("Program successfully completed!");