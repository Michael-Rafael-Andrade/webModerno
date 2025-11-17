// let = let        =>  serve para armazenar dados
// var = variável   =>  serve para armazenar dados

let preco = 19.90;
let desconto = 0.40;

console.log(19.90 * 0.60);

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto); // parênteses tem prioridade
// console.log(preco * (1 - desconto)); // parênteses tem prioridade

casa = "azul"; // Observe que em javaScript você até pode criar uma variável sem incia-la com o nome var, let ou const mas isto não é aconselhável.
console.log(casa);

// Usar concatenação
let nome = "Caderno";   // String (Texto) -> sequencia de letras ou símbolos
let categoria = "Papelaria";
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto);

console.log(1+1); // resposta = 2;
console.log("1" +1); // Observe que a resposta é 11 porque o javaScript fez uma concatenação do 1 string + 1 ficando a resposta como 11.

