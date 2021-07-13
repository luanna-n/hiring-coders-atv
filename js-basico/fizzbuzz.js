//Se divisivel por 3 => Fizz
//Se divisivel por 5 => Buzz
//Se divisivel por 3 e 5 => FizzBuzz
//Não é numero => Não é um número
//Não é divisivel nem por 3 nem por 5 => Entrada

let resultado = fizzBizz(7);
console.log(resultado);

function fizzBizz(entrada) {
    if (isNaN(entrada))
        return "Não é um número";
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada % 5 === 0)
        return "Buzz";

    return entrada;
}