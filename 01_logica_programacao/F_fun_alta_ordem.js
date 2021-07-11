// funçoes que sao parametros de outras funções

const subtrair = (a,b)=>(a-b);
const aplicaOperação = (a,b,operação)=> operação(a,b);

let resultado = aplicaOperação(1,6,subtrair);
console.log(resultado);

// a função somarX, que recebe x de parâmetro 
// e retorna uma função que recebe y e retorna x+y.

const somarX = (x) => (y) => x+y;

const somar2 = somarX(2);
console.log(somar2(5));

const somar3 = somarX(3);
console.log(somar3(5));

