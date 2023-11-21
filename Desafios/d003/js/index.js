function funcao() {
    let num = prompt('Digite um número inteiro qualquer.')
    let n = Number(num)
    let menor = n - 1
    let maior = n + 1

    alert(`Antes de ${n}, temos o número ${menor}. Depois de ${n}, temos o número ${maior}.`)
}