{
    {
        {
            {
                var sera = 'Será???';
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste(){
    var local = 123; // variável definido dentro da função só fica visível dentro do escobo da função ou seja somente dentro do abrir e fechar destas chaves. {}
    console.log(local);
    // console.log(global.local);
}

teste();
// console.log(local); // apresenta erro porque não reconhece a variável local instalada.