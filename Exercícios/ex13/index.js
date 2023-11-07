const data = new Date()
const hora = data.getHours()
const minuto = data.getMinutes();
const segundos = data.getSeconds();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

console.log(`agora é ${hora}:${minuto}:${segundos} da data ${dia}/${mes}/${ano}`)