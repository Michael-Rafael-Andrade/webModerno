let valor // não vou inicializar
console.log(valor);   // valor undefined

// console.log(valor2); // a variável não foi declarada no programa

valor = null;
console.log(valor); // ausência de valor
// console.log(valor.toString()); // Erro!

const produto = {}; // atribuindo objeto a constante produto 
    console.log(produto.preco); // resultado = undefined
    // console.log(produto.preco.a); // resultado = erro porque não tem a propriedade a

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evite atribuir undefined, atribua null

console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);

