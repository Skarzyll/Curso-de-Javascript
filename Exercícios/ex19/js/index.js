function contar() {
    var inicio = document.getElementById('inp1')
    var fim = document.getElementById('inp2')
    var passo = document.getElementById('inp3')
    var res = document.getElementById('divres')

    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        res.innerHTML = 'Impossível contar!'

    } else if (passo.value == 0) {
        window.alert('Passo invalido! Considerando o PASSO 1.')

        passo.value = 1

        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }

    } else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}