let inpn = document.getElementById('inpnumber')
let res = document.getElementById('res')
let res2 = document.getElementById('res2')
let nmbs = []

function add() {
    if (inpn.value == 0 || inpn.value > 100 || nmbs.includes(inpn.value)) {
        alert('Valor inválido ou já adicionado na lista.')

    } else {
        res.innerHTML = ''
        nmbs.push(inpn.value)

        for (const m in nmbs) {
            res.innerHTML += `valor ${nmbs[m]} adicionado.<br>`
        }
    }
    res2.innerHTML = ''
}

function finish() {
    if (res2.innerHTML == '') {
        alert('Adicione valores antes de finalizar!')
        
    } else {
        let tamanho = nmbs.length
        res2.innerHTML = `Ao todo, temos ${tamanho} números cadastrados<br>`

        let maior = myMax(nmbs)
        res2.innerHTML += `O maior valor informado foi ${maior}<br>`

        function myMax(valMax) {
            return Math.max.apply(null, valMax)
        }

        let menor = myMin(nmbs)
        res2.innerHTML += `O menor valor informado foi ${menor}<br>`

        function myMin(valMin) {
            return Math.min.apply(null, valMin)
        }

        res2.innerHTML += `Somando todos os valores, temos ${nmbs.reduce(mySoma, 0)}<br>`
    
        function mySoma(valSoma, total) {
            return valSoma + Math.round(total)
        }

        res2.innerHTML += `A média dos valores digitados é ${nmbs.reduce(myDiv, 0)}<br>`

        function myDiv(valDiv, total2) {
            return (valDiv + Math.round(total2)) / 2
        }
    }
}