/* class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new pessoa('caio', 20);

console.log(pessoa1.idade); */


class Carro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }
}

( function(){
    const carro1 = new Carro('audi', 2020);
    const { nome: name, ano: age } = carro1

    console.log(name + ' ' + age);
}
)()