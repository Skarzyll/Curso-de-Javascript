function contar() {
    var inicio = document.getElementById('inp1').value
    var fim = document.getElementById('inp2').value
    var passo = document.getElementById('inp3').value
    var res = document.getElementById('divres')

    if (inicio == '' || fim == '' || passo == '') {
        res.innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        window.alert('Passo invalido! Considerando o PASSO 1.')
        passo = 1

        while (inicio < fim) {
            inicio = inicio + passo
            res.innerHTML = 'Contando: ' + `${a} ` + `${inicio}`
        }
    }
}