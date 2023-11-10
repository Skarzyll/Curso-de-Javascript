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
                img.setAttribute('src', 'images/crianca-homem.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-homem.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-homem.png')
                
            } else {
                //velho
                img.setAttribute('src', 'images/velho-homem.png')

            }

        } else if (rad[1].checked) {
            genero = 'feminino'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'images/crianca-mulher.png')

            } else if (idade < 21) {
                //jovem   
                img.setAttribute('src', 'images/jovem-mulher.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/adulto-mulher.png')

            } else {
                //velho
                img.setAttribute('src', 'images/velho-mulher.png')

            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos uma pessoa de genero ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    } 
}