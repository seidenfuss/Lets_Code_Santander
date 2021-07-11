// variáveis
// o computador reserva um espaço na sua memoria RAM para armazenas a informação (zeros e uns);
// cada tipo de informação ocupa um espaço diferente de memória, 
//algumas linguagens lidam de forma distinta com esse armazenamento da informação;
// de maneira que quando você inicia uma variável você precisa declarar o tipo que ela é;

//texto: string
//numero: number, int, float
//boolean: True, False

//linguagens estáticas: não permite que o tipo da variavel se modifique ao longo do código;
// linguagens dinâmicas: permitem modificar o tipo da variavel ao longo do código; (caso de javaScript);

// declarando variavel JS:
//JS não exige que declare o tipo da variável;

//var a = 10; //int
//var a = 13.5; //float
//var c = "Ana"; //string
//var d = false; //bool
//d = 15;

//let vs var: escopo da variavel
// var: escapa do seu escopo - se dec. dentro da função pode acessar fora da função;
// pode ter conflito caso chame uma variavel x fora da função e um outro x dentro da função (variavel global?)
//let: só acessa dentro do seu escopo - seria uma variavel local?

let a = 10;
let b= 15.6;
let c = "aninha";

a = function(){}; // declarar uma função em um variável;
let e;

console.log(e); // mostra no terminal o que está dentro dos parentesis;

let x=null; // não guarda informação

const pi = 3.1415;

// pi= 3.14 // vai dar erro pq nao pode redefinir uma constante
