//para tornar um codigo reutilizavel e ainda dependendo de parametros

//definindo uma função
function escreva(texto){
    console.log(texto);
}

// chamar a funcao

escreva('oláaááááá');
escreva('meu segundo parametro');

// analogo com uma função matematica

function somar(a,b){
    return a+b;
}
console.log(somar(2,5));

// funcao anonima salva dentro da variavel somar
const somar1 = function(a,b){return a+b;}
console.log(somar1(1,3));

//função flecha (arrow function)
const somar2 = (a,b) => a+b;
console.log(somar2(4,6));

