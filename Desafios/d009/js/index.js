let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Calc() {
    let nameF = prompt('Qual é o nome do funcionário?')
    let sal = prompt(`Qual é o salário do(a) ${nameF}?`)
    let porc = prompt(`O salário do(a) ${nameF} vai ser reajustado em qual porcentagem?`)

    if (nameF == '' || sal == '' || porc == '') {
        alert('Valores inválidos ou não digitados. Por favor, tente novamente.')

    } else {
        res.innerHTML = ''
        let salario = Number(sal)
        let porcentagem = Number(porc)
        let aumenporc = (porcentagem / 100) + 1

        let novosal = salario * aumenporc
        let aumento = novosal - salario

        res2.innerHTML = `${nameF} recebeu um aumento salarial!`
        res.appendChild(res2)

        res.innerHTML += `O salário atual era ${salario.toLocaleString('pt-br', {
            style: 'currency', 
            currency: 'BRL'
        })}.<br>`
        res.innerHTML += `Com um aumento de ${porcentagem.toLocaleString('pt-br')}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })} no próximo mês.<br>`
        res.innerHTML += `E a partir daí, ${nameF} vai passar a ganhar ${novosal.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })}`
    }
}