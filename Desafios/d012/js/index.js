let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Very() {
    let pantes = prompt('Qual era o preço anterior do produto?')
    let patual = prompt('Qual é o preço atual do produto?')

    if (pantes == '' || patual == '') {
        alert('Valores não digitados. Por favor, tente novamente')

    } else {
        res.innerHTML = ''
        let valantes = Number(pantes)
        let valatual = Number(patual)

        let promo = Math.abs(valantes - valatual)
        let porc = Math.abs((promo / valantes) * 100)
        let porcc = ((valantes - valatual) / valantes) * 100

        res2.innerHTML = 'Analisando os valores'
        res.appendChild(res2)

        if (valantes < valatual) {
            res.innerHTML += `O produto custava ${valantes.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })} e agora custa ${valatual.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}.<br>`
            res.innerHTML += 'Hoje o produto está mais caro.<br>'
            res.innerHTML += `O preço subiu ${promo.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })} em relação ao preço anterior.<br>`
            res.innerHTML += `Uma variação de ${porc.toLocaleString('pt-br')}% pra cima.<br>`

        } else {
            res.innerHTML += `O produto custava ${valantes.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })} e agora custa ${valatual.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}.<br>`
            res.innerHTML += 'Hoje o produto está mais barato.<br>'
            res.innerHTML += `O preço caiu ${promo.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })} em relação ao preço anterior.<br>`
            res.innerHTML += `Uma variação de ${porcc.toLocaleString('pt-br')}% pra cima.<br>`
        }
    }
}