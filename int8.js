let x = 85;
let tens = Math.floor(85 / 10);
let units = 85 % 10;
let reversedNumber = units * 10 + tens;

document.getElementById("int8").innerHTML = "Reserved number: " + reversedNumber;