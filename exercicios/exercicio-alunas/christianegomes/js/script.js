// prompt inserção nome e notas
var aluno = prompt('Digite o nome do(a) Aluno(a):');
var nota1 = parseInt(prompt('Digite a Primeira Nota:'));
var nota2 = parseInt(prompt('Digite a Segunda Nota:'));
var nota3 = parseInt(prompt('Digite a Terceira Nota:'));
console.log(nota1, nota2, nota3);
//calculo da média
var media = (nota1 + nota2 + nota3) / 3;
var media =  Math.round(media);
console.log(media);
//resultado do cálculo com mensagem ao usuário


if (media>=7){
    var aprovado = media;
    alert(`Parabéns Aluno(a): ${aluno}! Você foi aprovado com média: ${aprovado}. Aproveite as suas férias!`);
} else{
    var reprovado = media;
    alert(`Que pena Aluno(a): ${aluno}. Sua média é: ${reprovado} e você foi reprovado.`);
} 



