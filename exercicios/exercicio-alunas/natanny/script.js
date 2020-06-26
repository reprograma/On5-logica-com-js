let nota1 = Number(prompt('Digite a primeira nota:'));
let nota2 = Number(prompt('Digite a segunda nota:'));
let nota3 = Number(prompt('Digite a terceira nota:'));
let media = Math.round((nota1+nota2+nota3)/3);

if (media >= 7) {
    alert(`Parabéns, você foi aprovado com média ${media}, aproveite suas férias!`)
    let nome = prompt('Digite seu nome:')
    alert(`${nome}, parabéns! você está aprovado, aproveite suas férias!`)
} else if (media <7) { 
    alert(`Que pena, sua média é ${media} e você foi reprovado.`)
    let mensagem = ('Você gostaria de fazer as aulas de recuperação? Se sim, clique em Ok')
    let confirmacao = confirm(mensagem);

    if (confirmacao) {
    alert('Ótimo, as aulas de recuperação começam semana que vem!')
    } else {
    alert('Que pena, te vejo ano que vem!');
    }

    }

