/* const user = {
    nome: 'caio',
    idade: 20,
    endereco: {
        rua: 'mariano',
        bairro: 'antonio'
    }
} */

// const { endereco: adress, idade: age } = user

/* console.log(
    JSON.stringify({ adress, age })
); */
/* 
function mostrarid({ idade: age, endereco: adress }) {
    return age + JSON.stringify(adress);
}; */

// console.log(mostrarid(user));

/* const array  = [1, 2, 3, 4, 5, 6, 7]

const [ first, , third, ...rest ] = array;

console.log(JSON.stringify({first, third, rest})); */

/* 
const name = 'caio'

const age = 20 


const user = {
    name,
    age
}

console.log(JSON.stringify(user)); */


const user = {
    //nome: 'caio',
    idade: 20,
    endereco: {
        rua: 'mariano',
        bairro: 'antonio',
        showstate() {
            return 'ok'
        },
    },
}    
/* console.log(user?.endereco?.showstate?.() ?? 'nao informado'); */

const key = 'nome'

console.log(user?.[key] ?? 'robertop');