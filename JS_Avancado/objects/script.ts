function pessoa (nome, secnome, idade, pisca) {
    this.firstname    = nome
    this.secondname   = secnome
    this.age          = idade
    this.aye          = true
}

pessoa.prototype.fullname = function() {
    return this.firstname + " " + this.secondname;
};

const caio = new pessoa("caio", "cezar", 20, true);

console.log(caio.fullname());
