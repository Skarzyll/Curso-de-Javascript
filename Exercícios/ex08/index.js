var vel = 50.5

if (vel >= 100) {
    console.log(`Sua velocidade é de ${vel}km/h e está acima do limite de velocidade. Você foi multado!`)
} else if (vel <= 20) {
    console.log(`Sua velocidade é de ${vel}km/h e você está abaixo da velocidade permitida. Você foi multado!`)
} else {
    console.log(`Você está a ${vel}km/h e está na velocidade permitida.`)
}