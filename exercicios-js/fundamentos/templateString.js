const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
// No templatestring posso quebrar a linha no meio.
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);

// colocar exprssão matemática dentro do backtick ou templatestring
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)  // usando backtick tem que usar o ${}