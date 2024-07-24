const d = document.getElementById("conso")
const btns = document.getElementById("btn")

btns?.addEventListener('click', function() {
    chang()
})

const xmlss = new XMLHttpRequest();

function chang() {
    
    xmlss.onload = function() {

        let p = JSON.parse(xmlss.responseText)
        
        d.innerHTML = p.pessoa.nome
    }

    xmlss.open("GET", "./j.json")
    xmlss.send()
}