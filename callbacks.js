const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome){
    console.log(nome);
})

//anônima
nomes.forEach((nome) => {
    console.log(nome);
})

//callback externa

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);

