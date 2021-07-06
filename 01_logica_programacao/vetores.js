// lista ou sequencia de informações [manipular atraves de posições]
// no caso do JS é uma linguagem dinamica, podemos alterar;

let vetor = [10,20,30,40,50];
let vetor2=(vetor[1]+vetor[1]);
vetor[2]='trinta';
console.log(vetor[2]);
console.log(vetor2)

// em JS vetores sao objetos bastante flexiveis 
// nao precisamos necessariamente colocar elementos do
// mesmo tipo dentre de um vetor - pode misturar;

//criar vetor vazio
let vetor3 = [];

//adicionando elementos em um vetor utilizando loop
for (let i=0; i<10;i++){
    vetor3.push(i);
}
console.log(vetor3);

// percorrendo elementos de um vetor
let vetor4=[10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let i = 0; i < vetor4.length; i++){
    console.log(vetor4[i]);
}

// outra forma de percorrer vetor [for of]
for (let numero of vetor4){
    console.log(numero);
}

// outra forma de percorrer agora os indices do vetor [for in] 
// percorrer dois vetores com o mesmo tamanho por exemplo
for (let indice in vetor4){
    console.log(vetor4[indice]);
}

// matrizes: vetor de vetores, evolução dos vetores, uma tabela :)
let matriz =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let linha of matriz){
    for (let elemento of linha){
        console.log(elemento);
    }
}