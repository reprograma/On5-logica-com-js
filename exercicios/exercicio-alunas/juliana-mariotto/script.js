let nomeAluno = prompt('Digite seu nome:');
let notaUm = Number(prompt('Digite sua nota do primeiro trimestre:'));
let notaDois = Number(prompt('Agora digite a nota do segundo trimestre:'));
let notaTres = Number(prompt('E por fim, digite a nota do terceiro trimestre:'));

let mediaAluno = Math.round((notaUm + notaDois + notaTres) / 3);
let fazerRecuperacao

if (mediaAluno >= 7) {
    alert('Parabéns ' + nomeAluno + ', você foi aprovado(a) com média ' + mediaAluno + '. Aproveite suas férias!');
 } else  {
   fazerRecuperacao = confirm('' + nomeAluno + ', sua média é ' + mediaAluno + ' e você foi reprovado(a)! O que acha de fazer aulas de recuperação e ter mais uma oportunidade de passar de ano?');

   if (fazerRecuperacao) {
       alert('Ótimo, as aulas de recuperação começam semana que vem!');
   } else {
       alert('Que pena, te vejo ano que vem!');
   }
 }
