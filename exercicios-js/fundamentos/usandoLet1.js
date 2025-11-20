// var numero = 1;
let numero = 1; // resultado é o mesmo que usar o var.
{
    // let numero = 2;
    let numero2 = 2;
    console.log('dentro =', numero); // Vai dar a preferência para a variável que estiver dentro do escopo menor mas se não tiver ele vai realizar a busca da variável em todo documento e retornar o valor se encontrar;

}
console.log('fora =', numero);

// var = tem escopo global e de função
// let = tem escopo global, função e de bloco