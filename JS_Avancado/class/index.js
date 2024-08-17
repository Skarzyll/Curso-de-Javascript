/* class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new pessoa('caio', 20);

console.log(pessoa1.idade); */


/* class Carro {
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
)() */

const Pessoa = function(nome, idade, altura) {

    this.nome = nome;
    this.idade = idade;
    this.altura = altura;


    this.Sou = function() {
        console.log(`sou ${this.nome} tenho ${this.idade} anos, mais ou menos ${this.altura} de altura ${this.trabalho} e sou ${this.cargo}`);
    }

}

const Trabalho = function(nome, idade, altura, trabalho, cargo) {
    const trabalhador = new Pessoa(nome, idade, altura, trabalho, cargo);
    trabalhador.trabalho = trabalho
    trabalhador.cargo = cargo
    Object.setPrototypeOf(this, trabalhador)
}

const pessoa1 = new Trabalho('caio', "20", 1.7.toFixed(1), 'pedreiro', 'chefe');

console.log(pessoa1);

pessoa1.Sou()






/* (
    function() {
        const a = ["*", "**", "***", "****", "*****"]
        
        for (let b = 0; b < a.length; b++) {
            const element = a[b];
            console.log(`${element}
            `);
        }
    },

    function () {
        let a = ""

        while (a.length <= 6) {
            console.log(a);
            a += "*"
        }
    }
    
)() */
