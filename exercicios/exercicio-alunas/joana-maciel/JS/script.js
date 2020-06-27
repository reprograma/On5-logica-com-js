
let nomeAluno = prompt('Nome completo:');

let notaSem1 = parseFloat(prompt('Média obtida no 1º trimestre:'));

let notaSem2 = parseFloat(prompt('Média obtida no 2º trimestre:'));

let notaSem3 = parseFloat(prompt('Média obtida no 3º trimestre:'));


let mediaFinal = parseInt((notaSem1+notaSem2+notaSem3)/3);


if (mediaFinal>=7) {
    alert (`Parabéns, ${nomeAluno}! Você está aprovado com média ${mediaFinal}, aproveite suas férias!`)
}

else {
    alert(`Que pena, ${nomeAluno}, sua média final foi ${mediaFinal} e você foi reprovado.`);
    let recuperacao = confirm (`Gostaria de fazer as aulas de recuperação?`);
    if (recuperacao == true) {
        alert(`Ótimo! As aulas de recuperação começam na semana que vem!`)
    }
    else {
        alert(`Que pena, ${nomeAluno}! Te vejo ano que vem.`)
    }
}