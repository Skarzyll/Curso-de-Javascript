let res = document.getElementById('res')
let res2 = document.createElement('h2')

function Enter() {
    let nameAl = prompt('Qual o nome do aluno?')
    let nota1 = prompt(`Primeira nota de ${nameAl}:`)
    let nota2 = prompt(`Segunda nota de ${nameAl}:`)

    if (nameAl == '' || nameAl == 0) {
        alert('Por favor, digite o nome do aluno.')
    } else {
        res.innerHTML = ''
        let nt1 = Number(nota1)
        let nt2 = Number(nota2)
        let media = (nt1 + nt2) / 2

        res2.innerHTML = `Analisando a situação de ${nameAl}`
        res.appendChild(res2)

        if (media < 3) {
            res.innerHTML += `Com as notas ${nt1.toLocaleString('pt-br')} e ${nt2.toLocaleString('pt-br')}, a <strong>Média é ${media.toLocaleString('pt-br', 
            {
                maximumFractionDigits: 2
            })}</strong><br>`
            res.innerHTML += `Com média abaixo de 3,0, o aluno está <strong style="background-color: rgba(255, 0, 0, 0.39); color: red;">REPROVADO</strong>`

        } else if (media <= 6) {
            res.innerHTML += `Com as notas ${nt1.toLocaleString('pt-br')} e ${nt2.toLocaleString('pt-br')}, a <strong>Média é ${media.toLocaleString('pt-br', 
            {
                maximumFractionDigits: 2
            })}</strong><br>`
            res.innerHTML += `Com média entre 3,0 e 6,0, o aluno está em <strong style="color: yellow;">RECUPERAÇÃO</strong>`

        } else {
            res.innerHTML += `Com as notas ${nt1.toLocaleString('pt-br')} e ${nt2.toLocaleString('pt-br')}, a <strong>Média é ${media.toLocaleString('pt-br', 
            {
                maximumFractionDigits: 2
            })}</strong><br>`
            res.innerHTML += `Com média acima 6,0, o aluno está <strong style="background-color: #4DEC3C; color: green;">APROVADO</strong>`
        }
    }
}