document.getElementById("p1").style.color = "red"
document.body.style.background = 'black'
document.getElementById('div1').style.backgroundColor = 'green'

var nomehtml = document.getElementById('p1')
const nome = window.prompt('Diga seu nome')
nomehtml.innerHTML = `Olá, ${nome}. Bem-vindo!`