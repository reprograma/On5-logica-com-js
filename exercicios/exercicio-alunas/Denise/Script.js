nome = prompt ('Vamos descobrir se você foi aprovado? Escreva seu nome.');
nota1 = prompt ('Digite a nota que você obteve no primeiro trimestre.');
nota1= parseInt (nota1);
nota2 = prompt ('Digite a nota que você obteve no segundo trimestre.');
nota2= parseInt (nota2);
nota3 = prompt ('Digite a nota que você obteve no terceiro trimestre.');
nota3= parseInt (nota3);
console.log (nota1, nota2, nota3);
media = parseInt ((nota1+nota2+nota3)/3);
console.log (media)
if (media >= 7){
    alert(`Parabéns ${nome}, você foi aprovado com média ${media}, aproveite suas férias!`)
}
else{
    alert(`Que pena ${nome}, sua média é ${media} e você foi reprovado.`);
    let confirmacao = confirm ('Você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?');
    console.log(confirmacao);
    if (confirmacao === true) {
        alert(`Ótimo ${nome} , as aulas de recuperação começam semana que vem!`);
    }
    else{
        alert(`Que pena ${nome}, te vejo ano que vem.`)
    }
}