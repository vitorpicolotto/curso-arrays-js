const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //Set é uma classe do JS. É parecido com uma lista, mas seus elementos NÃO podem se repetir.

const nomesAtualizados = [...meuSet]; //para remover o Set(4) da frente
// ou const nomesAtualizados = [...new Set(nomes)] - podendo remover a const anterior

console.log(nomesAtualizados)
