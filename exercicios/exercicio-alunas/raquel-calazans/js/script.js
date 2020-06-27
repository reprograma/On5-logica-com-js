let nome = prompt('Qual é o seu nome?');
let nota1 = Number(prompt('Qual foi a sua nota do primeiro trimestre?'));
let nota2 = Number(prompt('Qual foi a sua nota do segundo trimestre?'));
let nota3 = Number(prompt('Qual foi a sua nota do terceiro trimestre?'));

// a minha escola arredonda a nota para o número inteiro mais próximo, 
// por isso a utilização da função Math.round()
let media = function() {
    return Math.round((nota1 + nota2 + nota3)/3);
}

if (media() >= 7) {
    alert(`${nome} parabéns, você foi aprovado(a) com média ${media()}, aproveite suas férias!`);
} else if (media() < 7) {
    let recuperacao = confirm(`${nome}, sua média é ${media()}, você gostaria de fazer aulas de recuperação para tentar melhorar sua nota e passar de ano?`);
    if (recuperacao === true){
        alert('Ótimo, as aulas de recuperação começam semana que vem!');
    } else {
        alert('Que pena, te vejo ano que vem.');
    }
}