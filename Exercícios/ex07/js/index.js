function Somar() {
    var in1 = document.getElementById('input1')
    var in2 = document.getElementById('input2')
    var res = document.getElementById('div')

    var n1 = Number(in1.value)
    var n2 = Number(in2.value)
    var s = n1 + n2

    res.innerHTML = (`A soma entre ${n1} e ${n2} é ${s}`)
}