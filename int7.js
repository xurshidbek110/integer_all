let number = 76;
let tens = Math.floor(number / 10);
let birliklar = number % 10;

document.getElementById("int7").innerHTML = "Raqamlari yig'indisi: " + (tens + birliklar) + "<br>" + "Raqamlari ko'paytmasi: " + tens * birliklar;