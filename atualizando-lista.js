const nomes = ["João", "Ana", 'Caio', 'Lara', 'Marjorie', 'Leo'];

nomes.splice(1, 2, "Rodrigo") //o segundo parâmetro é a quantidade de itens que você quer remover a partir do primeiro parâmetro selecionado - se for 0, não remove o item. O terceiro parâmetro é para incluir um item no que foi removido. O método altera o array original.

console.log(nomes)
