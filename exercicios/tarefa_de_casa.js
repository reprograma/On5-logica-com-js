let nome = prompt("Qual a seu nome?");

let nota1 = parseInt(prompt("Qual a sua primeira nota?"));
let nota2 = parseInt(prompt("Qual a sua segunda nota?"));
let nota3 = parseInt(prompt("Qual a sua terceira nota?"));


media = Math.round((nota1 + nota2 + nota3) / 3.0);

if (media >= 7) {
    alert(`Parabéns ${nome}, você foi aprovado(a) com média ${media}, aproveite suas férias!`);
} else {
    alert(`Que pena ${nome}, sua média é ${media} e você foi reprovado(a).`);
    if (confirm("Você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano?")) {
        alert(`Ótimo ${nome}, as aulas de recuperação começam semana que vem!`);
    } else {
        alert(`Que pena ${nome}, te vejo ano que vem.`);
    }
}