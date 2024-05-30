import menssagem from "./module"

let res = document.getElementById('res')
let elem = document.createElement('h2')

function Calc() {
    let valMetros = prompt('Digite uma distância em metros (m).')

    if (valMetros === 0 || valMetros.value == '') {
        alert('Valor inválido. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let valM = Number(valMetros)
        let valQ = valM / 1000
        let valH = valM / 100
        let valDam = valM / 10
        let valDm = valM * 10
        let valC = valM * 100
        let valMm = valM * 1000
        
        elem.innerHTML = `A distância de ${valM.toLocaleString('pt-BR')} metros, corresponde a...`
        res.appendChild(elem)

        res.innerHTML += `${valQ.toLocaleString('pt-BR')} quilômetros (km)<br>`
        res.innerHTML += `${valH.toLocaleString('pt-BR')} hectomêtros (hm)<br>`
        res.innerHTML += `${valDam.toLocaleString('pt-BR')} decâmetros (Dam)<br>`
        res.innerHTML += `${valDm.toLocaleString('pt-BR')} decimetros (dm)<br>`
        res.innerHTML += `${valC.toLocaleString('pt-BR')} centímetros (cm)<br>`
        res.innerHTML += `${valMm.toLocaleString('pt-BR')} milímetros (mm)`
    }
}




document.getElementById("mod").innerHTML = menssagem();