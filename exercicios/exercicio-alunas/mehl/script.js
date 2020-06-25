 //Arredondar valores da nota (mostrar números inteiros)

 let nomeAluno = prompt('Digite seu nome');
 let notaUm = Number(prompt('Digite a nota do primeiro trimestre'));
 let notaDois = Number(prompt('Digite a nota do segundo trimestre'));
 let notaTres = Number(prompt('Digite a nota do terceiro trimestre'));

 let mediaAluno = Math.round((notaUm + notaDois + notaTres) / 3);
 let fazerRecuperacao

 if (mediaAluno >= 7) {
     alert('Parabéns, ' + nomeAluno + ' você foi aprovado com média ' + mediaAluno + ', aproveite suas férias!');
  } else  {
    fazerRecuperacao = confirm('Que pena, sua média é ' + mediaAluno + ' e você foi reprovado. Gostaria de fazer aulas de recuperação para tentar melhorar sua nota e passar de ano?');

    if (fazerRecuperacao) {
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
    } else {
        alert('Que pena, te vejo ano que vem.');
    }
  }
