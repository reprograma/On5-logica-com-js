// Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
// A média para passar de ano na escola é 7

// O ano escolar tem 3 trimestres
// Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado com média [valor da média], aproveite suas férias!
// Alunos reprovados devem ver a mensagem: Que pena, sua média é [valor da média] e você foi reprovado.

// Bônus:
// Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
// Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
// Arredondar valores da nota (mostrar números inteiros)

// Declaração de variaveis
let nomeAluno = prompt ('Digite seu nome: ')
let notaUm = parseInt(prompt('Digite a primeira nota: '))
let notaDois = parseInt(prompt('Digite a segunda nota: '))
let notaTres = parseInt(prompt('Digite a terceira nota: '))
let mediaArit = Math.round((notaUm + notaDois + notaTres)/3)
console.log(mediaArit)

// Condições
if (mediaArit >= 7) {
    alert (`Parabéns ${nomeAluno}, você foi aprovado com média ${mediaArit}, aproveite suas férias!`)
} else if (mediaArit < 7) {
    let botao = confirm ('Você gostaria de fazer aulas de recuperação?')
    if (botao === true) {
        alert ('Ótimo, as aulas começam na semana que vem!')
    } else {
        alert ('Que pena, nos vemos ano que vem!')
    }
} else {
    alert(`Que pena ${nomeAluno}, sua média é ${mediaArit} e você foi reprovado.`)
}


