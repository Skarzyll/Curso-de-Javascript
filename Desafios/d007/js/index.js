let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Convert() {
    let prom = prompt('Quantos R$ você tem na carteira?')

    if (prom == '') {
        alert('Valor inválido ou não inserido. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let reais = Number(prom)
        let dol = reais * 0.20

        res2.innerHTML = `O seu R$ ${reais.toLocaleString('pt-br')}, corresponde a..`
        res.appendChild(res2)

        res.innerHTML += `${dol.toLocaleString('pt-br')} US$`
    }
}