let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Calc() {
    let nameP = prompt('Qual é o produto que você está comprando?')
    let preco = prompt(`Qual o preço de ${nameP}?`)

    if (nameP == '' || nameP == 0 || preco == '' || preco == 0) {
        alert('Valor inválido ou não inserido. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let psemd = Number(preco)
        let pcomd = (10 * psemd) / 100
        let ptotal = psemd - pcomd

        res2.innerHTML = `Calculando o desconto de 10% para ${nameP}`
        res.appendChild(res2)

        res.innerHTML += `O preço original era ${psemd.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        })}.<br>`
        res.innerHTML += `Você acaba de ganhar ${pcomd.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        })} de desconto (-10%).<br>`
        res.innerHTML += `No fim, você vai pagar ${ptotal.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        })} no produto ${nameP}.`
    }
}