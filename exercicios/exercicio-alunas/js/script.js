let nomeUsuario = prompt('Digite seu nome')
let media = 7;
let nota1 = prompt('Digite a sua nota do primeiro trimestre').replace(',', '.');
let nota2 = prompt('Digite a sua nota do segundoo trimestre').replace(',', '.');
let nota3 = prompt('Digite a sua nota do terceiro trimestre').replace(',', '.');
let mediaFinal = Math.round((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3);
//console.log(nota1, nota2, nota3, mediaFinal);
if (mediaFinal >= media) {
    alert(`${nomeUsuario}, parabéns! Você está aprovado(a) com média final de ${mediaFinal}, aproveite suas férias!`);
} else {
    alert(`Que pena ${nomeUsuario}, sua média final foi de ${mediaFinal} e você foi reprovado(a)`);

    let resposta = confirm(`${nomeUsuario}, gostaria de fazer aulas de recuperação para tentar melhorar a sua nota e passar de ano?`);

    if (resposta)
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
    else {
        alert('Que pena, te vejo ano que vem.');
    }
}