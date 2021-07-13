let novaString = ""; //cria uma variável nova

//IMPRIME NA ORDEM INVERSA
function reverteString(str) { //recebe um único parâmetro
    for (let i = str.length - 1; i >= 0; i--) { //vai tratar a string como um array e olhar para seus elementos do último até o primeiro
        novaString += str[i] //atribui valor a variável, que aumenta a cada iteração
        console.log(novaString); //vai imprimir uma linha para cada iteração
    }
    //console.log(novaString); //aqui fora, imprime apenas o resultado final
}

//IMPRIME NA ORDEM NORMAL
function normalString(str) {
    for (let i = 0; i <= str.length - 1; i++) { //vai tratar a string como um array e olhar para seus elementos do último até o primeiro
        novaString += str[i] //atribui valor a variável, que aumenta a cada iteração
        console.log(novaString); //vai imprimir uma linha para cada iteração
    }
    //console.log(novaString); //aqui fora, imprime apenas o resultado final
}


let resultado = reverteString("Como voce vai");
let resultado2 = normalString("Como voce vai");