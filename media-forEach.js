const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota){ //function é uma função callback neste caso. Uma função callback é uma função que passamos como parâmetro de uma outra.
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
