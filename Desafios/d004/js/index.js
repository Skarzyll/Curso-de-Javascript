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
            
            alert(`O preço do produto ${produto} é R$ ${valProduto},00 e está faltando R$ ${r},00`)

        } else {
            let r = valD - valP

            alert(`Você comprou ${produto} que custou R$ ${valProduto},00. Deu R$ ${valDado},00 em dinheiro e vai receber R$ ${r},00 de troco. Volte sempre!`)
        }
    }

}