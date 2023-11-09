function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inpano = document.getElementById('inpdate')
    var res = document.getElementById('res')

    if (inpano.value == 0 || Number(inpano.value) > ano) {
        window.alert('[ERROR]')
    } else {
        var rad = document.getElementsByName('radsex')
        var idade = ano - Number(inpano.value)
        var genero = ''
        if (rad[0].checked) {
            genero = 'masculino'
        } else {
            genero = 'feminino'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} ${idade}`
    } 
}