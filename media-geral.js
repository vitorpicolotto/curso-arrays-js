const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){ //reduce vai iterar sobre o array. Não altera o valor originar
   const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0) //0 é o valor inicial do acumulador

 const media = somaDasNotas / notasDaSala.length

 return media;
}

console.log(`A média da sala de JS é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//Exemplo de REDUCE
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170
