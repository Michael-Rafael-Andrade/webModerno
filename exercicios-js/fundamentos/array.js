const valores = [7.7, 8.9, 6.3, 9.2]; // Em java tem o array fixo mas em JavaScript o array é heterogeneo e o tamanho é flexivel, não é fixo.
console.log(valores[0], valores[3]);
console.log(valores[4]); // Em outras linguagens daria erro mas em javaScript é undefined ou indefinido.
valores[4] = 10; // acrescentando o valor valores[4] = 10 então agora aumentará em uma unidade.
console.log(valores[4]);
console.log(valores);
console.log(valores.length); // Temos 5 elementos no array (length vai pegar a quantidade de elementos);

valores.push({id: 3}, false, null, 'teste'); // .push (adiciona novos valores no array)
console.log(valores);

console.log(valores.pop()); // vai pegar o último valor do array e tirar.
delete valores[0] // vai tirar o primeiro elemento do array valores[0] e remover.
console.log(valores);
valores.push("outroVAlor");
console.log(valores);
console.log(typeof valores);