let valores = [8, 9, 7, 4, 85, 32]

for (let posi=0; posi<valores.length;posi++) {
console.log(`A posição ${posi} tem valor ${valores[posi]}`)
}

for (let posi in valores ) {
    console.log(`A posição ${posi} tem valor ${valores[posi]}`)
}