let nomeAluno = prompt('Insira o seu nome para visualizar o resultado final: ');
let notaUm = Number(prompt('Digite a primeira nota: '));
let notaDois = Number(prompt('Digite a segunda nota: '));
let notaTres = Number(prompt('Digite a terceira nota: '));
// let soma = Math.round((notaUm + notaDois + notaTres));
let media = Math.round((notaUm + notaDois + notaTres)/3);



if (media >= 7) {
    alert(`${nomeAluno}, parabéns! Você foi aprovado com média ${media}, aproveite suas férias!`);
} else {
    let reprovacao = confirm(`Que pena, ${nomeAluno}, sua média é ${media} e você foi reprovado. Você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?`);
    if (reprovacao) {
        alert('Ótimo, as aulas de recuperação começam semana que vem.');
    } else {
        alert('Que pena, te vejo ano que vem.')
    }
}