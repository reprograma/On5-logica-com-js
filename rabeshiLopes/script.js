let nomeAluno = prompt('Qual é o seu nome?');
let nota1 = parseInt(prompt('Qual foi a sua primeira nota?'));
let nota2 = parseInt(prompt('Qual foi a sua segunda nota?'));
let nota3 = parseInt(prompt('Qual foi a sua terceira nota?'));
let media = Math.round ((nota1 + nota2 + nota3) /3);
if (media >= 7) {
  alert ('Parabéns! ' + nomeAluno + ' ,você está aprovado(a), aproveite suas férias!');
} else {
  let mensagem = ('Que pena, sua média é ' + media + ' e você foi reprovado(a), gostaria de participar das aulas de recuperação?');
  let confirmacao = confirm(mensagem)
  if (confirmacao == true) {
    alert ('Ótimo, as aulas de recuperação começam semana que vem!');
  } else {
      alert ('Que pena, te vejo ano que vem.');
  }
}
