/* function mostnome() {
    console.log('caio');
}

function mostidade() {
    console.log(20);
}

mostnome()
mostidade() */
























/* const array = [1, -1, 2, -2, 3, -3, 4, -4]

const posarray = pegarx(array, (x) => x >= 0)

console.log(posarray);

function pegarx(numbers, callback) {

    const myarray = []

    for (const x of numbers) {
        if (callback(x)) {
            myarray.push(x)
        }
    }
    return myarray
} */






/* const array = [1,2,3,4,5,-5,-4,-3,-2,-1]

const negarray = pegarnum(array, (x) => x <= 0)
const posiarray = pegarnum(array, (x) => x >= 0)

function pegarnum(numbers, callback) {
    const arraytemp = []

    for (const x of numbers) {
        if (callback(x)) {
            arraytemp.push(x)
        }
    }
    return arraytemp
}

console.log('array negativo = ' + negarray);
console.log('array negativo = ' + posiarray); */



/* let mypro = new Promise((resolve, reject) => {
    let x = 0

    if (x == 0) {
        resolve('ok')
        
    } else {
        reject('not ok')
    }
})

mypro
    .then(res => {
        console.log(res);
    })
    .catch(erro => {
        console.error(erro);
    }); */

//
try {
    /* (
        function () {
            let c = 'caio'
        }
    )() */

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(resjson => resjson.slip)
    .then(slip => {
        let id = slip.id
        let advice = slip.advice
        
        console.log(`${id}: "${advice}"`);
    })

} catch (error) {
    console.error(error);
}
