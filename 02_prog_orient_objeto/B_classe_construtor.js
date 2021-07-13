//reutilizar código para construir objetos
// contrutora de objetos
// passa para a classe: atributos (parametros) do objeto

class Pessoa {
    constructor(nome, idade) {
        //atributo da classe = parametro de entrada da função construtora
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Ana', 27);
pessoa1.idade = 28;
console.log(pessoa1);

const pessoa2 = new Pessoa('Maria', 28)
console.log(pessoa2);

// é muito recomendado sempre iniciar nomes de classes com letra maiúscula. 
//Além de manter o código mais organizado, facilita a leitura e 
//entendimento uma vez que cria uma distinção clara entre as classes e variáveis.