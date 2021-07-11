// funções que recebem outras como parâmetro
//manipula cada item de um vetor

// transformas string to number
const vetor = ["10", "20", "30", "40"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

// ao quadrado
const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);

// dobro
const vetor4 = [1,2,3,4,5,6];
const dobro = (item)=>2*item;
const vetorDobrado = vetor4.map(dobro);
console.log(vetorDobrado);

// minusculas -> maiusculas
const vetor5 = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor5.map(toUpper);
console.log(maiusculas);

