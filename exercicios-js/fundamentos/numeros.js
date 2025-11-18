const peso1 = 1.0;
const peso2 = Number('2.0'); // observe que 2.0 é considerado um valor inteiro = true mas se não for 2.0 ou seja (2.1, 2.2, 2.3, 2...., até 2.9) o resultado é false
// const peso2 = Number('2.1'); // observe que 2.0 é considerado um valor inteiro = true mas se não for 2.0 ou seja (2.1, 2.2, 2.3, 2...., até 2.9) o resultado é false

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // caso queira fixar 2 casas decimal após a virgula.
console.log(media.toString(2)); // .toString(2) = converte para um valor binário
console.log(typeof media);
console.log(typeof Number); // Numbe = função