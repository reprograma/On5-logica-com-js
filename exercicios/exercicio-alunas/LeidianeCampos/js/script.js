alert('Olá, caro(a) aluno(a). Bem-vindo(a) ao sistema de notas do Colégio Dom Bosco.\nPrecisamos de algumas informações sobre você para que possamos informá-lo(a) se passou de ano. \nVamos lá?');

let aluno = prompt('Informe seu nome:');
let nota1 = parseFloat(prompt('Agora, nos informe a média que obteve no 1º trimestre:'));
let nota2 = parseFloat(prompt('Vamos precisar também da média que obteve no 2º trimestre. Qual foi?'));
let nota3 = parseFloat(prompt('Por fim, nos informe a média que obteve no 3º trimestre:'));

alert(`Obrigada pelas informações, ${aluno}!`);

let mediafinal = parseInt((nota1+nota2+nota3)/3);

if (mediafinal>=7) {
    alert (`Parabéns, ${aluno}! Você foi aprovado com média ${mediafinal}! Aproveite suas férias.`)
}
else {
    alert(`Que pena, ${aluno}, sua média final foi ${mediafinal} e você foi reprovado.`);
    let recuperacao = confirm (`Gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?`);
    if (recuperacao == true) {
        alert(`Ótimo! \n As aulas de recuperação começam na semana que vem, ${aluno}!`)
    }
    else {
        alert(`Que pena, ${aluno}! \n Nos vemos no ano que vem.`)
    }
}
