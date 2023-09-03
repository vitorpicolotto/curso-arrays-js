const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota +1 >= 10 ? 10: nota +1; //OPERADOR TERNÁRIO. adicionar nota +1 é maior ou igual a 10? se for maior ou igual a 10, retorne 10. Se não, adicione 1 a nota
})

console.log(notasAtualizadas);


//Alterando strings com map()

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) =>{
    return nome.toUpperCase();
})

console.log(nomesPadronizados);
