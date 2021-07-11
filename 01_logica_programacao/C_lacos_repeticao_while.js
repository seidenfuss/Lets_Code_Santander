//laços de repetição
// para nao repetir codigo copiando e colando
//while loop: enquanto a condição nao for atendida faça tal tarefa.

let count = 0;

// não necessariamente entra no laço, se a condição dentro for falsa, nunca entra no laço;

while (count<=100){
    console.log(count);
    count++;
}


// para obrigar que entre no laço pelo menos uma vez:
let count1 = 1;
do{console.log(count1);
count1++;
}while(count1<=100);

// util em situações em que nao sabemos o numero de repetições que queremos fazer;
