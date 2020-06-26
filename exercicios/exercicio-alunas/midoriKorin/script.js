let notaUm = Number (prompt ('Digite a sua nota do primeiro trimestre.'));
let notaDois = Number (prompt ('Digite a sua nota do segundo trimestre.'));
let notaTrês = Number (prompt ('Digite a sua nota do terceiro trimestre.'));
let media = (notaUm + notaDois + notaTrês)/3;

if (media >= 7) {
    alert (`Parabéns, você foi aprovado com média ${media}, aproveite suas férias!`)
} else {
    alert (`Que pena, sua média é ${media} e você foi reprovado.`)
};