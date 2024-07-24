class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new pessoa('caio', 20);

console.log(pessoa1.idade);