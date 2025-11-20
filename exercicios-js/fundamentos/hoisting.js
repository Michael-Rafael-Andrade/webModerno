// hoisting = içar, içamento, jogar para cima a variável.

// var a = 2;  // acontece o içamento a variável a é jogada para cima. 
console.log('a =', a);  // valor é indefinido
var a = 2;
// var a = 2;
console.log('a = ', a);

function teste() { // O efeito é o mesmo fora da função
    console.log('a =', a);  // valor é indefinido
    var a = 2;
    // var a = 2;
    console.log('a = ', a);
}

teste()

let b = 2;
console.log('b =', b);