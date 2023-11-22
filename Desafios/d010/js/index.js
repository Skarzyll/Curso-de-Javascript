let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Calc() {
    let a = prompt('Qual o valor de a?')
    let b = prompt('Qual o valor de b?')
    let c = prompt('Qual o valor de c?')

    if (a == '' || b == '' || c == '') {
        alert('Valores inválidos ou não digitados. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let valA = Number(a)
        let valB = Number(b)
        let valC = Number(c)

        let delta = b ** 2 - 4 * a * c

        res2.innerHTML = 'Resolvendo Bhaskara'
        res.appendChild(res2)

        res.innerHTML += `A equação atual é <strong>${valA}x&sup2; + ${valB}x + ${valC} = 0</strong><br>`
        res.innerHTML += `O cálculo realizado será <strong>&Delta; = ${valB}&sup2; - 4 . ${valA} . ${valC}</strong><br>`
        res.innerHTML += `O valor calculado foi <strong>&Delta; = ${delta}</strong>`
    }
}