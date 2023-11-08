const hoje = new Date();
const semana = hoje.getDay()
const dia = hoje.getDate()
const mes = hoje.getMonth()

switch (semana) {
    case 0:
        console.log(`Hoje é dia ${dia}/${mes} - Domingo`)
        break;
    case 1: 
        console.log(`Hoje é dia ${dia}/${mes} - Segunda-feira`)
        break;
    case 2: 
        console.log(`Hoje é dia ${dia}/${mes} - Terça-feira`)
        break;
    case 3:
        console.log(`Hoje é dia ${dia}/${mes} - Quarta-feira`)
        break;
    case 4:
        console.log(`Hoje é dia ${dia}/${mes} - Quinta-feira`)
        break;
    case 5:
        console.log(`Hoje é dia ${dia}/${mes} - Sexta-feira`)
        break;
    case 6:
        console.log(`Hoje é dia ${dia}/${mes} - Sabado`)
        break;
    default:
        console.log(`[ERRO!]`)
        break;
}