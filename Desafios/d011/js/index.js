let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Very() {
    let ano = prompt('Qual é o ano que você quer verificar?')

    if (ano == '' || ano.value == 0) {
        alert('Valor inválido ou não digitado. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let valAno = Number(ano)

        res2.innerHTML = `Analisando o ano de ${valAno}`
        res.appendChild(res2)

        if (valAno % 4 == 0) {
            res.innerHTML += `O ano de ${valAno}`
            res.innerHTML += ` <strong style="background-color: #4DEC3C;">É BISSEXTO</strong> \u2705`
            
        } else {
            res.innerHTML += `O ano de ${valAno}`
            res.innerHTML += ` <strong style="background-color: #FF1F1F;">NÃO É BISSEXTO</strong> \u274C`
        }
    }
}