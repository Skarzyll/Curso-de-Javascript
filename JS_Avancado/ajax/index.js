const cabeca = document.getElementById("h1")
const btn = document.getElementById("btn")

btn?.addEventListener("click", function() {
    change()
})

const myt = new XMLHttpRequest();


function change() {

    myt.onload = function () {
        cabeca.innerHTML = myt.responseText
    }

    myt.open("get", "./text.txt")
    myt.send()
}