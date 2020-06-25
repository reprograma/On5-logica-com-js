//a regra de arredondamento da escola é:notas < 6.7 são arredondadas para baixo, e notas > 6.8 são arredondadas para cima.;
let nomeUsuario = prompt('Digite seu nome')
let nota1 = parseFloat(prompt('Digite a sua nota do primeiro trimestre').replace(',', '.'));
let nota2 = parseFloat(prompt('Digite a sua nota do segundoo trimestre').replace(',', '.'));
let nota3 = parseFloat(prompt('Digite a sua nota do terceiro trimestre').replace(',', '.'));
let mediaFinal = (nota1 + nota2 + nota3) / 3;
//console.log(nota1, nota2, nota3, mediaFinal);
if (mediaFinal >= 6.8) {

    Math.ceil(mediaFinal);

    alert(`${nomeUsuario}, parabéns! Você está aprovado(a) com média final de ${mediaFinal}, aproveite suas férias!`);

} else {

    Math.floor(mediaFinal);

    alert(`Que pena ${nomeUsuario}, sua média final foi de ${mediaFinal} e você foi reprovado(a)`);

    let resposta = confirm(`${nomeUsuario}, gostaria de fazer aulas de recuperação para tentar melhorar a sua nota e passar de ano?`);

    if (resposta)

        alert('Ótimo, as aulas de recuperação começam semana que vem!');

    else {

        alert('Que pena, te vejo ano que vem.');
    }
}