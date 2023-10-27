var nome = window.prompt('Digite seu nome')

document.write(`O seu nome: ${nome} tem ${nome.length} letras. Seu nome em maiusculo: ${nome.toUpperCase()}. Seu nome em minusculo: ${nome.toLowerCase()}.`)

var n1 = 1545.5

document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))