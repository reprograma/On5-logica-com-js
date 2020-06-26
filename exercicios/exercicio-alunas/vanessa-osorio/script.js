

let nome = prompt('Digite seu nome: ');
let nota1 = Number(prompt('Digite a nota 1'));
let nota2 = Number(prompt('Digite a nota 2'));
let nota3 = Number(prompt('Digite a nota 3'));
let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;


if (media >= 6.6 || media >= 6.7) {
    media = Math.floor(media).toFixed(1);
    alert(`Parabéns, ${nome} foi aprovado(a) com média ${media} , aproveite suas férias!`);
} else if (media <= 6.8 || media <= 6.9) {
    media = Math.ceil(media).toFixed(1);
    alert(`Que pena ${nome}, sua média é ${media} e você foi reprovado(a).`);
    let recuperar = confirm(`${nome}, você gostaria de fazer aulas de recuperação para tentar melhorar a nota e passar de ano.`);

    if (recuperar === true) {
        alert(`Ótimo ${nome}, as aulas de recuperação começam semana que vem!`);
    } else if (recuperar === false) {
        alert(`Que pena ${nome}, te vejo ano que vem.`);
    }
    
}
