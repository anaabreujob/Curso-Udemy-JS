//ELSE IF = TAXA DE JUROS POR IDADE
/**
18~25 anos -> 9%
26~35 anos -> 8%
36~50 anos -> 7%
51 ou mais -> 6%
 */

let nome = "Ana";
let sobrenome = "Luíza";
let idade = 22;
const numDoCliente = 92090157;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numDeAnos = 6
let ehBomPagador = "Sim";
ehBomPagador = true


if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

console.log(taxaDeJuros);