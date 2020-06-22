// Ex. Casa
//
// Transformar o algoritmo que vocês escreveram em código javascript. O usuário
// vai digitar as notas de cada trimestre e vocês vão mostrar na tela a média
// final
//
//     Crie um algoritmo para o cálculo de média final de um aluno, para ele
// saber se passou de ano ou não
//
//         A média para passar de ano na escola é 7
//
//         O ano escolar tem 3 trimestres
//
//         Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado
// com média [valor da média], aproveite suas férias!
//
//         Alunos reprovados devem ver a mensagem: Que pena, sua média é [valor
// da média] e você foi reprovado.
//
//         Bônus:
//             Peça para o aluno digitar seu nome e mostre a mensagem de
// aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado,
// aproveite suas férias!)
//             Para os alunos reprovados, mostrar mensagem perguntando se eles
// gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar
// de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo
// ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas
// de recuperação começam semana que vem!
//             Arredondar valores da nota (mostrar números inteiros)

let msg1 = 'Olá, seja bem-vindo! Digite seu nome: '; //mensagem de entrada
let Nome = prompt(msg1);
let msg2 = 'Digite sua média final do 1º trimestre: ';
let N1 = prompt(msg2);
let msg3 = 'Digite sua média final do 2º trimestre: ';
let N2 = prompt(msg3);
let msg4 = 'Digite sua média final do 3º trimestre: ';
let N3 = prompt(msg4);

let MF = Math.round((parseInt(N1) + parseInt(N2) + parseInt(N3)) / 3);

let msg5 = `${Nome}, sua média final foi ${MF}. Gostaria de fazer
  a recuperação e passar de ano? [Clique em "OK" ou "Cancelar"]`;

if (MF >= 7) {
  alert(`${Nome}, parabéns! Você está aprovado com nota ${MF}, aproveite suas
    férias!`)
} else if (MF < 7) {
  let rmsg5 = confirm(msg5)
    if (rmsg5) {
      alert(`Ótimo! As aulas extras começam semana que vem, ${Nome}`)
    } else {
      alert(`Que pena, te vejo ano que vem, ${Nome}`)
    }
}
