

let sinal = 'vermelho';

switch(sinal){
    case 'verde':
        console.log('pode passar')
        break;
    case 'amarelo':
        console.log('prestes a fechar, cuidado...')
        break;
    case 'vermelho':
        console.log('fechado, não passe')
        break;
    default:
        console.log('sinal inválido');
}