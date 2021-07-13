//restringindo tipo de atributo

class Quadrado {
    constructor(base, altura) {
        if (isNaN(base) || isNaN(altura)) throw "informação não numérica";
        this.base = base; //necessario
        this.altura = altura; //necessario
        this.cor = undefined; //atributo opcional

    }
}

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'blue';
console.log(quadrado);