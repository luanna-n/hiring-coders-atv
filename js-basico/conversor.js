/*
function converterCelsiusFahrenheit(celsius) {
    fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

let resultado = converterCelsiusFahrenheit(30);
console.log(resultado + " F");
*/


function convertToFahrenheit(value) {
    return (value * 1.8) + 32;
}

let resultado = convertToFahrenheit(30);
console.log(`O valor em Fahrenheit é ${resultado} F`);