//json => JavaScript Object Notation. json formato textual  OBSERVAÇÃO
const prod1 = {
    casa: 'azul', //Posso inserir dados dentro de objeto desta forma
};  // Par de chaves mostra que é um objeto
prod1.nome = 'Celular Ultra Mega';
prod1.preco = '4998.90';
prod1['Desconto Legal'] = 0.40;  // evitar atributos com espaço
 
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { // objeto dentro de outro objeto
        blabla: 1, // objeto dentro de outro objeto
        obj: {
            blabla: 2,
        }
    }
}

console.log(prod2);