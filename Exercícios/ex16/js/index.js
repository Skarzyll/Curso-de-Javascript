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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (rad[0].checked) {
            genero = 'masculino'

            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem    
            } else if (idade < 50) {
                //adulto
            } else {
                //velho
            }
        } else {
            genero = 'feminino'

            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem    
            } else if (idade < 50) {
                //adulto
            } else {
                //velho
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} ${idade}`
        res.appendChild(img)
    } 
}