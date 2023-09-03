//desafio: alterar o arry sem modificar o original
const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; //essa sintaxe do [...] (spread operator) é a forma correta do JS para se COPIAR um array sem modificar o original. O ,10 serve para adicionar a nova nota para não precisar usar a função .push


console.log(`As novas notas são ${novasNotas}.`)
console.log(`As notas originais são ${notas}.`)

