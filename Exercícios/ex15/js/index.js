function carregado() {
    var divhr = document.getElementById('divhr')
    var img = document.getElementById('img')
    const data = new Date();
    const hr = data.getHours();
    const minutos = data.getMinutes();

    if (hr >= 0 && hr < 12) {
        divhr.innerHTML = `São ${hr}:${minutos} da manhã`
        document.body.style.backgroundColor = 'brown'
    } else if (hr >= 12 && hr <= 18) {
        divhr.innerHTML = `São ${hr}:${minutos} da tarde`
        img.src = 'images/tarde.png'
        document.body.style.background = '#a52a2ae7'
    } else {
        divhr.innerHTML = `São ${hr}:${minutos} da noite`
        img.src = 'images/noite.png'
        document.body.style.background = '#0000000'
    }
}