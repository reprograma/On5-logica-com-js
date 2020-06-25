let nome = prompt('Digite seu nome');
let n1 = Number(prompt('Digite sua nota do 1º trimestre'));
let n2 = Number(prompt('Digite sua nota do 2º trimestre'));
let n3 = Number(prompt('Digite sua nota do 3º trimestre'));


media = (n1 + n2 + n3) / 3;
let mediaFinal = Math.round(media)

if (media >= 7) {
    alert(`Parabéns, ${nome}! Você foi aprovado com média ${mediaFinal}, aproveite suas férias!`);
} else{
    let pergunta = (`Que pena, ${nome}! Sua média é ${mediaFinal} e você foi reprovado. Gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?`);
    let resposta = confirm (pergunta)
    if (resposta === true) {
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
    } else {
        alert('Que pena! Te vejo ano que vem.');
    }
};
