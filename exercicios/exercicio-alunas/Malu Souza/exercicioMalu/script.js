inicio = confirm('Se você quer descobrir a sua nota final, clique em OK')

nome = prompt('Maravilha! Para isso, preciso saber o seu nome. Digite seu nome completo abaixo:');

nota1 = prompt('Qual foi a sua primeira nota?');
nota1 = parseInt(nota1);

nota2 = prompt('Qual foi a sua segunda nota?');
nota2 = parseInt(nota2);

nota3 = prompt('Qual foi a sua terceira nota?');
nota3 = parseInt(nota3);

console.log(nota1, nota2, nota3);
media = parseInt((nota1 + nota2 + nota3) / 3);
console.log(media)

if (media >= 7) {
    alert(`Parabéns ${nome}, você foi aprovado com média ${media}!`)
}
else {
    alert(`Que pena ${nome}, sua média é ${media} e você foi reprovado.`);
    let confirmacao = confirm(`${nome}, procure a coordenação para saber como proceder.`);
    console.log(confirmacao);
    if (confirmacao === true) {
        alert(`${nome}, até o próximo ano!`);
    }
} 