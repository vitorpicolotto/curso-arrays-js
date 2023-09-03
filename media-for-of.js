const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

for (let nota of notas) { //for of significa PARA CADA ELEMENTO DENTRO DE NOTAS
    somaDasNotas += nota
}

const media = somaDasNotas/notas.length

console.log(`A média das notas é ${media}!`)
