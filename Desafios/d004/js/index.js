function Calc() {
    let produto = prompt('Que produto você está comprando?')
    let valProduto = prompt(`Quanto custa o(a) ${produto} que você está comprando?`)
    let valDado = prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}?`)

    if (valProduto == 0 && valDado == 0) {
        alert(`O(A) ${produto} é de graça, pode pegar!`)
    } else {
        let valP = Number(valProduto)
        let valD = Number(valDado)

        if (valP > valD) {
            let r = valP - valD
            
            alert(`O preço do produto ${produto} é ${valProduto.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
            })} e está faltando ${r.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
            })}.`)

        } else {
            let r = valD - valP

            alert(`Você comprou ${produto} que custou ${valProduto.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
            })}. Deu ${valDado.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
            })} em dinheiro e vai receber ${r.toLocaleString('pt-br', {
                style: 'currency', currency: 'BRL'
            })} de troco. Volte sempre!`)
        }
    }

}