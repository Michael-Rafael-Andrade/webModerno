// Função sem retorno - JavaScript
// Função é como um trecho de código ou blooco de código nomeado que você pode utilizar várias vezes dentro do código.


// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
    // return (a + b);
}

imprimirSoma(2,3);
imprimirSoma(2); //  Resultado not a number. porque não foi passado o segundo parâmetro
imprimirSoma(2,3,4,5,6,7,8); // Observe que pega apenas os dois parâmetros informado e ignora os outros parametros ex: 3, 4, 5, 6 ... ,8.
// console.log("O resultado da soma da função é = " + imprimirSoma(2,3));

function soma(a, b = 1){
    return a + b;
}

soma(2,3);
console.log(soma(2,3));
console.log(soma(2));
console.log(soma()); // not a number porque o primeiro a = não foi tratado

