function btn() {
    var inp = document.getElementById('inpnum')
    var res = document.getElementById('res')
    
    let a = Number(inp.value)

    if (inp.value.length == '') {
        window.alert('Valor invalido!')

    } else {
        res.innerHTML = ''
        
        for (let i = 1; i <= 10; i++) {
            r = a * i
            res.innerHTML += `${a} X ${i} =  ${r}<br>`
        }
    }
}