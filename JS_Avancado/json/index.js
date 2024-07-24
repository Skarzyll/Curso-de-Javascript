/* const obj = '[{"nome":"caio", "secnome":"cezar"}, {"nome":"cassio", "secnome":"felipe"}]'
const pessoas = JSON.parse(obj)
//console.log(pessoas[1].nome, pessoas[1].secnome);

pessoas.forEach(element => {
    for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
            const values = element[key];
            console.log(key + ": " + values);
        }
    }
}); */




const pessoa = {nome : "caio", secnome : "cezar"}

const p = JSON.stringify(pessoa)

localStorage.setItem("j", p)


const text = localStorage.getItem("j")

const t = JSON.parse(text)

console.log(t);
