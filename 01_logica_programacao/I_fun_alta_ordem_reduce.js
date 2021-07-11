//O objetivo reduce é reduzir um vetor a um valor ou objeto.
// Por exemplo, somar todos os elementos de um vetor é reduzir ele a um valor.

const vetor = [1,2,3,4,5,6,7,8,9];
// somatorio
//estado: acumulador 
//item: elemento do vetor
//retorno: aculumo dos estados + elemento

const soma = vetor.reduce((estado,item) => estado + item, 0);
console.log(soma);


let vetor_alunos = [
    { nome : 'nome1', nota1 : 5, nota2 : 4 },
    { nome : 'nome2', nota1 : 4, nota2 : 3 },
    { nome : 'nome3', nota1 : 7, nota2 : 8 },
    { nome : 'nome4', nota1 : 2, nota2 : 7 },
    { nome : 'nome5', nota1 : 9, nota2 : 9 },
  ];

  const estadoInicial = { 
    somaNota1 : 0, 
    somaNota2 : 0, 
    qtdNota1 : 0, 
    qtdNota2 : 0,
  };

  const result = vetor_alunos.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
  }, estadoInicial);

  console.log(result);
  