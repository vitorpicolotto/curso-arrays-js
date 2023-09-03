// const numeros = [100, 200, 300, 400, 500, 600];

// //Primeira expressão: é executada apenas uma vez;
// //Segunda expressão: é uma condição de execução;
// //Terceira expressão: é executada sempre ao final do bloco;

// for (let indice=0; indice < numeros.length; indice++) {
//     console.log(numeros[indice])
// }


//Cálculo de média

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas/notas.length

console.log(`A média das notas é ${media}!`)

//Exemplo 2
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media1 = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media1 += notasGerais[i][j]/notasGerais[i].length;
    }
}

media1 = media1/notasGerais.length
console.log(media1);

//Para percorrer o array de trás pra frente

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//Para percorrer de dois em dois
const numeros2 = [100, 200, 300, 400, 500, 600];

for (let i = numeros2.length - 1; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}

//Outro exemplo, criando números pares de 0 a 100
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

