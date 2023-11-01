function btn() {
    var vel = document.getElementById('inpnumber')
    var veln = Number(vel.value) 
    var d = document.getElementById('div')

    if (veln >= 100) {
        d.innerHTML = `Sua velocidade é de ${veln}km/h e está acima do limite de velocidade. Você foi multado!`
    } else if (veln <= 20) {
        d.innerHTML = `Sua velocidade é de ${veln}km/h e você está abaixo da velocidade permitida. Você foi multado!`
    } else {
        d.innerHTML = `Você está a ${veln}km/h e está na velocidade permitida.`
    }  
}