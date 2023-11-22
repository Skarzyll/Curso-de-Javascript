let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Convert() {
    let prom = prompt('Quantos R$ você tem na carteira?')

    if (prom == '') {
        alert('Valor inválido ou não inserido. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let reais = Number(prom)
        let dol = reais * 0.203842

        res2.innerHTML = `O seu ${reais.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })}, corresponde a..`
        res.appendChild(res2)

        res.innerHTML += `${dol.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD'
        })} (dólares).`
    }
}