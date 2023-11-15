let n = [6,4,5,7,3]

for (let m in n) {
    n.sort()
    console.log(`A posição ${m} tem o valor ${n[m]}`)
}

console.log(n.indexOf(7))