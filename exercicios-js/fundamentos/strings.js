const escola = "Cod3r"

console.log(escola.charAt(0) + " na posição 0");
console.log(escola.charAt(1) + " na posição 1");
console.log(escola.charAt(2) + " na posição 2");
console.log(escola.charAt(3) + " na posição 3");
console.log(escola.charAt(4) + " na posição 4");
console.log(escola.charAt(5) + " na posição 5"); // array começa contando do zero por isso o array na posição 5 é em branco.

console.log();

console.log(escola.charCodeAt(3));  // Pega o valor dele dentro da tabela ASCII
console.log(escola.indexOf('3'));   // vai mostrar o caracter na posição 3
console.log(escola.substring(1));       // vai colocar os caracteres a partir da posição 1 até o último
console.log(escola.substring(0, 3));    // vai do indíce 0 até o indíce 3 mas sem incluir o indíce 3.

console.log('Escola '.concat(escola).concat("!")); // maneira de concatenar strings
console.log(escola.replace(3, 'e')); // vai trocar o 3 pelo 'e'
console.log(escola.replace(/\w/g, 'e')); // /\we/g Expressão regular, substituia todos os digitos pela letra 'e'
console.log('Ana,Maria,pedro'.split(',')); // split corta ' na virgula ';
console.log('Ana,Maria,pedro'.split(/,/)); // regex corta ' na virgula ';
