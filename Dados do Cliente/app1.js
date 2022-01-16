/*
Cadastro de Clientes
*/

let nome = "Ana";
let sobrenome = "Luíza";
let idade = 22;
const numDoCliente = 92090157;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(numDoCliente);

idade = 23;
console.log(idade);

let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numDeAnos = 6
let ehBomPagador = "Sim";
ehBomPagador = true

console.log("Olá, sra. " + nome + " " + sobrenome + "." + " " + "Sua idade é:" + " " + idade + ".");

/* Montante + valorEmprestimo + juros
   juros = valorEmprestimo * taxaDeJuros * numDeAnos
*/

let juros = valorEmprestimo * taxaDeJuros * numDeAnos;
let montante = valorEmprestimo + juros;
console.log("Valor do montante é: " + montante);

/*
Estruturas condicionais: É bom pagador?
*/

if(ehBomPagador){
   console.log("O(a) cliente " + nome + " é bom pagador.")
}else{
   console.log("O(a) cliente " + nome + " não é bom pagador");
}