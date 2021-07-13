// construir objetos 
// representar um conjunto de dados?
// objeto = estrutura de dados
// representar o mundo real : atributos e métodos
//carro: propriedades (cor, marca, modelo)
// métodos: coisas que o carro faz: da partida, AC...

//cria classes e instancias


//meu primeiro objeto:

const pessoa = { nome: 'Ana', idade: 28, };
console.log(pessoa.nome);

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function() { return this.base * this.altura }
};

console.log(quadrado.calculaArea());

const agenda = {
    contatos: [
        { nome: 'contato1', telefone: 'telefone1', email: 'email1@teste.com' },
        { nome: 'contato2', telefone: 'telefone2', email: 'email2@teste.com' },
        { nome: 'contato3', telefone: 'telefone3', email: 'email3@teste.com' },
        { nome: 'contato4', telefone: 'telefone4', email: 'email4@teste.com' }
    ],
    adicionar: function(contato) { this.contatos.push(contato) }
}

console.log(agenda.contatos);