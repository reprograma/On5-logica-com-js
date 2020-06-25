// ### Transformar o algoritmo que vocês escreveram em código javascript. O usuário vai digitar as notas de cada trimestre e vocês vão mostrar na tela a média final

// * Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
//   - A média para passar de ano na escola é 7
//   - O ano escolar tem 3 trimestres
//   - Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado com média [valor da média], aproveite suas férias!
//   - Alunos reprovados devem ver a mensagem: Que pena, sua média é [valor da média] e você foi reprovado.

//   - *Bônus:*
//     - Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
//     - Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
//     - Arredondar valores da nota (mostrar números inteiros)

var rs = require('readline-sync');
var nome = rs.question("Digite seu nome: ")
var nota1 = rs.questionInt("Digite sua nota da P1: ")
var nota2 = rs.questionInt("Digite sua nota da P2: ")
var nota3 = rs.questionInt("Digite sua nota da P3: ")

var media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log("Parabéns, " + nome + " você foi aprovado com média " + media.toFixed(2) +", aproveite suas férias!")
}else{
    console.log("Que pena, " + nome + " sua média é " + media.toFixed(2) + " e você foi reprovado.")
}

