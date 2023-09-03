const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { //por convenção, quando não utiliza o primeiro parâmetro, se coloca um _. Mas é obrigatório incluir esse parâmetro, mesmo que inexistente, para se poder acessar o segundo.
    return medias[indice] <7;
})

console.log(reprovados)
