var numero = 1;
{
    var numero = 2;  // Só existe escopo para delimitar a variável dentro da função
    console.log('dentro =', numero);
}
console.log('fora =', numero);