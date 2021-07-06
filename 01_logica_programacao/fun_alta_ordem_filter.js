
const vetor = [1,2,3,4,5,6,7,8,9,10];
//const pares = vetor.filter(x=> x%2 === 0);
const pares = vetor.filter(function(x){return x%2 == 0});
console.log(pares);


const vetor1 = [10,4,5,6,2,7,3,8,9,1];

const vetor2 = vetor1.filter(x => x < 8 && x > 3);
console.log(vetor2);