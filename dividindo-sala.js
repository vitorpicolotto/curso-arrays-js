const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length/2); //o segundo parâmetro não é incluído no "corte" (de forma que o componente 10 seria excluído - ficando de 0 a 9)

//console.log(alunos);      //slice não vai alterar o array original, precisa criar uma nova const antes dos alunos.slice
console.log(sala1);

const sala2 = alunos.slice (10) //quando não coloca o segundo parâmetro significa que vai até o final.

console.log(sala2);
