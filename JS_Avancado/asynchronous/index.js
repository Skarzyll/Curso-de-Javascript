/* function mydis(resul) {
    console.log(resul);
}

function calc(n1, n2, callback) {
    let res = n1 + n2
    callback(res)
}

console.log(calc(1, 2, mydis)); */



const cabeca = document.querySelector('header')

function mydi(param) {
    cabeca.innerHTML = param
}

function cal(n1, n2, call) {
    let res = n1 - n2
    call(res) 
}

cal(10, 1, mydi)

//console.log(cal(2, 1, mydi));



