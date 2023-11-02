function verefy() {
    var pais = document.getElementById('inptext').value
    var div = document.getElementById('div')

    if (pais === 'BR' || pais === 'br' || pais === 'brasileiro' || pais === 'Brasileiro') {
        div.innerHTML = `Você é brasileiro!`
    } else if (pais === 'FR' || pais === 'fr' || pais === 'Francês' || pais === 'francês') {
        div.innerHTML = `Você é Francês!`
    } else {
        div.innerHTML = `Você é estrangeiro!`
    }
}