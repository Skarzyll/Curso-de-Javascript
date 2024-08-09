/* function mydis(resul) {
    console.log(resul);
}

function calc(n1, n2, callback) {
    let res = n1 + n2
    callback(res)
}

console.log(calc(1, 2, mydis)); */


/* 
const cabeca = document.querySelector('header')

function mydi(param) {
    cabeca.innerHTML = param
}

function cal(n1, n2, call) {
    let res = n1 - n2
    call(res) 
}

cal(10, 1, mydi) */

//console.log(cal(2, 1, mydi));



/* function welcomeUser(username) {
    console.log(`Welcome ${username}`);
}

function getName(callback) {
    let name;
    setTimeout(function() {
        name = 'joa'
        callback(name)
    }, 500);
}


getName(welcomeUser) */


/* function getName(callback) {
    let name
    setTimeout(() => {
        name = 'caio'
        callback(name);
    })
}

function getage(username, callback) {
    let age 
    setTimeout(function() {
        age = 20;
        callback(username, age)
    }, 300)
}

getName(function (username) {
    getage(username, function(username, age){
        console.log(username, age);
    })
}) */



/* let result = 0;

function getValue(callback) {
    setTimeout(function() {
        callback()
        console.log(result);
    }, 500);
}

getValue(function() {
    result = 5
}); */




let a = 2;
let b = 2;

function multiply() {
    b = a * b;
    console.log(`The value of b = ${b}`);
}

function getValue(callback) {
    setTimeout(function() {
        a = 5;
        callback()
    }, 500);
}

getValue(multiply);