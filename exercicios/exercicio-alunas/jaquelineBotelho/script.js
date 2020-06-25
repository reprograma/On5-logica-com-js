//Transformar o algoritmo que vocês escreveram em código javascript. O usuário vai digitar as notas de cada trimestre e vocês vão mostrar na tela a média final
//Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
//A média para passar de ano na escola é 7
//O ano escolar tem 3 trimestres
//Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado com média [valor da média], aproveite suas férias!
//Alunos reprovados devem ver a mensagem: Que pena, sua média é [valor da média] e você foi reprovado.

//Bônus:
//Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
//Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. 
//Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
//Arredondar valores da nota (mostrar números inteiros)


let nomeAluno = prompt("Digite seu nome");
let notaUm = Number(prompt("Digite a primeira nota:"));
let notaDois = Number(prompt("Digite a segunda nota:"));
let notaTres = Number(prompt("Digite a terceira nota:"));

console.log(notaUm, notaDois, notaTres);

let mediaEscola = 7;

let mediaAluno = (notaUm + notaDois + notaTres) / 3;
mediaAluno = Math.ceil(mediaAluno);
if (mediaAluno >= mediaEscola){
  alert(`Parabéns ${nomeAluno}, você foi aprovado com média ${mediaAluno},
  aproveite suas férias!`);
} else {
  let recuperacao = confirm(`Que pena ${nomeAluno}, sua média é ${mediaAluno} e você foi reprovado.
  Gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?`);

  console.log(recuperacao)
  
  if (recuperacao) { // também pode ser escrito como (recuperacao === true) 
    alert("Ótimo, as aulas de recuperação começam semana que vem!");
  } else {
    alert("Que pena, te vejo ano que vem!");
  }
};

